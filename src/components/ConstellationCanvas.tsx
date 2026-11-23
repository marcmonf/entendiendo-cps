import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  CONCEPT_MAP,
  type Concept,
  type Family,
  type GuidedRoute,
} from '../data/atlasData';
import {
  R_CORE_BASE,
  R_DEEP_BASE,
  R_FAMILY,
  buildBranchPath,
  buildCrossArcPath,
  generateStarfield,
  type ConceptLayout,
  type FamilyLayout,
} from '../utils/layout';

export interface CameraState {
  tx: number;
  ty: number;
  scale: number;
}

interface ConstellationCanvasProps {
  familyLayouts: FamilyLayout[];
  conceptPositions: Record<string, ConceptLayout>;
  familyPositions: Record<string, FamilyLayout>;
  expandedFamilies: Set<string>;
  selectedConceptSlug: string | null;
  selectedCore: boolean;
  masteredSlugs: Set<string>;
  activeRoute: GuidedRoute | null;
  activeRouteStep: number;
  camera: CameraState;
  onCameraChange: (next: CameraState) => void;
  onToggleFamily: (familyId: string) => void;
  onSelectConcept: (slug: string) => void;
  onSelectCore: () => void;
  onBackgroundClick: () => void;
}

export const ConstellationCanvas: React.FC<ConstellationCanvasProps> = ({
  familyLayouts,
  conceptPositions,
  familyPositions,
  expandedFamilies,
  selectedConceptSlug,
  selectedCore,
  masteredSlugs,
  activeRoute,
  activeRouteStep,
  camera,
  onCameraChange,
  onToggleFamily,
  onSelectConcept,
  onSelectCore,
  onBackgroundClick,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [hoveredFamilyId, setHoveredFamilyId] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const dragRef = useRef<{
    active: boolean;
    startX: number;
    startY: number;
    origTx: number;
    origTy: number;
    moved: boolean;
  }>({ active: false, startX: 0, startY: 0, origTx: 0, origTy: 0, moved: false });

  // Multi-touch pinch-to-zoom state for mobile & tablet
  const pointersRef = useRef<Map<number, { x: number; y: number }>>(new Map());
  const pinchRef = useRef<{
    initialDist: number;
    initialScale: number;
    initialTx: number;
    initialTy: number;
    midX: number;
    midY: number;
  } | null>(null);

  const stars = useMemo(() => generateStarfield(140), []);

  // Active focus concept (either hovered or selected) drives cross-branch arcs
  const focusSlug = hoveredSlug ?? selectedConceptSlug;
  const focusConcept: Concept | null = focusSlug ? CONCEPT_MAP[focusSlug] ?? null : null;

  const relatedSet = useMemo(() => {
    if (!focusConcept) return new Set<string>();
    return new Set<string>(focusConcept.related);
  }, [focusConcept]);

  // Ambient nebula color tracks focus concept > hovered family > active route > default amber/cyan
  const ambientColor = useMemo(() => {
    if (focusConcept) {
      return familyPositions[focusConcept.familyId]?.family.color ?? '#F59E0B';
    }
    if (hoveredFamilyId) {
      return familyPositions[hoveredFamilyId]?.family.color ?? '#06B6D4';
    }
    if (activeRoute) {
      return activeRoute.accent;
    }
    return '#F59E0B';
  }, [focusConcept, hoveredFamilyId, activeRoute, familyPositions]);

  // Map route slugs -> 1-based step numbers
  const routeStepIndexBySlug = useMemo(() => {
    const map = new Map<string, number>();
    if (activeRoute) {
      activeRoute.steps.forEach((st, idx) => map.set(st.slug, idx + 1));
    }
    return map;
  }, [activeRoute]);

  // Compute organic tree parent for each deep concept (closest angular core concept in same family)
  const deepParentMap = useMemo(() => {
    const map: Record<string, ConceptLayout> = {};
    for (const fl of familyLayouts) {
      for (const deep of fl.deepConcepts) {
        let best = fl.coreConcepts[0];
        let bestDist = Infinity;
        for (const core of fl.coreConcepts) {
          const d = Math.hypot(deep.x - core.x, deep.y - core.y);
          if (d < bestDist) {
            bestDist = d;
            best = core;
          }
        }
        if (best) map[deep.concept.slug] = best;
      }
    }
    return map;
  }, [familyLayouts]);

  // Cross-branch arcs from focusConcept to all its related nodes (or their collapsed family star)
  const crossArcs = useMemo(() => {
    if (!focusConcept) return [];
    const src = conceptPositions[focusConcept.slug];
    if (!src) return [];
    const srcExpanded = expandedFamilies.has(focusConcept.familyId);
    const sx = srcExpanded ? src.x : familyPositions[focusConcept.familyId].x;
    const sy = srcExpanded ? src.y : familyPositions[focusConcept.familyId].y;

    const arcs: Array<{
      id: string;
      path: string;
      color: string;
      targetFamilyId: string;
      isCollapsedBridge: boolean;
    }> = [];
    const collapsedBridgesSeen = new Set<string>();

    for (const relSlug of focusConcept.related) {
      const target = conceptPositions[relSlug];
      if (!target) continue;
      const targetExpanded = expandedFamilies.has(target.family.id);

      if (targetExpanded) {
        arcs.push({
          id: `${focusConcept.slug}->${relSlug}`,
          path: buildCrossArcPath(sx, sy, target.x, target.y),
          color: target.family.color,
          targetFamilyId: target.family.id,
          isCollapsedBridge: false,
        });
      } else if (!collapsedBridgesSeen.has(target.family.id)) {
        collapsedBridgesSeen.add(target.family.id);
        const tf = familyPositions[target.family.id];
        arcs.push({
          id: `${focusConcept.slug}->fam:${tf.family.id}`,
          path: buildCrossArcPath(sx, sy, tf.x, tf.y),
          color: tf.family.color,
          targetFamilyId: tf.family.id,
          isCollapsedBridge: true,
        });
      }
    }
    return arcs;
  }, [focusConcept, conceptPositions, familyPositions, expandedFamilies]);

  // Guided Route continuous path
  const routeSegments = useMemo(() => {
    if (!activeRoute) return [];
    const segs: Array<{ id: string; path: string; completed: boolean }> = [];
    for (let i = 0; i < activeRoute.steps.length - 1; i++) {
      const a = conceptPositions[activeRoute.steps[i].slug];
      const b = conceptPositions[activeRoute.steps[i + 1].slug];
      if (!a || !b) continue;
      const ax = expandedFamilies.has(a.family.id) ? a.x : familyPositions[a.family.id].x;
      const ay = expandedFamilies.has(a.family.id) ? a.y : familyPositions[a.family.id].y;
      const bx = expandedFamilies.has(b.family.id) ? b.x : familyPositions[b.family.id].x;
      const by = expandedFamilies.has(b.family.id) ? b.y : familyPositions[b.family.id].y;
      segs.push({
        id: `route-${i}`,
        path: buildCrossArcPath(ax, ay, bx, by),
        completed: i < activeRouteStep,
      });
    }
    return segs;
  }, [activeRoute, activeRouteStep, conceptPositions, familyPositions, expandedFamilies]);

  // Wheel zoom centered cleanly on pointer
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      e.preventDefault();
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = e.clientX - rect.left - rect.width / 2;
      const py = e.clientY - rect.top - rect.height / 2;

      const factor = Math.exp(-e.deltaY * 0.0014);
      const nextScale = Math.min(2.15, Math.max(0.36, camera.scale * factor));
      const ratio = nextScale / camera.scale;

      onCameraChange({
        scale: nextScale,
        tx: px - (px - camera.tx) * ratio,
        ty: py - (py - camera.ty) * ratio,
      });
    },
    [camera, onCameraChange]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [handleWheel]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;

    pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    // Start 2-finger pinch-to-zoom on touch screens
    if (pointersRef.current.size === 2) {
      dragRef.current.active = false;
      const pts = Array.from(pointersRef.current.values());
      const dist = Math.hypot(pts[1].x - pts[0].x, pts[1].y - pts[0].y);
      const rect = containerRef.current?.getBoundingClientRect();
      const midX = (pts[0].x + pts[1].x) / 2 - (rect ? rect.left + rect.width / 2 : 0);
      const midY = (pts[0].y + pts[1].y) / 2 - (rect ? rect.top + rect.height / 2 : 0);
      pinchRef.current = {
        initialDist: Math.max(10, dist),
        initialScale: camera.scale,
        initialTx: camera.tx,
        initialTy: camera.ty,
        midX,
        midY,
      };
      return;
    }

    // Never start pan drag or capture pointer when clicking directly on an interactive star node
    if ((e.target as Element | null)?.closest('[data-interactive="true"]')) {
      return;
    }
    dragRef.current = {
      active: true,
      startX: e.clientX,
      startY: e.clientY,
      origTx: camera.tx,
      origTy: camera.ty,
      moved: false,
    };
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (pointersRef.current.has(e.pointerId)) {
      pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    }

    if (pointersRef.current.size === 2 && pinchRef.current) {
      const pts = Array.from(pointersRef.current.values());
      const dist = Math.hypot(pts[1].x - pts[0].x, pts[1].y - pts[0].y);
      const p = pinchRef.current;
      const nextScale = Math.min(
        2.15,
        Math.max(0.36, p.initialScale * (dist / p.initialDist))
      );
      const ratio = nextScale / p.initialScale;
      onCameraChange({
        scale: nextScale,
        tx: p.midX - (p.midX - p.initialTx) * ratio,
        ty: p.midY - (p.midY - p.initialTy) * ratio,
      });
      return;
    }

    if (!dragRef.current.active) return;
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    if (!dragRef.current.moved && Math.hypot(dx, dy) > 4) {
      dragRef.current.moved = true;
      setIsDragging(true);
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {
        // ignore
      }
    }
    if (dragRef.current.moved) {
      onCameraChange({
        ...camera,
        tx: dragRef.current.origTx + dx,
        ty: dragRef.current.origTy + dy,
      });
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    pointersRef.current.delete(e.pointerId);
    if (pointersRef.current.size < 2) {
      pinchRef.current = null;
    }

    if (!dragRef.current.active) return;
    const wasDrag = dragRef.current.moved;
    dragRef.current.active = false;
    setIsDragging(false);
    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {
      // ignore if capture already released
    }
    if (!wasDrag && (e.target as HTMLElement).dataset.canvasBg === 'true') {
      onBackgroundClick();
    }
  };

  // Hover card preview for effortless scanning
  const hoveredConcept = hoveredSlug ? CONCEPT_MAP[hoveredSlug] : null;
  const hoveredFamily: Family | null = hoveredFamilyId
    ? familyPositions[hoveredFamilyId]?.family ?? null
    : null;

  const hasExpandedAny = expandedFamilies.size > 0;

  return (
    <div
      ref={containerRef}
      data-canvas-bg="true"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className={`relative w-full h-full overflow-hidden select-none touch-none ${
        isDragging ? 'cursor-grabbing' : 'cursor-grab'
      }`}
      style={{
        background: `
          radial-gradient(circle at 50% 48%, ${ambientColor}16 0%, rgba(11, 16, 30, 0.72) 42%, #06080f 85%),
          radial-gradient(circle at 18% 18%, rgba(56, 189, 248, 0.07) 0%, transparent 45%),
          radial-gradient(circle at 82% 80%, rgba(236, 72, 153, 0.06) 0%, transparent 45%),
          #06080f
        `,
        transition: 'background 0.8s ease',
      }}
    >
      {/* Main SVG Observatory */}
      <svg
        data-canvas-bg="true"
        className="w-full h-full block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Soft star glow filter */}
          <filter id="star-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="core-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="14" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="sun-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FEF3C7" />
            <stop offset="45%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" stopOpacity="0.85" />
          </radialGradient>
          <radialGradient id="sun-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.34" />
            <stop offset="55%" stopColor="#F59E0B" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Centered world group with hardware transform */}
        <g
          style={{
            transform: `translate(calc(50% + ${camera.tx}px), calc(50% + ${camera.ty}px)) scale(${camera.scale})`,
            transformOrigin: '0 0',
          }}
        >
          {/* Deep background procedural starfield */}
          <g pointerEvents="none">
            {stars.map((s) => (
              <circle
                key={s.id}
                cx={s.x}
                cy={s.y}
                r={s.r}
                fill="#E2E8F0"
                style={{
                  opacity: s.opacity,
                  animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
                }}
              />
            ))}
          </g>

          {/* Astronomical orbital guide rings */}
          <g pointerEvents="none">
            <circle
              cx={0}
              cy={0}
              r={R_FAMILY}
              fill="none"
              stroke="rgba(148, 163, 184, 0.11)"
              strokeWidth={1}
              strokeDasharray="3 7"
            />
            <circle
              cx={0}
              cy={0}
              r={R_CORE_BASE}
              fill="none"
              stroke={hasExpandedAny ? 'rgba(148, 163, 184, 0.09)' : 'rgba(148, 163, 184, 0.04)'}
              strokeWidth={1}
            />
            <circle
              cx={0}
              cy={0}
              r={R_DEEP_BASE}
              fill="none"
              stroke={hasExpandedAny ? 'rgba(148, 163, 184, 0.07)' : 'rgba(148, 163, 184, 0.03)'}
              strokeWidth={1}
              strokeDasharray="2 10"
            />

            {/* Delicate orbital ring labels placed cleanly in clear open sector (-115 deg / top-left) */}
            <text
              x={-R_FAMILY * 0.42}
              y={-R_FAMILY * 0.86}
              textAnchor="end"
              fill="rgba(148, 163, 184, 0.3)"
              fontSize={9}
              letterSpacing="0.2em"
              className="font-mono-meta uppercase"
            >
              9 CONSTELACIONES
            </text>
            {hasExpandedAny && (
              <>
                <text
                  x={-R_CORE_BASE * 0.44}
                  y={-R_CORE_BASE * 0.87}
                  textAnchor="end"
                  fill="rgba(148, 163, 184, 0.24)"
                  fontSize={8.5}
                  letterSpacing="0.2em"
                  className="font-mono-meta uppercase"
                >
                  PUERTA DE ENTRADA
                </text>
                <text
                  x={-R_DEEP_BASE * 0.44}
                  y={-R_DEEP_BASE * 0.87}
                  textAnchor="end"
                  fill="rgba(148, 163, 184, 0.2)"
                  fontSize={8.5}
                  letterSpacing="0.2em"
                  className="font-mono-meta uppercase"
                >
                  PROFUNDIZACIÓN
                </text>
              </>
            )}
          </g>

          {/* 1. Primary Filaments: Core -> 9 Family Stars */}
          <g pointerEvents="none">
            {familyLayouts.map((fl) => {
              const isExpanded = expandedFamilies.has(fl.family.id);
              const isHovered = hoveredFamilyId === fl.family.id;
              const isFocusedFamily = focusConcept?.familyId === fl.family.id;
              const dimmed = Boolean(focusConcept && !isFocusedFamily && !isExpanded);
              const path = buildBranchPath(0, 0, fl.x, fl.y, 0.09);

              return (
                <g key={`core-branch-${fl.family.id}`}>
                  <path
                    d={path}
                    fill="none"
                    stroke={fl.family.color}
                    strokeWidth={isExpanded || isHovered ? 2.2 : 1.25}
                    strokeOpacity={dimmed ? 0.14 : isExpanded || isHovered ? 0.65 : 0.34}
                    className="constellation-branch"
                  />
                  {(isExpanded || isHovered) && (
                    <path
                      d={path}
                      fill="none"
                      stroke={fl.family.color}
                      strokeWidth={2.4}
                      strokeDasharray="4 20"
                      strokeLinecap="round"
                      strokeOpacity={0.85}
                      className="animate-dash-flow-slow"
                    />
                  )}
                </g>
              );
            })}
          </g>

          {/* 2. Organic Tree Branches: Family -> Core Concepts -> Deep Concepts */}
          <g pointerEvents="none">
            {familyLayouts.map((fl) => {
              const isExpanded = expandedFamilies.has(fl.family.id);
              if (!isExpanded) return null;

              return (
                <g key={`tree-${fl.family.id}`}>
                  {/* Family -> Core concepts */}
                  {fl.coreConcepts.map((cl) => {
                    const isActive =
                      focusSlug === cl.concept.slug || relatedSet.has(cl.concept.slug);
                    const dimmed = Boolean(focusSlug && !isActive);
                    const path = buildBranchPath(fl.x, fl.y, cl.x, cl.y, 0.1);
                    return (
                      <path
                        key={`b-core-${cl.concept.slug}`}
                        d={path}
                        fill="none"
                        stroke={fl.family.color}
                        strokeWidth={isActive ? 2 : 1.25}
                        strokeOpacity={dimmed ? 0.11 : isActive ? 0.78 : 0.42}
                        className="constellation-branch"
                      />
                    );
                  })}

                  {/* Core -> Deep concepts (true organic branching tree!) */}
                  {fl.deepConcepts.map((dl) => {
                    const parent = deepParentMap[dl.concept.slug];
                    const px = parent ? parent.x : fl.x;
                    const py = parent ? parent.y : fl.y;
                    const isActive =
                      focusSlug === dl.concept.slug || relatedSet.has(dl.concept.slug);
                    const dimmed = Boolean(focusSlug && !isActive);
                    const path = buildBranchPath(px, py, dl.x, dl.y, 0.12);
                    return (
                      <path
                        key={`b-deep-${dl.concept.slug}`}
                        d={path}
                        fill="none"
                        stroke={fl.family.color}
                        strokeWidth={isActive ? 1.7 : 0.95}
                        strokeOpacity={dimmed ? 0.08 : isActive ? 0.72 : 0.3}
                        className="constellation-branch"
                      />
                    );
                  })}
                </g>
              );
            })}
          </g>

          {/* 3. Cross-Branch Constellation Chords (when hovering or selecting a concept) */}
          {crossArcs.length > 0 && (
            <g pointerEvents="none">
              {crossArcs.map((arc) => (
                <g key={arc.id}>
                  <path
                    d={arc.path}
                    fill="none"
                    stroke={arc.color}
                    strokeWidth={arc.isCollapsedBridge ? 1.4 : 1.9}
                    strokeOpacity={arc.isCollapsedBridge ? 0.42 : 0.68}
                    strokeDasharray={arc.isCollapsedBridge ? '5 6' : undefined}
                  />
                  <path
                    d={arc.path}
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth={1.6}
                    strokeDasharray="3 21"
                    strokeLinecap="round"
                    strokeOpacity={0.75}
                    className="animate-dash-flow"
                  />
                </g>
              ))}
            </g>
          )}

          {/* 4. Guided Route Trajectory Path */}
          {activeRoute && routeSegments.length > 0 && (
            <g pointerEvents="none">
              {routeSegments.map((seg) => (
                <g key={seg.id}>
                  <path
                    d={seg.path}
                    fill="none"
                    stroke={activeRoute.accent}
                    strokeWidth={2.6}
                    strokeOpacity={seg.completed ? 0.85 : 0.45}
                  />
                  <path
                    d={seg.path}
                    fill="none"
                    stroke="#FFFBEB"
                    strokeWidth={2}
                    strokeDasharray="6 18"
                    strokeLinecap="round"
                    strokeOpacity={0.9}
                    className="animate-dash-flow"
                  />
                </g>
              ))}
            </g>
          )}

          {/* 5. Expanded Concept Stars */}
          {familyLayouts.map((fl) => {
            const isExpanded = expandedFamilies.has(fl.family.id);
            if (!isExpanded) return null;

            return (
              <g key={`nodes-${fl.family.id}`}>
                {fl.allConcepts.map((cl) => {
                  const slug = cl.concept.slug;
                  const isSelected = selectedConceptSlug === slug;
                  const isHovered = hoveredSlug === slug;
                  const isRelated = relatedSet.has(slug);
                  const isMastered = masteredSlugs.has(slug);
                  const routeNum = routeStepIndexBySlug.get(slug);
                  const isCurrentRouteStop =
                    activeRoute && activeRoute.steps[activeRouteStep]?.slug === slug;

                  const isHighlighted =
                    isSelected || isHovered || isRelated || Boolean(isCurrentRouteStop);
                  const isDimmed =
                    (Boolean(focusSlug) && !isHighlighted) ||
                    (Boolean(activeRoute) && !routeNum && !isHighlighted);

                  const baseR = cl.ring === 'core' ? (cl.concept.isPillar ? 9.5 : 7.8) : 5.8;
                  const r = isSelected || isHovered ? baseR + 2.4 : baseR;

                  return (
                    <g
                      key={slug}
                      data-interactive="true"
                      transform={`translate(${cl.x.toFixed(1)}, ${cl.y.toFixed(1)})`}
                      className="cursor-pointer constellation-node"
                      style={{ opacity: isDimmed ? 0.24 : 1 }}
                      onMouseEnter={() => setHoveredSlug(slug)}
                      onMouseLeave={() => setHoveredSlug(null)}
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectConcept(slug);
                      }}
                    >
                      {/* Generous invisible hit area for effortless clicking */}
                      <circle r={20} fill="transparent" />

                      {/* Selection / Route pulse halo */}
                      {(isSelected || isCurrentRouteStop) && (
                        <circle
                          r={r + 11}
                          fill={fl.family.color}
                          fillOpacity={0.22}
                          className="animate-pulse-slow"
                        />
                      )}

                      {/* Pillar outer diamond/ring aura */}
                      {cl.concept.isPillar && (
                        <circle
                          r={r + 5.5}
                          fill="none"
                          stroke="#FDE68A"
                          strokeWidth={1.1}
                          strokeDasharray="2.5 3"
                          strokeOpacity={0.85}
                        />
                      )}

                      {/* Mastered emerald outer ring */}
                      {isMastered && (
                        <circle
                          r={r + 4.2}
                          fill="none"
                          stroke="#34D399"
                          strokeWidth={1.8}
                          strokeOpacity={0.95}
                        />
                      )}

                      {/* Main star body */}
                      <circle
                        r={r}
                        fill={
                          isSelected
                            ? '#FFFFFF'
                            : cl.ring === 'core'
                              ? fl.family.color
                              : '#0f172a'
                        }
                        stroke={fl.family.color}
                        strokeWidth={cl.ring === 'core' ? 2 : 2.1}
                        filter={isHighlighted ? 'url(#star-glow)' : undefined}
                      />

                      {/* Inner luminous white core */}
                      <circle
                        r={Math.max(2, r * 0.42)}
                        fill="#FFFFFF"
                        fillOpacity={cl.ring === 'core' ? 0.92 : 0.78}
                      />

                      {/* Route step badge */}
                      {routeNum && (
                        <g transform="translate(0, -17)">
                          <circle
                            r={9.5}
                            fill={isCurrentRouteStop ? '#F59E0B' : '#0f172a'}
                            stroke={activeRoute?.accent ?? '#F59E0B'}
                            strokeWidth={1.6}
                          />
                          <text
                            y={3.3}
                            textAnchor="middle"
                            fill={isCurrentRouteStop ? '#06080f' : '#FEF3C7'}
                            fontSize={9.5}
                            fontWeight={700}
                            className="font-mono-meta"
                          >
                            {routeNum}
                          </text>
                        </g>
                      )}

                      {/* Crisp concept label */}
                      <text
                        x={cl.labelOffsetX}
                        y={cl.labelOffsetY}
                        textAnchor={cl.labelAnchor}
                        fill={
                          isSelected || isHovered
                            ? '#FFFFFF'
                            : cl.ring === 'core'
                              ? '#F1F5F9'
                              : '#CBD5E1'
                        }
                        fontSize={cl.ring === 'core' ? 12.2 : 10.8}
                        fontWeight={cl.ring === 'core' || isSelected ? 600 : 500}
                        style={{
                          paintOrder: 'stroke',
                          stroke: '#06080f',
                          strokeWidth: 4,
                          strokeLinejoin: 'round',
                          pointerEvents: 'none',
                        }}
                      >
                        {cl.concept.term}
                      </text>
                    </g>
                  );
                })}
              </g>
            );
          })}

          {/* 6. The 9 Family Stars (Constelaciones) */}
          {familyLayouts.map((fl) => {
            const isExpanded = expandedFamilies.has(fl.family.id);
            const isHovered = hoveredFamilyId === fl.family.id;
            const total = fl.allConcepts.length;
            const mastered = fl.allConcepts.filter((c) =>
              masteredSlugs.has(c.concept.slug)
            ).length;
            const progress = total > 0 ? mastered / total : 0;

            const ringR = 27;
            const circumference = 2 * Math.PI * ringR;
            const dashOffset = circumference * (1 - progress);

            // Check if current focused concept bridges into this collapsed family
            const bridgeCount =
              focusConcept && !isExpanded
                ? focusConcept.related.filter(
                    (slug) => conceptPositions[slug]?.family.id === fl.family.id
                  ).length
                : 0;

            const dimmed =
              Boolean(focusConcept) &&
              focusConcept?.familyId !== fl.family.id &&
              bridgeCount === 0 &&
              !isExpanded;

            // Place label outward cleanly without collisions (including bottom pair fanning left/right)
            const cosA = Math.cos(fl.angleRad);
            const sinA = Math.sin(fl.angleRad);
            let labelX = isExpanded ? 0 : cosA * 48;
            let labelY = isExpanded ? 46 : sinA * 48;
            let anchor: 'start' | 'end' | 'middle' = 'middle';

            if (!isExpanded) {
              if (Math.abs(cosA) < 0.15) {
                // Top meridian (-90°): place neatly above orb
                anchor = 'middle';
                labelX = 0;
                labelY = -66;
              } else if (cosA > 0) {
                anchor = 'start';
                labelX = cosA > 0.55 ? 42 : 34;
                labelY = sinA > 0.7 ? 24 : sinA < -0.5 ? -8 : 0;
              } else {
                anchor = 'end';
                labelX = cosA < -0.55 ? -42 : -34;
                labelY = sinA > 0.7 ? 24 : sinA < -0.5 ? -8 : 0;
              }
            }

            // Place +N bridge badge on the inner side facing the core so it never touches outward labels
            const bridgeX = -cosA * 26;
            const bridgeY = -sinA * 26;

            return (
              <g
                key={fl.family.id}
                data-interactive="true"
                transform={`translate(${fl.x.toFixed(1)}, ${fl.y.toFixed(1)})`}
                className="cursor-pointer constellation-node"
                style={{ opacity: dimmed ? 0.35 : 1 }}
                onMouseEnter={() => setHoveredFamilyId(fl.family.id)}
                onMouseLeave={() => setHoveredFamilyId(null)}
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleFamily(fl.family.id);
                }}
              >
                {/* Ambient aura */}
                <circle
                  r={isExpanded ? 42 : isHovered || bridgeCount > 0 ? 38 : 30}
                  fill={fl.family.color}
                  fillOpacity={isExpanded ? 0.16 : isHovered || bridgeCount > 0 ? 0.22 : 0.1}
                  style={{ transition: 'all 0.35s ease' }}
                />

                {/* Track ring */}
                <circle
                  r={ringR}
                  fill="#090d19"
                  fillOpacity={0.92}
                  stroke={fl.family.color}
                  strokeOpacity={isExpanded || isHovered ? 0.65 : 0.32}
                  strokeWidth={1.4}
                />

                {/* Progress arc */}
                {progress > 0 && (
                  <circle
                    r={ringR}
                    fill="none"
                    stroke={fl.family.color}
                    strokeWidth={2.6}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={dashOffset}
                    transform="rotate(-90)"
                    filter="url(#star-glow)"
                  />
                )}

                {/* Inner radiant orb */}
                <circle
                  r={isExpanded ? 11.5 : 9.5}
                  fill={fl.family.color}
                  filter="url(#star-glow)"
                />
                <circle r={4.2} fill="#FFFFFF" fillOpacity={0.95} />

                {/* Expand / Collapse +/- indicator badge */}
                <g transform="translate(20, -20)">
                  <circle
                    r={9}
                    fill="#0b101d"
                    stroke={fl.family.color}
                    strokeWidth={1.3}
                  />
                  <text
                    y={3.6}
                    textAnchor="middle"
                    fill="#F8FAFC"
                    fontSize={12}
                    fontWeight={600}
                    className="font-mono-meta"
                  >
                    {isExpanded ? '−' : '+'}
                  </text>
                </g>

                {/* Bridge count badge placed on inner side toward core (never touches outward text) */}
                {bridgeCount > 0 && !isExpanded && (
                  <g transform={`translate(${bridgeX.toFixed(1)}, ${bridgeY.toFixed(1)})`}>
                    <rect
                      x={-13}
                      y={-9}
                      width={26}
                      height={18}
                      rx={9}
                      fill={fl.family.color}
                    />
                    <text
                      y={3.5}
                      textAnchor="middle"
                      fill="#06080f"
                      fontSize={9.5}
                      fontWeight={700}
                      className="font-mono-meta"
                    >
                      +{bridgeCount}
                    </text>
                  </g>
                )}

                {/* Family Title + Subtitle */}
                <g transform={`translate(${labelX.toFixed(1)}, ${labelY.toFixed(1)})`} pointerEvents="none">
                  <text
                    textAnchor={anchor}
                    fill="#F8FAFC"
                    fontSize={isExpanded ? 12.8 : 14}
                    fontWeight={700}
                    style={{
                      paintOrder: 'stroke',
                      stroke: '#06080f',
                      strokeWidth: 5,
                      strokeLinejoin: 'round',
                    }}
                  >
                    {isExpanded ? fl.family.shortName : fl.family.name}
                  </text>
                  {!isExpanded && (
                    <text
                      y={16}
                      textAnchor={anchor}
                      fill="#94A3B8"
                      fontSize={11}
                      style={{
                        paintOrder: 'stroke',
                        stroke: '#06080f',
                        strokeWidth: 4,
                        strokeLinejoin: 'round',
                      }}
                    >
                      {fl.family.subtitle}
                    </text>
                  )}
                  <text
                    y={isExpanded ? 14 : 31}
                    textAnchor={anchor}
                    fill={fl.family.color}
                    fontSize={10}
                    className="font-mono-meta"
                    style={{
                      paintOrder: 'stroke',
                      stroke: '#06080f',
                      strokeWidth: 4,
                      strokeLinejoin: 'round',
                    }}
                  >
                    {mastered > 0 ? `${mastered}/${total} entendidos` : `${total} conceptos`}
                  </text>
                </g>
              </g>
            );
          })}

          {/* 7. The Central Sun: Complex Problem Solving (CPS) */}
          <g
            data-interactive="true"
            className="cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              onSelectCore();
            }}
          >
            {/* Outer ambient solar halo */}
            <circle r={104} fill="url(#sun-halo)" className="animate-pulse-slow" />

            {/* Rotating astrolabe rings */}
            <circle
              r={76}
              fill="none"
              stroke="rgba(251, 191, 36, 0.28)"
              strokeWidth={1}
              strokeDasharray="4 9"
              className="animate-orbit-slow"
            />
            <circle
              r={65}
              fill="none"
              stroke="rgba(251, 191, 36, 0.22)"
              strokeWidth={1}
              strokeDasharray="16 10 2 10"
              className="animate-orbit-reverse"
            />

            {/* Dark obsidian inner disc */}
            <circle
              r={57}
              fill="#0a0f1e"
              stroke={selectedCore ? '#FDE68A' : 'rgba(245, 158, 11, 0.65)'}
              strokeWidth={selectedCore ? 2.4 : 1.5}
              filter="url(#core-glow)"
            />

            {/* Luminous mini sun center */}
            <circle cy={-21} r={7.5} fill="url(#sun-grad)" filter="url(#star-glow)" />

            <text
              y={4}
              textAnchor="middle"
              fill="#FEF3C7"
              fontSize={25}
              className="font-editorial"
              letterSpacing="0.04em"
            >
              CPS
            </text>
            <text
              y={21}
              textAnchor="middle"
              fill="#94A3B8"
              fontSize={7.2}
              letterSpacing="0.11em"
              className="font-mono-meta uppercase"
            >
              4 PILARES · 5 ATRACTORES
            </text>
          </g>
        </g>
      </svg>

      {/* Whisper Hover Preview Card (bottom-left above controls) */}
      {(hoveredConcept || hoveredFamily) && (
        <div
          pointer-events-none="true"
          className="pointer-events-none fixed bottom-20 left-5 z-20 max-w-sm rounded-2xl border border-white/10 bg-[#0b101d]/88 px-4 py-3 shadow-2xl backdrop-blur-xl animate-fade-up"
        >
          {hoveredConcept ? (
            <div>
              <div className="flex items-center gap-2 text-[11px] font-mono-meta uppercase tracking-wider text-slate-400">
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{
                    backgroundColor: familyPositions[hoveredConcept.familyId]?.family.color,
                  }}
                />
                <span>{familyPositions[hoveredConcept.familyId]?.family.shortName}</span>
                <span>·</span>
                <span>
                  {hoveredConcept.tier === 'core' ? 'Puerta de entrada' : 'Profundización'}
                </span>
              </div>
              <p className="mt-1 font-editorial text-xl leading-tight text-white">
                {hoveredConcept.term}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-slate-300">
                {hoveredConcept.short}
              </p>
              <p className="mt-2 text-[11px] text-amber-300/80">
                {hoveredConcept.related.length} conexiones en el mapa · clic para profundizar
              </p>
            </div>
          ) : hoveredFamily ? (
            <div>
              <div className="flex items-center gap-2 text-[11px] font-mono-meta uppercase tracking-wider text-slate-400">
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ backgroundColor: hoveredFamily.color }}
                />
                <span>Constelación</span>
              </div>
              <p className="mt-1 font-editorial text-xl leading-tight text-white">
                {hoveredFamily.name}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-slate-300">
                {hoveredFamily.description}
              </p>
              <p className="mt-2 text-[11px] text-slate-400">
                Clic para {expandedFamilies.has(hoveredFamily.id) ? 'contraer' : 'desplegar'} sus ramas
              </p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};
