import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/expertises",
        name: "all-expertises",
        component: () => import("../views/AllExpertises.vue"),
    },
    {
        path: "/experiences",
        name: "all-experiences",
        component: () => import("../views/AllExperience.vue"),
    },
    {
        path: "/experiences/:id",
        name: "experience",
        component: () => import("../views/ExperienceDetailView.vue"),
    },
    {
        path: "/projects",
        name: "all-projects",
        component: () => import("../views/Projects.vue"),
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})


export default router;