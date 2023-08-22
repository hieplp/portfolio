import ProjectType from "./model/ProjectType.ts";

export const MENU_MAP = {
    about: 'about',
    expertise: 'expertise',
    experience: 'experience',
    project: 'project',
    contact: 'contact'
};

export const MENU_ARR = Object.keys(MENU_MAP) as string[];

export const PROJECTS_ARR: ProjectType[] = [
    {
        id: "giotmauvang",
        name: "Giọt Máu Vàng",
        smallBackground: "src/assets/project/gmv.png",
        fullBackground: "src/assets/project/gmv.png",
        shortDescription: "A non-profit application enabling users to schedule blood donations and track their donation information.",
        descriptions: [],
        link: {
            name: "giotmauvang.org.vn",
            url: "https://giotmauvang.org.vn",
        },
        location: {
            name: "Intelin",
            url: "https://intelin.vn",
        },
        type: "Company",
        role: "Backend Developer",
        skills: ["Vert.x", "jOOQ", "MariaDB", "Redis", "RabbitMQ", "JasperReport"],
    },
    {
        id: "meeasy",
        name: "Mẹ Easy",
        smallBackground: "src/assets/project/meeasy.png",
        fullBackground: "src/assets/project/meeasy.png",
        shortDescription: "A social network enabling users to take challenges, track, and share their pregnancy and parenting journeys",
        descriptions: [],
        link: {
            name: "meeasy.vn",
            url: "https://meeasy.vn",
        },
        location: {
            name: "Intelin",
            url: "https://intelin.vn",
        },
        type: "Company",
        role: "Backend Developer",
        skills: ["Vert.x", "jOOQ", "MariaDB", "Redis", "RabbitMQ", "Apache POI"],
    },
    {
        id: "url-shorten",
        name: "URL Shortener",
        smallBackground: "src/assets/project/url-shortener.png",
        fullBackground: "src/assets/project/url-shortener.png",
        shortDescription: "A URL Shortener application that allows you to generate shortened URLs from long one.",
        descriptions: [],
        link: {
            name: "url-shorten",
            url: "https://github.com/hieplp/url-shorten",
        },
        location: {
            name: "Home",
            url: "https://github.com/hieplp",
        },
        type: "Personal",
        role: "Software Engineer",
        skills: ["Vert.x", "jOOQ", "MariaDB", "Elastic", "Kafka"],
    },
    {
        id: "recipe-platform",
        name: "Recipe Platform",
        smallBackground: "src/assets/project/recipe-platform.png",
        fullBackground: "src/assets/project/recipe-platform.png",
        shortDescription: "A recipe platform is a digital space where people share, discover, and organize recipes. ",
        descriptions: [],
        link: {
            name: "recipe-platform",
            url: "https://github.com/hieplp/recipe-platform",
        },
        location: {
            name: "Home",
            url: "https://github.com/hieplp",
        },
        type: "Personal",
        role: "Software Engineer",
        skills: ["SpringBoot", "jOOQ", "MariaDB", "CQRS", "SAGA"],
    }
]

export const STAR_PROJECTS_ARR: ProjectType[] = PROJECTS_ARR.splice(0, 4);