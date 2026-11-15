export default function AboutSection() {
  return (
    <section
      className="portfolio-section"
      id="about"
      tabIndex={-1}
      aria-labelledby="about-title"
    >
      <div className="section-layout">
        <div className="section-heading">
          <h2 id="about-title">
            A little
            <br />
            about me.
          </h2>
          <p>The person behind the projects.</p>
        </div>
        <div className="about-layout">
          <div className="about-copy">
            <p>
              Use this space to tell your story: how you got into software
              engineering, what you enjoy building, and the problems you want to
              solve.
            </p>
            <p>
              Add the perspective that makes your work yours, whether that’s an
              interest in thoughtful interfaces, reliable systems, or helping a team
              build better software.
            </p>
            <p className="sample-note">
              Biography placeholder. Your personal story has not been provided yet.
            </p>
          </div>
          <div className="about-photo-stack">
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="about-photo"
                src="/assets/stock/workspace.jpg"
                width={1000}
                height={667}
                alt="Illustrative workspace with a laptop and notebook"
                loading="lazy"
              />
              <figcaption className="photo-caption">
                Illustrative image. Replace with your photo or workspace.
              </figcaption>
            </figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="about-photo architecture-photo"
              src="/assets/stock/architecture.jpg"
              width={700}
              height={1050}
              alt="Architectural study of concrete stairs and shadow"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}