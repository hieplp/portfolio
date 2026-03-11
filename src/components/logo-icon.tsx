export function LogoIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* < */}
      <path d="M8 6L2 12L8 18" />
      {/* / */}
      <path d="M10 6L14 18" />
      {/* > */}
      <path d="M16 6L22 12L16 18" />
    </svg>
  );
}
