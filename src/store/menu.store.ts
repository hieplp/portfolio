import {defineStore} from "pinia";
import VueScrollTo from "vue-scrollto";
import {MENU_ARR} from "../common/constants.ts";

export const useMenuStore = defineStore("menu", {
    state: () => ({
        currentMenu: 0,
        isScrolling: false,
    }),
    getters: {},
    actions: {
        setCurrentMenu(index: number) {
            this.currentMenu = index
        },

        goToMenu(index: number, onDone?: () => void) {
            if (this.isScrolling) return;

            this.isScrolling = true;
            this.setCurrentMenu(index);
            VueScrollTo.scrollTo(`#${MENU_ARR[this.currentMenu]}`, 1000, {
                cancelable: false,
                onDone: () => {
                    this.isScrolling = false;
                    if (onDone) onDone();
                }
            });
        },

        goToMenuByHash(hash: string) {
            const index = MENU_ARR.indexOf(hash);
            this.goToMenu(index);
        }
    },
})