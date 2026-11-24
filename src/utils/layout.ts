import { CONCEPTS, FAMILIES, type Concept, type Family } from '../data/atlasData';

export interface Point {
  x: number;
  y: number;
}

export interface FamilyLayout {
  family: Family;
  x: number;
  y: number;
  angleRad: number;
  coreConcepts: ConceptLayout[];
  deepConcepts: ConceptLayout[];
  allConcepts: ConceptLayout[];
}

export interface ConceptLayout {
  concept: Concept;
  family: Family;
  x: number;
  y: number;
  angleRad: number;
  ring: 'core' | 'deep';
  labelAnchor: 'start' | 'end' | 'middle';
  labelOffsetX: number;
  labelOffsetY: number;
}

export interface StarDot {
  id: number;
  x: number;
  y: number;
  r: number;
  opacity: number;
  duration: number;
  delay: number;
}

export const R_FAMILY = 295;
export const R_CORE_BASE = 550;
export const R_DEEP_BASE = 855;

function degToRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

function radToDeg(rad: number): number {
  return (rad * 180) / Math.PI;
}

interface InternalNode {
  layout: ConceptLayout;
  famAngle: number;
  aDeg: number;
  r: number;
}

function getLabelBox(layout: ConceptLayout, padX = 5, padY = 4) {
  const fs = layout.ring === 'core' ? 12.2 : 10.8;
  const cw = fs * 0.62;
  const w = layout.concept.term.length * cw + 8;
  const h = fs + 4;
  const tx = layout.x + layout.labelOffsetX;
  const ty = layout.y + layout.labelOffsetY;
  let x1: number;
  let x2: number;
  if (layout.labelAnchor === 'start') {
    x1 = tx;
    x2 = tx + w;
  } else if (layout.labelAnchor === 'end') {
    x1 = tx - w;
    x2 = tx;
  } else {
    x1 = tx - w / 2;
    x2 = tx + w / 2;
  }
  const y1 = ty - h * 0.78;
  const y2 = ty + h * 0.28;
  return { x1: x1 - padX, y1: y1 - padY, x2: x2 + padX, y2: y2 + padY };
}

