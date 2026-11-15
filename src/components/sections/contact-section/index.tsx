import { blurb, email } from "@/content/contact";
import { profile } from "@/content/profile";

export default function ContactSection() {
  return (
    <section
      className="portfolio-section page-gutter contact"
      id="contact"
      tabIndex={-1}
      aria-labelledby="contact-title"
    >
      <h2 id="contact-title">
        Let&rsquo;s talk about<span>what&rsquo;s next.</span>
      </h2>
      <div className="contact-copy">
        <p>{blurb}</p>
        <a className="button" href={`mailto:${email}`}>
          Get in touch <span aria-hidden="true">↗</span>
        </a>
        <div className="contact-meta">
          {profile.availability && (
            <span className="contact-status">{profile.availability}</span>
          )}
          <span>{profile.location}</span>
        </div>
      </div>
    </section>
  );
}