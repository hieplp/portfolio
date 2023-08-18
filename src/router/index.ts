import {createRouter, createWebHistory} from "vue-router";
import About from "../views/About.vue";

const routes = [
    {
        path: "/",
        name: "about",
        component: About,
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})


export default router;