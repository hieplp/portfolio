<script lang="ts" setup>
import About from "./About.vue";
import Experience from "./Experience.vue";
import Project from "./Project.vue";
import Contact from "./Contact.vue";
import Headers from "../components/Headers.vue";
import {computed, onBeforeUnmount, onMounted, ref} from 'vue';
import Expertise from "./Expertise.vue";
import {useMenuStore} from "../store/menu.store.ts";
import {MENU_ARR} from "../common/constants.ts";

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
});

onBeforeUnmount(() => {
  window.removeEventListener('wheel', handleMouseWheel);
});


</script>

<template>
  <div class="overflow-hidden scroll-smooth">
    <Headers/>
    <About :id="MENU_ARR[0]"/>
    <Expertise :id="MENU_ARR[1]"/>
    <Experience :id="MENU_ARR[2]"/>
    <Project :id="MENU_ARR[3]"/>
    <Contact :id="MENU_ARR[4]"/>
  </div>
</template>

<style scoped>

</style>