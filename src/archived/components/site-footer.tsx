"use client";

import { profile } from "@/archived/content/profile";

export default function SiteFooter({ label }: { label: string }) {
  const backToTop = () => {
    const reduced = matchMedia("(prefers-reduced-motion:reduce)").matches;
    document.getElementById("top")?.scrollIntoView({
      behavior: reduced ? "instant" : "smooth",
    });
    document.querySelector<HTMLElement>(".brand")?.focus({ preventScroll: true });
  };

  return (
    <footer className="footer">
      <p>
        © <span>{profile.name}</span> / {label}
      </p>
      <div className="footer-links">
        {/^https:\/\//.test(profile.github) && (
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
        )}
        {/^https:\/\//.test(profile.linkedin) && (
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
        )}
        <button type="button" onClick={backToTop}>
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
