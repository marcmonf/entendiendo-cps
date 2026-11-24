import React, { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown, Globe, Loader2 } from 'lucide-react';
import { SUPPORTED_LANGUAGES } from '../i18n/types';
import { useI18n } from '../i18n/LanguageContext';

export const LanguageSelector: React.FC = () => {
  const { lang, setLang, isLoadingLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onOutside);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onOutside);
      document.removeEventListener('keydown', onEsc);
    };
  }, [open]);

  const current =
    SUPPORTED_LANGUAGES.find((l) => l.code === lang) ?? SUPPORTED_LANGUAGES[0];
  const readyLangs = SUPPORTED_LANGUAGES.filter((l) => l.ready);
  const upcomingLangs = SUPPORTED_LANGUAGES.filter((l) => !l.ready);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-2xl border border-white/12 bg-[#090e1a]/88 px-2.5 sm:px-3 py-2.5 text-xs font-medium text-slate-200 backdrop-blur-xl transition hover:border-amber-400/35 hover:text-white"
        aria-label="Cambiar idioma / Switch language"
        aria-expanded={open}
        title="Idioma / Language"
      >
        {isLoadingLang ? (
          <Loader2 className="h-3.5 w-3.5 animate-spin text-amber-300" />
        ) : (
          <Globe className="h-3.5 w-3.5 text-amber-300 shrink-0" />
        )}
        <span className="font-mono-meta text-[11px]">{current.shortLabel}</span>
        <ChevronDown
          className={`h-3 w-3 text-slate-400 transition-transform ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 overflow-hidden rounded-2xl border border-white/14 bg-[#0b1121]/97 p-1.5 shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-2xl animate-fade-up z-50">
          <div className="space-y-0.5">
            {readyLangs.map((opt) => {
              const active = opt.code === lang;
              return (
                <button
                  key={opt.code}
                  onClick={() => {
                    setLang(opt.code);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs transition ${
                    active
                      ? 'bg-amber-400/16 text-amber-100 font-semibold'
                      : 'text-slate-200 hover:bg-white/8 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="font-mono-meta text-[10px] text-amber-300/90 w-5 text-left">
                      {opt.shortLabel}
                    </span>
                    <span>{opt.nativeName}</span>
                  </span>
                  {active && <Check className="h-3.5 w-3.5 text-amber-300" />}
                </button>
              );
            })}
          </div>

          {upcomingLangs.length > 0 && (
            <div className="mt-1.5 border-t border-white/8 pt-1.5 px-2.5 pb-1">
              <p className="text-[9.5px] font-mono-meta uppercase tracking-widest text-slate-500">
                {t.langComingSoon}
              </p>
              <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                {upcomingLangs.map((l) => l.nativeName).join(' · ')}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
