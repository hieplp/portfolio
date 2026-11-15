import type { Role } from "@/content/experience";

export default function Position({
  role,
  open = false,
}: {
  role: Role;
  open?: boolean;
}) {
  return (
    <article className="position">
      <p className="position-label">{role.company}</p>
      <div className="position-header">
        <div>
          <h3>{role.title}</h3>
        </div>
        <p className="position-dates">{role.dates}</p>
      </div>
      <p className="position-summary">{role.summary}</p>
      <details open={open}>
        <summary>
          Responsibilities &amp; contributions{" "}
          <span className="disclosure" aria-hidden="true" />
        </summary>
        <ul>
          {role.responsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </details>
      <dl className="position-stack">
        <dt>Stack</dt>
        <dd>{role.stack}</dd>
      </dl>
    </article>
  );
}