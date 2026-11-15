const groups = [
  { title: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
  { title: "Frontend", items: ["React", "Next.js", "HTML", "CSS"] },
  { title: "Backend & data", items: ["Node.js", "Express", "PostgreSQL", "Redis"] },
  {
    title: "Delivery & quality",
    items: ["Git", "Docker", "GitHub Actions", "Playwright"],
  },
];

export default function StackSection() {
  return (
    <section
      className="portfolio-section"
      id="stack"
      tabIndex={-1}
      aria-labelledby="stack-title"
    >
      <div className="section-layout">
        <div className="section-heading">
          <h2 id="stack-title">
            Technical
            <br />
            toolkit.
          </h2>
          <p>The languages and tools behind the work.</p>
        </div>
        <div>
          <div className="skill-grid">
            {groups.map((group) => (
              <article className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="skill-tags">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="skills-note">
            Example technologies, not confirmed skills. Replace this list with the
            tools you actually use.
          </p>
        </div>
      </div>
    </section>
  );
}