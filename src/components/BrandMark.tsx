type Props = {
  className?: string;
  stroke?: string;
  strokeWidth?: number;
};

// The house-and-waffle mark, shared between CustomCursor and ImageSlot so
// the same brand device recurs across the site instead of a generic icon.
export default function BrandMark({ className, stroke = "currentColor", strokeWidth = 2.6 }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 112"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 52 L60 16 L104 52" />
      <path d="M30 52 L60 28 L90 52" />
      <line x1="30" y1="52" x2="30" y2="80" />
      <line x1="90" y1="52" x2="90" y2="80" />
      <rect x="38" y="55" width="44" height="30" rx="2" />
      <rect x="41" y="58" width="11.3" height="6.7" rx="1.4" />
      <rect x="54.3" y="58" width="11.3" height="6.7" rx="1.4" />
      <rect x="67.6" y="58" width="11.3" height="6.7" rx="1.4" />
      <rect x="41" y="66.7" width="11.3" height="6.7" rx="1.4" />
      <rect x="54.3" y="66.7" width="11.3" height="6.7" rx="1.4" />
      <rect x="67.6" y="66.7" width="11.3" height="6.7" rx="1.4" />
      <rect x="41" y="75.4" width="11.3" height="6.7" rx="1.4" />
      <rect x="54.3" y="75.4" width="11.3" height="6.7" rx="1.4" />
      <rect x="67.6" y="75.4" width="11.3" height="6.7" rx="1.4" />
      <rect x="24" y="80" width="72" height="7" />
      <rect x="22" y="87" width="76" height="3" />
      <rect x="48" y="83" width="24" height="5" rx="1" />
      <line x1="52" y1="88" x2="56" y2="83" />
      <line x1="58" y1="88" x2="62" y2="83" />
      <line x1="64" y1="88" x2="68" y2="83" />
      <line x1="10" y1="95" x2="110" y2="95" />
    </svg>
  );
}
