import { email } from "@/content/contact";
import { profile } from "@/content/profile";

// Only real profile links render; an empty field stays out instead of a dead href.
const links = [
  { href: profile.github, label: "GitHub", arrow: "↗", external: true },
  { href: profile.linkedin, label: "LinkedIn", arrow: "↗", external: true },
  { href: `mailto:${email}`, label: "Email", arrow: "", external: false },
].filter((link) => link.href && link.href !== "mailto:");

export default function FooterLinks() {
  return (
    <div className="footer-links">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="footer-link"
          {...(link.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {link.label}
          {link.arrow && (
            <span className="footer-arrow" aria-hidden="true">
              {link.arrow}
            </span>
          )}
        </a>
      ))}
      <a className="footer-link footer-top" href="#top">
        Back to top
        <span className="footer-arrow" aria-hidden="true">
          ↑
        </span>
      </a>
    </div>
  );
}