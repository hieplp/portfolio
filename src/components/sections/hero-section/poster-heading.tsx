import type { Ref } from "react";
import type { Profile } from "@/content/profile";

export default function PosterHeading({
  headingRef,
  profile,
}: {
  headingRef: Ref<HTMLHeadingElement>;
  profile: Profile;
}) {
  return (
    <div className="poster-heading">
      <h1
        ref={headingRef}
        id="hero-title"
        className="cover-name"
        aria-label={profile.name}
      >
        <span className="poster-name-prefix">
          <span className="cover-family" data-pixel-mask>
            {profile.familyName}
            <span className="pixel-baseline" aria-hidden="true" />
          </span>{" "}
          <span className="cover-middle" data-pixel-mask>
            {profile.middleName}
            <span className="pixel-baseline" aria-hidden="true" />
          </span>
        </span>{" "}
        <span className="cover-given" data-pixel-mask>
          {profile.givenName}
          <span className="pixel-baseline" aria-hidden="true" />
        </span>
      </h1>
      <p className="poster-role">{profile.role}</p>
    </div>
  );
}
