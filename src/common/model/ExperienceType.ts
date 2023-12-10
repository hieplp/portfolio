import ShortProjectType from "./ShortProjectType.ts";

export default interface ExperienceType {
    from: string;
    to: string;
    title: string;
    company: string;
    companyLink: string;
    descriptions: string[];
    longDescriptions: string[];
    projects: ShortProjectType[];
    skills: string[];
}