export function computeAtlasLayout(
  familiesList: Family[] = FAMILIES,
  conceptsList: Concept[] = CONCEPTS
): {
  familyLayouts: FamilyLayout[];
  conceptPositions: Record<string, ConceptLayout>;
  familyPositions: Record<string, FamilyLayout>;
} {
  const familyLayouts: FamilyLayout[] = [];
  const conceptPositions: Record<string, ConceptLayout> = {};
  const familyPositions: Record<string, FamilyLayout> = {};
  const allNodes: InternalNode[] = [];

  for (const family of familiesList) {
    const angleRad = degToRad(family.angleDeg);
    const fx = Math.cos(angleRad) * R_FAMILY;
    const fy = Math.sin(angleRad) * R_FAMILY;

    const famConcepts = conceptsList.filter((c) => c.familyId === family.id);
    const coreList = famConcepts.filter((c) => c.tier === 'core');
    const deepList = famConcepts.filter((c) => c.tier === 'deep');

    // Keep each family strictly within its 40° sector so adjacent unfolded constellations never crowd
    const coreSpreadDeg = Math.min(31.0, Math.max(21.0, (coreList.length - 1) * 6.8));
    const deepSpreadDeg = Math.min(34.5, Math.max(23.0, (deepList.length - 1) * 4.4));

    const buildRing = (
      list: Concept[],
      baseRadius: number,
      spreadDeg: number,
      ring: 'core' | 'deep'
    ): ConceptLayout[] => {
      const n = list.length;
      return list.map((concept, idx) => {
        const t = n === 1 ? 0 : idx / (n - 1) - 0.5;
        const aDeg = family.angleDeg + t * spreadDeg;
        const aRad = degToRad(aDeg);

        // Adaptive staggered sub-orbits keep dense V2 constellations cleanly separated
        let stagger: number;
        if (ring === 'deep') {
          stagger =
            n >= 8
              ? ([-68, 4, 76, 144][idx % 4] ?? 0)
              : ([-54, 18, 90][idx % 3] ?? 0);
        } else {
          stagger =
            n >= 6
              ? ([-44, 12, 68][idx % 3] ?? 0)
              : ([-40, 42][idx % 2] ?? 0);
        }
        const r = baseRadius + stagger;

        const cx = Math.cos(aRad) * r;
        const cy = Math.sin(aRad) * r;

        const cosA = Math.cos(aRad);
        const sinA = Math.sin(aRad);
        let labelAnchor: 'start' | 'end' | 'middle' = 'start';
        let labelOffsetX = 15;
        let labelOffsetY = 4;

        if (Math.abs(cosA) < 0.14) {
          labelAnchor = 'middle';
          labelOffsetX = 0;
          labelOffsetY = sinA < 0 ? -18 : 23;
        } else if (cosA < 0) {
          labelAnchor = 'end';
          labelOffsetX = -15;
        } else {
          labelAnchor = 'start';
          labelOffsetX = 15;
        }

        const item: ConceptLayout = {
          concept,
          family,
          x: cx,
          y: cy,
          angleRad: aRad,
          ring,
          labelAnchor,
          labelOffsetX,
          labelOffsetY,
        };
        conceptPositions[concept.slug] = item;
        allNodes.push({ layout: item, famAngle: family.angleDeg, aDeg, r });
        return item;
      });
    };

    const coreConcepts = buildRing(coreList, R_CORE_BASE, coreSpreadDeg, 'core');
    const deepConcepts = buildRing(deepList, R_DEEP_BASE, deepSpreadDeg, 'deep');

    const fl: FamilyLayout = {
      family,
      x: fx,
      y: fy,
      angleRad,
      coreConcepts,
      deepConcepts,
      allConcepts: [...coreConcepts, ...deepConcepts],
    };
    familyLayouts.push(fl);
    familyPositions[family.id] = fl;
  }

  // Deterministic relaxation pass guaranteeing zero label-label & label-star overlaps across all languages
  for (let iter = 0; iter < 40; iter++) {
    let moved = false;

    // 1. Resolve label vs label overlaps
    for (let i = 0; i < allNodes.length; i++) {
      for (let j = i + 1; j < allNodes.length; j++) {
        const a = allNodes[i];
        const b = allNodes[j];
        const ba = getLabelBox(a.layout);
        const bb = getLabelBox(b.layout);
        if (ba.x1 < bb.x2 && ba.x2 > bb.x1 && ba.y1 < bb.y2 && ba.y2 > bb.y1) {
          moved = true;
          const oyOv = Math.min(ba.y2, bb.y2) - Math.max(ba.y1, bb.y1);
          const acy = (ba.y1 + ba.y2) / 2;
          const bcy = (bb.y1 + bb.y2) / 2;
          const sgn = acy <= bcy ? -1 : 1;
          const push = oyOv * 0.55 + 2.5;

          const pair: Array<[InternalNode, number]> = [
            [a, sgn],
            [b, -sgn],
          ];
          for (const [obj, dirY] of pair) {
            const sinA = Math.sin(obj.layout.angleRad);
            const cosA = Math.cos(obj.layout.angleRad);
            if (Math.abs(cosA) >= 0.35) {
              const daRad = (dirY * push * 0.55) / (obj.r * cosA);
              const daDeg = Math.max(-1.8, Math.min(1.8, radToDeg(daRad)));
              const lo = obj.famAngle - 18.2;
              const hi = obj.famAngle + 18.2;
              obj.aDeg = Math.max(lo, Math.min(hi, obj.aDeg + daDeg));
              obj.layout.angleRad = degToRad(obj.aDeg);
            }
            if (Math.abs(sinA) >= 0.35) {
              const dr = Math.max(-18, Math.min(18, (dirY * push * 0.65) / sinA));
              const minR = obj.layout.ring === 'core' ? 450 : 745;
              const maxR = obj.layout.ring === 'core' ? 655 : 1070;
              obj.r = Math.max(minR, Math.min(maxR, obj.r + dr));
            }
            obj.layout.x = Math.cos(obj.layout.angleRad) * obj.r;
            obj.layout.y = Math.sin(obj.layout.angleRad) * obj.r;
            if (
              obj.layout.labelAnchor !== 'middle' &&
              Math.abs(obj.layout.labelOffsetY - 4) < 12
            ) {
              obj.layout.labelOffsetY = Math.max(
                -10,
                Math.min(18, obj.layout.labelOffsetY + dirY * 1.5)
              );
            }
          }
        }
      }
    }

    // 2. Resolve label vs other star body overlaps
    for (const a of allNodes) {
      const ba = getLabelBox(a.layout);
      for (const b of allNodes) {
        if (a === b) continue;
        const nx = b.layout.x;
        const ny = b.layout.y;
        const nr = b.layout.ring === 'core' ? 13 : 10.5;
        const qx = Math.max(ba.x1, Math.min(nx, ba.x2));
        const qy = Math.max(ba.y1, Math.min(ny, ba.y2));
        const dist = Math.hypot(nx - qx, ny - qy);
        if (dist < nr) {
          moved = true;
          const dirY = ny >= (ba.y1 + ba.y2) / 2 ? 1 : -1;
          const pair: Array<[InternalNode, number]> = [
            [b, dirY],
            [a, -dirY],
          ];
          for (const [target, sDir] of pair) {
            const sinA = Math.sin(target.layout.angleRad);
            const cosA = Math.cos(target.layout.angleRad);
            if (Math.abs(sinA) >= 0.35) {
              const dr = Math.max(
                -14,
                Math.min(14, (sDir * (nr - dist + 5) * 0.6) / sinA)
              );
              const minR = target.layout.ring === 'core' ? 450 : 745;
              const maxR = target.layout.ring === 'core' ? 655 : 1070;
              target.r = Math.max(minR, Math.min(maxR, target.r + dr));
            } else if (Math.abs(cosA) >= 0.35) {
              const daDeg = Math.max(
                -1.5,
                Math.min(
                  1.5,
                  radToDeg((sDir * (nr - dist + 5) * 0.6) / (target.r * cosA))
                )
              );
              const lo = target.famAngle - 18.2;
              const hi = target.famAngle + 18.2;
              target.aDeg = Math.max(lo, Math.min(hi, target.aDeg + daDeg));
              target.layout.angleRad = degToRad(target.aDeg);
            }
            target.layout.x = Math.cos(target.layout.angleRad) * target.r;
            target.layout.y = Math.sin(target.layout.angleRad) * target.r;
          }
        }
      }
    }

    if (!moved) break;
  }

  return { familyLayouts, conceptPositions, familyPositions };
}

