import { awards } from "@/config/portfolio";
import { AwardItem } from "./award-item";

export function AwardsList() {
  return (
    <div className="space-y-2">
      {awards.map((award, index) => (
        <AwardItem key={index} {...award} index={index} />
      ))}
    </div>
  );
}
