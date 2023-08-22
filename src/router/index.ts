import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import AllExpertises from "../views/AllExpertises.vue";
import Projects from "../views/Projects.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/expertises",
        name: "all-expertises",
        component: AllExpertises,
    },
    {
        path: "/projects",
        name: "all-projects",
        component: Projects,
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
    // scrollBehavior(to, from, savedPosition): any {
    //     if (savedPosition) {
    //         return savedPosition
    //     } else {
    //         console.log(to, from);
    //         return {x: 0, y: 0}
    //     }
    // }

})


export default router;