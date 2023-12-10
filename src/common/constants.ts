import ProjectType from "./model/ProjectType.ts";
import ContactType from "./model/ContactType.ts";
import ExperienceType from "./model/ExperienceType.ts";

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
    skype: {
        name: "Skype",
        label: "hiep ly (hiepphuocly@gmail.com)",
        url: "hiepphuocly@gmail.com",
        icon: ['fab', 'skype']
    },
    phone: {
        name: "Phone",
        label: "(+84) 033 545 2591",
        url: "",
        icon: ['fas', 'mobile-screen-button']
    },
    linkedin: {
        name: "Linkedin",
        label: "linkedin.com/Hiep Ly",
        url: "https://www.linkedin.com/in/hiep-ly-563a231a2",
        icon: ['fab', 'linkedin']
    },
}
export const CONTACT_ARR = Object.values(CONTACT_MAP) as ContactType[];

export const EXPERIENCES_MAP = {
    CMC: {
        from: "Oct 2023",
        to: "Dec 2023",
        title: "Software Engineer",
        company: "CMC Global",
        companyLink: "https://cmcglobal.com.vn/",
        descriptions: [
            "Worked as an onsite software engineer at Techcombank.",
        ],
        longDescriptions: [
            "Worked as an onsite software engineer at Techcombank.",
            "Utilized Spring Boot, and Oracle to build robust APIs that fulfilled the project's needs.",
            "Developed and maintained unit tests to ensure code quality and reliability using JUnit, Mockito."
        ],
        projects: [],
        skills: [
            "SpringBoot",
            "Oracle",
        ]
    },
    INTELIN: {
        from: "Mar 2021",
        to: "Jun 2023",
        title: "Backend Developer",
        company: "Intelin",
        companyLink: "https://intelin.vn",
        descriptions: [
            "Utilized Vertx, MariaDB, RabbitMQ, Redis, etc to develop multiple microservices and monolith applications.",
        ],
        longDescriptions: [
            "My primary focus is Java, where I've employed technologies like Vertx, MariaDB, RabbitMQ, Redis, and others to create multiple microservices and monolithic applications.",
            "Collaborated with senior engineers to build and maintain RESTful APIs for various application modules.",
            "Contributed to the design and optimization of database queries to improve application performance.",
            "Utilized version control (Gitlab) to manage the codebase and track changes effectively.",
            "Assisted in the deployment and monitoring of applications in development and testing environments using Jenkin, Kubernetes.",
        ],
        projects: [
            {
                name: "giotmauvang",
                url: "https://giotmauvang.org.vn/",
            },
            {
                name: "tiktik",
                url: "https://tiktik.vn/",
            },
            {
                name: "meeasy",
                url: "https://meeasy.vn/",
            },
        ],
        skills: [
            "Vert.x",
            "jOOQ",
            "MariaDB",
            "Docker",
        ]
    },
    FSOFT: {
        from: "Sep 2019",
        to: "Dec 2019",
        title: "Software Engineer Intern",
        company: "FPT Software",
        companyLink: "https://fptsoftware.com",
        descriptions: [
            "Worked as a software engineer intern for an outsourcing Japanese project.",
        ],
        longDescriptions: [
            "Worked as a software engineer intern for an outsourcing Japanese project.",
            "Utilized VueJS, and ElementUI to develop user interfaces, creating screens that aligned with the specified requirements.",
            "Using Spring Boot, and PostgreSQL to build APIs that fitted the requirements."
        ],
        projects: [],
        skills: [
            "SpringBoot",
            "PostgreSQL",
            "VueJs",
            "ElementUI",
        ]
    }
}
export const EXPERIENCES_ARR = Object.values(EXPERIENCES_MAP) as ExperienceType[];
export const TOP_3_EXPERIENCES_ARR = EXPERIENCES_ARR.slice(0, 4);