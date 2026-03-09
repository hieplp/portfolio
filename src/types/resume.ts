export interface Profile {
  name: string;
  title: string;
  tags: string[];
  bio: string;
  avatar: string;
  contact: {
    email: string;
    phone?: string;
    github: string;
    linkedin: string;
  };
  about?: {
    paragraphs: string[];
    location?: string;
    availability?: string;
  };
}

export interface SkillItem {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  field: string;
  period: string;
  gpa?: string;
  highlights?: string[];
}

export type ProjectType = "personal" | "company";

export interface ProjectEntry {
  title: string;
  description: string;
  tags: string[];
  type?: ProjectType;
  company?: string;
  teamSize?: number;
  highlights?: string[];
  url?: string;
  github?: string;
}

export type EmbeddedProject = Omit<ProjectEntry, "company" | "type">;

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  highlights: string[];
  tags?: string[];
  description?: string;
  url?: string;
  projects?: EmbeddedProject[];
}