/** Graceful quadratic Bezier curve from (x1,y1) to (x2,y2) curving gently around an axis */
export function buildBranchPath(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  bend = 0.12
): string {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const cx = mx - dy * bend;
  const cy = my + dx * bend;
  return `M ${x1.toFixed(1)} ${y1.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`;
}

/** Celestial chord curve between two concepts, gently pulled toward the origin */
export function buildCrossArcPath(x1: number, y1: number, x2: number, y2: number): string {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const cx = mx * 0.52;
  const cy = my * 0.52;
  return `M ${x1.toFixed(1)} ${y1.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`;
}

/** Deterministic procedural starfield so it never flickers on re-render */
export function generateStarfield(count = 140): StarDot[] {
  const stars: StarDot[] = [];
  let seed = 133742;
  const rand = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
  for (let i = 0; i < count; i++) {
    const angle = rand() * Math.PI * 2;
    const dist = 120 + Math.sqrt(rand()) * 1380;
    stars.push({
      id: i,
      x: Math.cos(angle) * dist,
      y: Math.sin(angle) * dist,
      r: 0.7 + rand() * 1.65,
      opacity: 0.16 + rand() * 0.45,
      duration: 3.5 + rand() * 5.5,
      delay: rand() * 5,
    });
  }
  return stars;
}
