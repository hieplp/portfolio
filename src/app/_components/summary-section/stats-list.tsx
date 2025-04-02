import { 
  Briefcase, 
  Code2, 
  Building2, 
  Award,
  Boxes,
  Users
} from "lucide-react";
import { StatItem } from "./stat-item";

const stats = [
  {
    icon: Briefcase,
    value: "4+",
    label: "Years of Experience",
    iconColor: "text-blue-500",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Code2,
    value: "10+",
    label: "Enterprise Projects",
    iconColor: "text-green-500",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Building2,
    value: "4",
    label: "Companies",
    iconColor: "text-purple-500",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Boxes,
    value: "15+",
    label: "Technologies Used",
    iconColor: "text-orange-500",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    icon: Users,
    value: "5+",
    label: "Team Collaborations",
    iconColor: "text-yellow-500",
    gradient: "from-yellow-500/20 to-amber-500/20",
  },
  {
    icon: Award,
    value: "1",
    label: "Professional Award",
    iconColor: "text-indigo-500",
    gradient: "from-indigo-500/20 to-violet-500/20",
  },
];

export function StatsList() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat, index) => (
        <StatItem
          key={stat.label}
          {...stat}
          index={index}
        />
      ))}
    </div>
  );
} 