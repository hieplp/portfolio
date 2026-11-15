import type { StackGroup as Group } from "@/content/techstack";

export default function StackGroup({ group }: { group: Group }) {
  return (
    <article className="skill-group">
      <h3>{group.title}</h3>
      <ul className="skill-tags">
        {group.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}