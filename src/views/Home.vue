<template>
  <div class="overflow-hidden scroll-smooth">

    <Headers v-if="currentMenu === 0"/>
    <HeaderWithLogo v-else-if="currentMenu === 4"/>
    <HeaderWithLogo v-else class="bg-primary"/>
    <MobileHeader/>

    <About :id="MENU_ARR[0]"/>
    <Expertise :id="MENU_ARR[1]"/>
    <Experience :id="MENU_ARR[2]"/>
    <Project :id="MENU_ARR[3]"/>
    <Contact :id="MENU_ARR[4]"/>
  </div>
</template>

<script lang="ts" setup>
import {computed, onBeforeUnmount, onMounted, ref} from 'vue';
import About from "./About.vue";
import Expertise from "./Expertise.vue";
import Experience from "./Experience.vue";
import Project from "./Project.vue";
import Contact from "./Contact.vue";
import Headers from "../components/header/Headers.vue";
import HeaderWithLogo from "../components/header/HeaderWithLogo.vue";
import MobileHeader from "../components/header/MobileHeader.vue";
import {MENU_ARR} from "../common/constants.ts";
import {useMenuStore} from "../store/menu.store.ts";

// const Expertise = defineAsyncComponent(() => import('./Expertise.vue'))
// const Experience = defineAsyncComponent(() => import('./Experience.vue'))
// const Project = defineAsyncComponent(() => import('./Project.vue'))
// const Contact = defineAsyncComponent(() => import('./Contact.vue'))
//

const menuStore = useMenuStore();
const currentMenu = computed(() => menuStore.currentMenu);
const isScrolling = ref(false);

const handleMouseWheel = (e: WheelEvent) => {
  // Prevent from scrolling when scrolling programmatically
  if (isScrolling.value) {
    e.preventDefault();
    return;
  }

  let menuCount = currentMenu.value;
  if (e.deltaY > 0 && menuCount < MENU_ARR.length - 1) {
    // Mouse wheel down
    menuCount++;
  } else if (e.deltaY < 0 && menuCount > 0) {
    // Mouse wheel up
    menuCount--;
  }

  // Don't scroll if current menu is the same as the menu to scroll to
  if (menuCount === currentMenu.value) {
    return;
  }

  // Scroll to menu
  isScrolling.value = true;
  menuStore.goToMenu(menuCount, () => {
    isScrolling.value = false;
  });
};

onMounted(() => {
  window.addEventListener('wheel', handleMouseWheel, {passive: false});

  if (!isScrolling.value) {
    isScrolling.value = true;
    menuStore.goToMenu(currentMenu.value, () => {
      isScrolling.value = false;
    });
  }
});

onBeforeUnmount(() => {
  window.removeEventListener('wheel', handleMouseWheel);
});


</script>
<style scoped>

</style>