import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
    scrollBehavior() {
        // when reload or change page, scroll to top
        return {x: 0, y: 0}
    }
})


export default router;