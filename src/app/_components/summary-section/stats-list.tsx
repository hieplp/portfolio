import { stats } from "@/config/portfolio";
import { StatItem } from "./stat-item";

export function StatsList() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat, index) => (
        <StatItem key={stat.label} {...stat} index={index} />
      ))}
    </div>
  );
}
