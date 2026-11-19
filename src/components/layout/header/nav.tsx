import { SECTIONS } from "./use-active-section";

export default function Nav({
  active,
  open,
  onNavigate,
}: {
  active: string;
  open: boolean;
  onNavigate: () => void;
}) {
  return (
    <nav
      className={`nav${open ? " is-open" : ""}`}
      id="navigation"
      aria-label="Sections"
    >
      {SECTIONS.map(({ id, label }) => (
        <a
          key={id}
          href={`/#${id}`}
          aria-current={active === id ? "location" : undefined}
          onClick={onNavigate}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}