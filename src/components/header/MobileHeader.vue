<template>
  <nav :class="{
        'bg-primary': currentMenu !== 0,
       }"
       class="fixed
              w-full
              z-20
              top-0 left-0">
    <!--Mobile-->
    <div class="drawer drawer-end
                flex md:hidden
                items-center
                w-full
                p-4
                justify-end">

      <!--Logo-->
      <p class="text-2xl font-bold">
        hiep.lp
      </p>
      <!--End Logo-->

      <!--Menu Icon-->
      <input id="my-drawer" class="drawer-toggle" type="checkbox"/>
      <div class="ml-auto">
        <label class="btn btn-ghost btn-circle" for="my-drawer">
          <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6h16M4 12h16M4 18h7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          </svg>
        </label>
      </div>
      <!--End Menu Icon-->

      <!--Menu Content-->
      <div class="drawer-side">
        <label class="drawer-overlay" for="my-drawer"></label>
        <div class="menu p-4 w-full h-full bg-primary text-base-content">

          <!--Menu Icon-->
          <div class="w-full flex items-center">
            <p class="text-2xl font-bold">
              hiep.lp
            </p>
            <label class="btn btn-ghost btn-circle ml-auto fill-base-content"
                   for="my-drawer">
              <svg class="h-8 w-8" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
              </svg>
            </label>
          </div>

          <!--Menu-->
          <ul class="mt-10">
            <li v-for="(menu, index) in MENU_ARR"
                :key="index"
                class="">
              <a aria-current="page"
                 class="text-xl group flex items-center space-x-3"
                 @click="menuStore.goToMenuByHash(menu)">
                <div :class="{
                  'text-white': index === currentMenu,
                  'text-gray-400': index !== currentMenu
                }"
                     class="text-sm text-gray-400 group-hover:text-white">
                  0{{ index + 1 }}.
                </div>
                <span :class="{
                  'text-white font-bold': index === currentMenu,
                  'text-gray-400': index !== currentMenu
                }"
                      class="group-hover:text-white group-hover:font-bold">
                  {{ menu }}
                </span>
              </a>
            </li>
          </ul>
          <!--End Menu-->

          <!--Contact-->
          <div class="">
            <div class="divider">Say Hello</div>
            <div class="space-y-5">
              <a v-for="(contact, index) in contacts"
                 :key="index"
                 :href="contact.url"
                 class="flex items-center space-x-3 group"
                 rel="noopener noreferrer"
                 target="_blank">
                <font-awesome-icon :icon="contact.icon"
                                   class="h-7 w-7 text-gray-500 group-hover:text-white"/>
                <p class="group-hover:text-white">
                  {{ contact.label }}
                </p>
              </a>
            </div>
          </div>
          <!--End Contact-->

          <!--CopyRight-->
          <div class="mt-auto flex justify-center">
            © 2023. Made with passion by
            <a class="ml-1 text-white font-bold"
               href="">
              Hiep Phuoc Ly
            </a>
          </div>
          <!--End CopyRight-->

        </div>
      </div>
      <!--End Menu Content-->
    </div>
    <!--End Mobile -->
  </nav>
</template>

<script lang="ts" setup>
import {CONTACT_MAP, MENU_ARR} from "../../common/constants.ts";
import {useMenuStore} from "../../store/menu.store.ts";
import {computed} from "vue";

const menuStore = useMenuStore();
const currentMenu = computed(() => menuStore.currentMenu);


const contacts = [
  CONTACT_MAP.phone,
  CONTACT_MAP.github,
  CONTACT_MAP.gmail,
  CONTACT_MAP.facebook
]

</script>

<style scoped>

</style>