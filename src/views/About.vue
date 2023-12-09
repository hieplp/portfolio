<template>

  <div class="h-screen w-screen
              flex items-center justify-center
              background bg-cover bg-center
             ">
    <div class="px-2 md:px-24 lg:px-36 xl:px-64 2xl:px-96 space-y-2">


      <p class="text-5xl md:text-8xl font-bold text-white">
        Hiep Phuoc Ly
      </p>

      <div class="ml-2 space-y-2">
        <p class="text-2xl font-bold text-white">
          Software Engineer
        </p>

        <div class="w-full md:w-5/6 2xl:w-4/6 space-y-2">
          <p class="">
            I am a seasoned Software Engineer with over
            <span class="font-bold"> 3 years of practical experience </span>,
            dedicated to constructing robust backend solutions.
          </p>
          <p>
            Primarily, I specialize in Java programming, often working with frameworks such as
            <span class="font-bold">Vert.x</span> and the <span class="font-bold">Spring Framework.</span>
          </p>
          <p>
            Additionally, I possess proficiency in TypeScript, and I've applied this expertise to frontend
            technologies like <span class="font-bold">Vue.js</span> and <span class="font-bold">React</span>.
          </p>
        </div>
        <p class="w-full md:w-2/3 2xl:w-3/6 text-g">

        </p>
      </div>

      <div class="flex pt-5 ml-2 space-x-3">
        <a v-for="(contact, index) in contacts"
           :key="index"
           :data-tip="contact.url"
           :href="contact.url"
           class="tooltip" rel="noopener noreferrer"
           target="_blank">
          <font-awesome-icon :icon="contact.icon" class="h-7 w-7 text-gray-500 hover:text-white"/>
        </a>

      </div>
    </div>

    <!--Scroll To Expertise-->
    <div class="absolute bottom-10">
      <button class="flex
                     justify-center
                     group
                     motion-safe:animate-bounce"
              @click="menuStore.goToMenuByHash(MENU_MAP.expertise)">
        <div class="group-hover:text-white">
          <p>
            {{ MENU_MAP.expertise }}
          </p>
          <div class="flex justify-center">
            <font-awesome-icon :icon="['fas', 'angles-down']"/>
          </div>
        </div>
      </button>
    </div>
    <!--End Scroll To Expertise-->

  </div>
</template>

<script lang="ts" setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {useMenuStore} from "../store/menu.store.ts";
import {CONTACT_MAP, MENU_MAP} from "../common/constants.ts";

const menuStore = useMenuStore();

const contacts = [
  CONTACT_MAP.github,
  CONTACT_MAP.gmail,
  CONTACT_MAP.facebook,
  CONTACT_MAP.linkedin,
];
</script>

<style scoped>

</style>