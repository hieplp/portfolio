import { profile } from "@/data/profile";
import { Section } from "@/components/sections/section";
import { MapPin, Briefcase } from "lucide-react";

export function AboutSection() {
  const about = profile.about;

  return (
    <Section id="about" title="About" subtitle="Background and values">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 flex flex-col gap-4">
          {about?.paragraphs.map((p) => (
            <p key={p} className="text-base text-muted-foreground leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {about?.location && (
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wider opacity-50 mb-0.5">Location</p>
                <p className="text-sm">{about.location}</p>
              </div>
            </div>
          )}
          {about?.availability && (
            <div className="flex items-start gap-3">
              <Briefcase className="w-4 h-4 mt-0.5 text-primary shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wider opacity-50 mb-0.5">Availability</p>
                <p className="text-sm">{about.availability}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
