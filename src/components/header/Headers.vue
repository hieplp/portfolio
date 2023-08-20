<template>
  <DesktopHeaderLayout>
    <!--Desktop-->
    <div class="flex
                flex-wrap
                items-center justify-center
                mx-auto p-16">
      <div id="navbar-sticky"
           class="items-center justify-between
                  w-full
                  flex
                  md:w-auto
                  md:order-1
                  space-x-12">
        <div aria-current="page"
             v-for="(menu, index) in MENU_ARR"
             :key="index"
             class="text-xl hover:cursor-pointer
                     relative
                     pt-3 group"
             @click="menuStore.goToMenuByHash(menu)">
          <div :class="{
                  'text-white': index === currentMenu,
                  'text-gray-400': index !== currentMenu
                }"
               class="text-sm
                      absolute
                      top-0 right-0
                      text-gray-400
                      group-hover:text-white">
            0{{ index + 1 }}
          </div>
          <span :class="{
                  'text-white font-bold': index === currentMenu,
                  'text-gray-400': index !== currentMenu
                }"
                class="group-hover:text-white group-hover:font-bold">
            {{ menu }}
          </span>
        </div>
      </div>
    </div>
    <!--End Desktop-->
  </DesktopHeaderLayout>
</template>

<script lang="ts" setup>
import {MENU_ARR} from "../common/constants.ts";
import {useMenuStore} from "../store/menu.store.ts";
import {computed} from "vue";
import DesktopHeaderLayout from "./layout/DesktopHeaderLayout.vue";

const menuStore = useMenuStore();
const currentMenu = computed(() => menuStore.currentMenu);


</script>

<style scoped>


</style>