import { AwardItem, AwardProps } from "./award-item";

const awards: Omit<AwardProps, "index">[] = [
  {
    title: "Staff of the Year",
    organization: "Intelin",
    date: "Jan 2023",
    description: "Recognized for outstanding performance and significant contributions to the organization",
  },
];

export function AwardsList() {
  return (
    <div className="space-y-2">
      {awards.map((award, index) => (
        <AwardItem key={index} {...award} index={index} />
      ))}
    </div>
  );
} 