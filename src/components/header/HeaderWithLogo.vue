<template>
  <DesktopHeaderLayout>
    <div class="w-full flex justify-center">
      <div class="w-full h-full max-w-4xl xl:max-w-6xl flex items-center pt-10">
        <p class="text-4xl font-bold text-white">
          hiep.lp
        </p>

        <div class="flex ml-auto space-x-5">
          <div v-for="(menu, index) in MENU_ARR"
               :key="index"
               aria-current="page"
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
    </div>
  </DesktopHeaderLayout>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import {useMenuStore} from "../../store/menu.store.ts";
import {MENU_ARR} from "../../common/constants.ts";
import DesktopHeaderLayout from "../layout/DesktopHeaderLayout.vue";

const menuStore = useMenuStore();
const currentMenu = computed(() => menuStore.currentMenu);
</script>
<style scoped>

</style>