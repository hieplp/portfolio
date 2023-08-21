import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import AllExpertises from "../views/AllExpertises.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    }, {
        path: "/expertises",
        name: "all-expertises",
        component: AllExpertises,
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