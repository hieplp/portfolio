export default function ExperienceSection() {
  return (
    <section
      className="portfolio-section"
      id="experience"
      tabIndex={-1}
      aria-labelledby="experience-title"
    >
      <div className="section-layout">
        <div className="section-heading">
          <h2 id="experience-title">
            Professional
            <br />
            experience.
          </h2>
          <p>Where I’ve worked, what I’ve owned, and how I’ve contributed.</p>
          <p className="section-note">
            Placeholder entries. Company names, dates, and responsibilities are
            awaiting your details.
          </p>
        </div>
        <div className="experience-list">
          <article className="position">
            <p className="position-label">Most recent role</p>
            <div className="position-header">
              <div>
                <h3>Your job title</h3>
                <p className="position-company">
                  Your company name <span>/ Location or remote</span>
                </p>
              </div>
              <p className="position-dates">Start date → End date</p>
            </div>
            <p className="position-summary">
              Add a short description of your team, the product you worked on, and
              your area of responsibility.
            </p>
            <details open>
              <summary>
                Responsibilities &amp; contributions{" "}
                <span className="disclosure-symbol" aria-hidden="true" />
              </summary>
              <ul>
                <li>
                  Describe a feature or system you owned and your specific
                  contribution.
                </li>
                <li>
                  Explain a technical challenge, your approach, and the tradeoffs
                  involved.
                </li>
                <li>Add a verified outcome or an improvement your work delivered.</li>
              </ul>
            </details>
            <p className="role-stack">
              <strong>ROLE TECH STACK</strong>
              <span>Add the technologies you used at this company.</span>
            </p>
          </article>
          <article className="position">
            <p className="position-label">Previous role</p>
            <div className="position-header">
              <div>
                <h3>Your previous job title</h3>
                <p className="position-company">
                  Your previous company <span>/ Location or remote</span>
                </p>
              </div>
              <p className="position-dates">Start date → End date</p>
            </div>
            <p className="position-summary">
              Add the scope of this role and how your responsibilities developed.
            </p>
            <details>
              <summary>
                Responsibilities &amp; contributions{" "}
                <span className="disclosure-symbol" aria-hidden="true" />
              </summary>
              <ul>
                <li>Describe the product or team you supported.</li>
                <li>Highlight an important contribution and your part in it.</li>
                <li>Explain what improved as a result of your work.</li>
              </ul>
            </details>
            <p className="role-stack">
              <strong>ROLE TECH STACK</strong>
              <span>Add the stack you used in this role.</span>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}