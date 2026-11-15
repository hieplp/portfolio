import { profile } from "@/content/profile";

export default function PosterFooter() {
  return (
    <div className="poster-footer">
      <p className="poster-description">{profile.tagline}</p>
      <div className="poster-links">
        <a className="button" href="#work">
          View projects
        </a>
        <a className="text-link" href="#experience">
          My experience <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}