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
export const R_CORE_BASE = 525;
export const R_DEEP_BASE = 775;

function degToRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

export function computeAtlasLayout(): {
  familyLayouts: FamilyLayout[];
  conceptPositions: Record<string, ConceptLayout>;
  familyPositions: Record<string, FamilyLayout>;
} {
  const familyLayouts: FamilyLayout[] = [];
  const conceptPositions: Record<string, ConceptLayout> = {};
  const familyPositions: Record<string, FamilyLayout> = {};

  for (const family of FAMILIES) {
    const angleRad = degToRad(family.angleDeg);
    const fx = Math.cos(angleRad) * R_FAMILY;
    const fy = Math.sin(angleRad) * R_FAMILY;

    const famConcepts = CONCEPTS.filter((c) => c.familyId === family.id);
    const coreList = famConcepts.filter((c) => c.tier === 'core');
    const deepList = famConcepts.filter((c) => c.tier === 'deep');

    // Keep each family strictly within its 40° sector so adjacent unfolded constellations never crowd
    const coreSpreadDeg = Math.min(28.5, Math.max(20, (coreList.length - 1) * 7.2));
    const deepSpreadDeg = Math.min(32.5, Math.max(22, (deepList.length - 1) * 4.6));

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

        // Distinct staggered sub-orbits keep labels cleanly separated vertically & horizontally
        const stagger =
          ring === 'deep'
            ? idx % 3 === 0
              ? -48
              : idx % 3 === 1
                ? 22
                : 90
            : idx % 2 === 0
              ? -36
              : 38;
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
    const dist = 120 + Math.sqrt(rand()) * 1260;
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
