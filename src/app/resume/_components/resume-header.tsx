import { profile } from "@/data/profile";

export function ResumeHeader() {
  return (
    <div className="border-b-2 border-primary pb-5 mb-8">
      <h1 className="text-3xl font-bold tracking-tight">{profile.name}</h1>
      <p className="text-primary font-medium text-lg mt-1">{profile.title}</p>
      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-sm text-muted-foreground">
        <span>{profile.contact.phone}</span>
        <span>{profile.contact.email}</span>
        <a
          href={profile.contact.linkedin}
          aria-label="LinkedIn profile"
          className="hover:text-primary transition-colors"
        >
          {profile.contact.linkedin.replace("https://", "")}
        </a>
        <a
          href={profile.contact.github}
          aria-label="GitHub profile"
          className="hover:text-primary transition-colors"
        >
          {profile.contact.github.replace("https://", "")}
        </a>
        {profile.about?.location && <span>{profile.about.location}</span>}
      </div>
    </div>
  );
}
