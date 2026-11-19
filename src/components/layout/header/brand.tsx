import Link from "next/link";

import { profile } from "@/content/profile";

export default function Brand({ onClick }: { onClick: () => void }) {
  return (
    <Link
      className="brand"
      href="/"
      aria-label="Portfolio home"
      onClick={onClick}
    >
      <span>{profile.name}</span>
    </Link>
  );
}