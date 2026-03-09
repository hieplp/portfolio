import { profile } from "@/data/profile";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 px-5">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-6xl w-full mx-auto py-8">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.contact.email}`}
            aria-label="Email"
            className="opacity-50 hover:opacity-100 transition-opacity"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="opacity-50 hover:opacity-100 transition-opacity"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="opacity-50 hover:opacity-100 transition-opacity"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
