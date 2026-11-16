import { profile } from "@/content/profile";

export default function PosterFooter({
  paused,
  onToggleMotion,
}: {
  paused: boolean;
  onToggleMotion: () => void;
}) {
  return (
    <div className="poster-footer">
      <p className="poster-description">{profile.tagline}</p>
      <div className="poster-links">
        <a className="button" href="#work">
          View projects
        </a>
        <a className="text-link" href="#experience">
          My experience <span className="text-link-arrow" aria-hidden="true">→</span>
        </a>
        <button
          type="button"
          className="motion-toggle"
          onClick={onToggleMotion}
          aria-label={paused ? "Play background animation" : "Pause background animation"}
        >
          {paused ? "Play motion" : "Pause motion"}
        </button>
      </div>
    </div>
  );
}
