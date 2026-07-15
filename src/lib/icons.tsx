interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  strokeWidth?: number;
  style?: React.CSSProperties;
}

export function PrayingHands({
  size = 24,
  color = 'currentColor',
  className,
  strokeWidth = 1.5,
  style,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      {/* Left hand */}
      <path d="M7 11.5c0-1 .5-2 1-2.5" />
      <path d="M8 9c.5-.8 1.2-1.5 2-2" />
      <path d="M10 7.5c.8-.5 1.5-1 2.5-1.2" />
      {/* Right hand */}
      <path d="M14 6.5c.8.2 1.7.7 2.5 1.2" />
      <path d="M16.5 9c.5.8.8 1.5 1 2.5" />
      {/* Fingers pointing up */}
      <path d="M12 6c0-1.5-.5-3-1.5-4" />
      <path d="M12 6c0-1.5.5-3 1.5-4" />
      {/* Left palm */}
      <path d="M7 11.5V14c0 2.21 1.79 4 4 4h2c2.21 0 4-1.79 4-4v-2.5" />
    </svg>
  );
}

export function Mosque({
  size = 24,
  color = 'currentColor',
  className,
  strokeWidth = 1.5,
  style,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      {/* Dome */}
      <path d="M4 16V10c0-4.42 3.58-8 8-8s8 3.58 8 8v6" />
      {/* Finial */}
      <circle cx="12" cy="2" r="1" fill={color} stroke="none" />
      {/* Minaret left */}
      <line x1="4" y1="7" x2="4" y2="20" />
      <line x1="3" y1="7" x2="5" y2="7" />
      <line x1="3" y1="16" x2="5" y2="16" />
      {/* Minaret right */}
      <line x1="20" y1="7" x2="20" y2="20" />
      <line x1="19" y1="7" x2="21" y2="7" />
      <line x1="19" y1="16" x2="21" y2="16" />
      {/* Base */}
      <line x1="3" y1="20" x2="21" y2="20" />
      <line x1="5" y1="16" x2="19" y2="16" />
      {/* Door */}
      <path d="M10.5 20v-4c0-1 .7-1.5 1.5-1.5s1.5.5 1.5 1.5v4" />
    </svg>
  );
}

export function Tasbih({
  size = 24,
  color = 'currentColor',
  className,
  strokeWidth = 1.5,
  style,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      {/* Bead circle */}
      <circle cx="12" cy="12" r="9" />
      {/* Beads around the circle */}
      <circle cx="12" cy="3" r="1.2" fill={color} stroke="none" />
      <circle cx="18.4" cy="6.8" r="1.2" fill={color} stroke="none" />
      <circle cx="21" cy="12" r="1.2" fill={color} stroke="none" />
      <circle cx="18.4" cy="17.2" r="1.2" fill={color} stroke="none" />
      <circle cx="12" cy="21" r="1.2" fill={color} stroke="none" />
      <circle cx="5.6" cy="17.2" r="1.2" fill={color} stroke="none" />
      <circle cx="3" cy="12" r="1.2" fill={color} stroke="none" />
      <circle cx="5.6" cy="6.8" r="1.2" fill={color} stroke="none" />
      {/* Tassel at bottom */}
      <path d="M12 21v2" />
      <path d="M11 23c0 .5.5 1 1 1s1-.5 1-1" />
    </svg>
  );
}
