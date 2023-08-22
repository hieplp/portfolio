import LinkType from "./LinkType";

export default interface ProjectType {
    id: string;
    name: string;
    smallBackground: string;
    fullBackground: string;
    shortDescription: string;
    descriptions: string[];
    link: LinkType;
    location: LinkType;
    type: "Company" | "Personal";
    role: string;
    skills: string[];
}