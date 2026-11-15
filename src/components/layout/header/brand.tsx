import { profile } from "@/content/profile";

export default function Brand({ onClick }: { onClick: () => void }) {
  return (
    <a
      className="brand"
      href="#top"
      aria-label="Portfolio home"
      onClick={onClick}
    >
      <span>{profile.name}</span>
    </a>
  );
}