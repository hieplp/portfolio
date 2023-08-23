import ProjectType from "./model/ProjectType.ts";
import ContactType from "./model/ContactType.ts";

export const MENU_MAP = {
    about: 'about',
    expertise: 'expertise',
    experience: 'experience',
    project: 'project',
    contact: 'contact'
};

export const MENU_ARR = Object.keys(MENU_MAP) as string[];

export const PROJECT_MAP = {
    giotmauvang: {
        id: "giotmauvang",
        name: "Giọt Máu Vàng",
        smallBackground: "images/project/gmv.png",
        fullBackground: "images/project/gmv.png",
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
    meeasy: {
        id: "meeasy",
        name: "Mẹ Easy",
        smallBackground: "images/project/meeasy.png",
        fullBackground: "images/project/meeasy.png",
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
    "url-shorten": {
        id: "url-shorten",
        name: "URL Shortener",
        smallBackground: "images/project/url-shortener.png",
        fullBackground: "images/project/url-shortener.png",
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
        skills: ["Vert.x", "jOOQ", "MariaDB", "Elastic", "Kafka", "TailwindCSS"],
    },
    "recipe-platform": {
        id: "recipe-platform",
        name: "Recipe Platform",
        smallBackground: "images/project/recipe-platform.png",
        fullBackground: "images/project/recipe-platform.png",
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
        skills: ["SpringBoot", "jOOQ", "MariaDB", "CQRS", "SAGA", "TailwindCSS"],
    },
    portfolio: {
        id: "portfolio",
        name: "Portfolio",
        smallBackground: "images/project/portfolio.png",
        fullBackground: "images/project/portfolio.png",
        shortDescription: "A portfolio application built with Vue and TailwindCSS.",
        descriptions: [],
        link: {
            name: "portfolio",
            url: "https://github.com/hieplp/portfolio",
        },
        location: {
            name: "Home",
            url: "https://github.com/hieplp",
        },
        type: "Personal",
        role: "Software Engineer",
        skills: ["Vue", "TailwindCSS", "Vite", "Pinia"],
    },
    "tic-tac-toe": {
        id: "tic-tac-toe",
        name: "Tic Tac Toe",
        smallBackground: "images/project/default.jpeg",
        fullBackground: "images/project/default.jpeg",
        shortDescription: "A tic tac toe game built with gRPC and Vue.",
        descriptions: [],
        link: {
            name: "tic-tac-toe",
            url: "https://github.com/hieplp/tic-tac-toe",
        },
        location: {
            name: "Home",
            url: "https://github.com/hieplp",
        },
        type: "Personal",
        role: "Software Engineer",
        skills: ["Java", "gRPC", "Vue", "Pinia", "TailwindCSS"],
    },
    "long-running-task": {
        id: "long-running-task",
        name: "Long Running Task",
        smallBackground: "images/project/default.jpeg",
        fullBackground: "images/project/default.jpeg",
        shortDescription: "A long running task application built with Vert.x and Vue.",
        descriptions: [],
        link: {
            name: "long-running-task",
            url: "https://github.com/hieplp/long-running-task",
        },
        location: {
            name: "Home",
            url: "https://github.com/hieplp",
        },
        type: "Personal",
        role: "Software Engineer",
        skills: ["Vert.x", "jOOQ", "Vue", "SSE", "TailwindCSS"],
    },
    "gpt-messenger": {
        id: "gpt-messenger",
        name: "GPT Messenger",
        smallBackground: "images/project/default.jpeg",
        fullBackground: "images/project/default.jpeg",
        shortDescription: "A messenger application built with GPT-3.",
        descriptions: [],
        link: {
            name: "long-running-task",
            url: "https://github.com/hieplp/long-running-task",
        },
        location: {
            name: "Home",
            url: "https://github.com/hieplp",
        },
        type: "Personal",
        role: "Software Engineer",
        skills: ["SpringBoot", "GPT-3", "Facebook"],
    },
    "ascii-art": {
        id: "ascii-art",
        name: "ASCII Art",
        smallBackground: "images/project/default.jpeg",
        fullBackground: "images/project/default.jpeg",
        shortDescription: "An application that converts images to ASCII art.",
        descriptions: [],
        link: {
            name: "ascii-art",
            url: "https://github.com/hieplp/ascii-art",
        },
        location: {
            name: "Home",
            url: "https://github.com/hieplp",
        },
        type: "Personal",
        role: "Software Engineer",
        skills: ["C#", "ASCII"],
    },
    tiktik: {
        id: "tiktik",
        name: "TikTik",
        smallBackground: "images/project/tiktik.png",
        fullBackground: "images/project/tiktik.png",
        shortDescription: "A loyalty platform enabling users to manage, earn points, and redeem rewards at various stores.",
        descriptions: [],
        link: {
            name: "tiktik.vn",
            url: "https://tiktik.vn/",
        },
        location: {
            name: "Intelin",
            url: "https://intelin.vn",
        },
        type: "Company",
        role: "Backend Developer",
        skills: ["Vert.x", "jOOQ", "MariaDB", "Redis", "RabbitMQ", "JasperReport"],
    },
    iportal: {
        id: "iportal",
        name: "iPortal",
        smallBackground: "images/project/default.jpeg",
        fullBackground: "images/project/default.jpeg",
        shortDescription: "A low-code platform enabling users to create their business applications more easily.",
        descriptions: [],
        link: null,
        location: {
            name: "Intelin",
            url: "https://intelin.vn",
        },
        type: "Company",
        role: "Backend Developer",
        skills: ["Vert.x", "jOOQ", "MariaDB", "RabbitMQ", ".Net 5", "OpenXML"],
    },
};

export const PROJECT_ARR = Object.values(PROJECT_MAP) as ProjectType[];
export const STAR_PROJECTS_ARR: ProjectType[] = PROJECT_ARR.slice(0, 4);
export const PERSONAL_PROJECTS_ARR: ProjectType[] = PROJECT_ARR.filter(project => project.type === "Personal");
export const COMPANY_PROJECTS_ARR: ProjectType[] = [...PROJECT_ARR.filter(project => project.type === "Company")];

export const CONTACT_MAP = {
    github: {
        name: "Github",
        label: "github.com/hieplp",
        url: "https://github.com/hieplp",
        icon: ['fab', 'github']
    },
    gmail: {
        name: "Gmail",
        label: "hiepphuocly@gmail.com",
        url: "mailto:hiepphuocly@gmail.com",
        icon: ['fab', 'google']
    },
    facebook: {
        name: "Facebook",
        label: "facebook.com/hieplp99",
        url: "https://www.facebook.com/hieplp99",
        icon: ['fab', 'facebook']
    },
    phone: {
        name: "Phone",
        label: "(+84) 033 545 2591",
        url: "",
        icon: ['fas', 'mobile-screen-button']
    }
}
export const CONTACT_ARR = Object.values(CONTACT_MAP) as ContactType[];