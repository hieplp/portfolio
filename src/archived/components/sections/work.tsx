export default function WorkSection() {
  return (
    <section
      className="portfolio-section"
      id="work"
      tabIndex={-1}
      aria-labelledby="work-title"
    >
      <div className="projects-intro">
        <h2 id="work-title">Selected projects.</h2>
        <p>Case study placeholders. Add your own projects and contributions.</p>
      </div>
      <div className="project-grid">
        <article className="project-card">
          <p className="project-type">Featured project / Details to be added</p>
          <h3>Your flagship project</h3>
          <p className="project-description">
            Summarize the problem, who the project serves, and what you helped
            build.
          </p>
          <dl className="project-facts">
            <div>
              <dt>My role</dt>
              <dd>Your responsibilities</dd>
            </div>
            <div>
              <dt>Tech stack</dt>
              <dd>Languages, frameworks &amp; infrastructure</dd>
            </div>
            <div>
              <dt>Outcome</dt>
              <dd>A real result or key learning</dd>
            </div>
          </dl>
          <details className="project-case">
            <summary>
              Read case study{" "}
              <span className="disclosure-symbol" aria-hidden="true" />
            </summary>
            <div className="case-body">
              <div>
                <h4>The problem</h4>
                <p>
                  Describe the user or business problem, its context, and the
                  constraints you worked within.
                </p>
              </div>
              <div>
                <h4>My contribution</h4>
                <p>
                  Explain what you personally designed, implemented, or improved.
                  Distinguish your work from the wider team’s work.
                </p>
              </div>
              <div>
                <h4>Technical decisions</h4>
                <p>
                  Explain the architecture, tools, and tradeoffs. Include what you
                  chose and why.
                </p>
              </div>
              <div>
                <h4>Results &amp; lessons</h4>
                <p>
                  Add an outcome you can support and what you would do differently
                  next time.
                </p>
              </div>
            </div>
          </details>
          <p className="project-note">
            Add real repository and live project links when available.
          </p>
        </article>
        <article className="project-card">
          <p className="project-type">Additional project / Details to be added</p>
          <h3>Your second project</h3>
          <p className="project-description">
            Show another side of your engineering work, such as an application,
            service, or open-source contribution.
          </p>
          <dl className="project-facts">
            <div>
              <dt>My role</dt>
              <dd>Your specific contribution</dd>
            </div>
            <div>
              <dt>Tech stack</dt>
              <dd>The technologies you used</dd>
            </div>
            <div>
              <dt>Outcome</dt>
              <dd>A real result or key learning</dd>
            </div>
          </dl>
          <details className="project-case">
            <summary>
              Read case study{" "}
              <span className="disclosure-symbol" aria-hidden="true" />
            </summary>
            <div className="case-body">
              <div>
                <h4>The problem</h4>
                <p>Describe why the project was needed and who it helps.</p>
              </div>
              <div>
                <h4>My contribution</h4>
                <p>
                  Explain your ownership, implementation work, and collaboration.
                </p>
              </div>
              <div>
                <h4>Technical decisions</h4>
                <p>
                  Describe an important engineering choice and the alternatives you
                  considered.
                </p>
              </div>
              <div>
                <h4>Results &amp; lessons</h4>
                <p>Share the outcome, what you learned, and any next steps.</p>
              </div>
            </div>
          </details>
          <p className="project-note">
            Add real repository and live project links when available.
          </p>
        </article>
      </div>
    </section>
  );
}