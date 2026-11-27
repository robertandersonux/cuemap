import type { Room } from '../lib/types';

/**
 * A plan-view glyph for each room, drawn in the vernacular of an architectural
 * drawing: thin walls, a door swing, the fixtures you'd annotate. The filled
 * dot marks roughly where that room's change happens.
 */
const PLANS: Record<Room, { shapes: JSX.Element; dot: [number, number] }> = {
  Bedroom: {
    shapes: (
      <>
        <rect x="5" y="5" width="38" height="38" />
        <rect x="11" y="9" width="20" height="24" />
        <line x1="11" y1="14" x2="31" y2="14" />
        <rect x="33" y="9" width="7" height="7" />
        <path d="M43 36 A7 7 0 0 1 36 43" />
      </>
    ),
    dot: [36.5, 12.5],
  },
  Kitchen: {
    shapes: (
      <>
        <rect x="5" y="5" width="38" height="38" />
        <path d="M5 15 H33 V43" />
        <rect x="13" y="7" width="9" height="7" />
        <circle cx="38" cy="12" r="4" />
        <path d="M5 36 A7 7 0 0 0 12 43" />
      </>
    ),
    dot: [26, 10.5],
  },
  'Living Room': {
    shapes: (
      <>
        <rect x="5" y="5" width="38" height="38" />
        <rect x="10" y="30" width="28" height="9" />
        <line x1="10" y1="34" x2="38" y2="34" />
        <rect x="16" y="18" width="16" height="8" />
        <line x1="14" y1="9" x2="34" y2="9" />
      </>
    ),
    dot: [24, 22],
  },
  Office: {
    shapes: (
      <>
        <rect x="5" y="5" width="38" height="38" />
        <rect x="9" y="9" width="30" height="9" />
        <circle cx="24" cy="26" r="5" />
        <line x1="9" y1="38" x2="21" y2="38" />
        <path d="M43 36 A7 7 0 0 1 36 43" />
      </>
    ),
    dot: [14, 13.5],
  },
  Entryway: {
    shapes: (
      <>
        <rect x="13" y="5" width="22" height="38" />
        <path d="M13 12 A14 14 0 0 0 27 26" />
        <line x1="13" y1="12" x2="13" y2="5" />
        <rect x="17" y="31" width="14" height="8" />
      </>
    ),
    dot: [24, 35],
  },
};

export function RoomPlan({ room, size = 48 }: { room: Room; size?: number }) {
  const plan = PLANS[room];
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      role="img"
      aria-label={`${room} plan`}
      className="plan"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square">
        {plan.shapes}
      </g>
      <circle cx={plan.dot[0]} cy={plan.dot[1]} r="3.2" className="plan-dot" />
    </svg>
  );
}
