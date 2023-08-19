<template>
  <Headers/>

  <div class="h-screen w-screen
              flex items-center justify-center
              bg-[url('src/assets/b3.jpg')] bg-cover bg-center
             ">
    <div class="px-2 md:px-28 2xl:px-36 space-y-2">

      <p class="text-6xl md:text-8xl font-bold text-white">
        HIEP LY
      </p>

      <div class="ml-2 space-y-2">
        <p class="">
          SOFTWARE ENGINEER
        </p>

        <p class="w-full md:w-2/3 2xl:w-3/6 text-g">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dicta dolor facere fugit id iusto laborum
          nisi obcaecati odio optio quidem repellat saepe sed suscipit totam ullam, velit vero. Atque.
        </p>
      </div>

      <div class="flex pt-5 ml-2 space-x-3">

        <a href="">
          <font-awesome-icon :icon="['fab', 'github']" class="h-7 w-7 text-gray-500 hover:text-white"/>
        </a>

        <a href="">
          <font-awesome-icon :icon="['fab', 'google']" class="h-7 w-7 text-gray-500 hover:text-white"/>
        </a>

        <a class="h-5 w-5 fill-gray-500 hover:fill-white" href="">
          <font-awesome-icon :icon="['fab', 'facebook']" class="h-7 w-7 text-gray-500 hover:text-white"/>
        </a>


      </div>

    </div>


  </div>
</template>

<script lang="ts" setup>


import Headers from "../components/Headers.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

<style scoped>

</style>