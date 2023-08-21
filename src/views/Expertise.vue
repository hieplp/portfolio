<template>
  <ScreenContainerLayout>
    <CenterLayout>
      <div class="w-full space-y-5">

        <p class="text-3xl md:mb-16">
          /*my expertise*/
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div class="col-span-2">
            <div class="space-y-2">
              <p class="font-bold text-lg space-x-1 mb-4">
                I've been working with <span class="text-blue-500">Java and its ecosystem</span>
                for<span class="text-blue-500">over 2.5 years </span> of hands-on experience.
              </p>

              <p>
                Proficient in designing and implementing Restful APIs and managing databases efficiently.
                My strong problem-solving skills enable me to create scalable software solutions.
              </p>
              <p>
                I am enthusiastic about exploring microservices, security, and design patterns.
              </p>
              <p>
                I am open to exciting opportunities and eager to take my skills to the next level.
              </p>
            </div>

          </div>

          <div class="col-span-1 space-y-2">
            <p class="font-bold text-lg">
              Check out what I've been working on
            </p>

            <div class="grid
                        p-1
                        grid-cols-3
                        gap-4 md:gap-3">
              <div v-for="(expertise, index) in expertises"
                   :key="index"
                   class="bg-primary
                          h-fit
                          w-auto
                          p-1
                          flex flex-col
                          items-center justify-center space-y-2 rounded-xl drop-shadow-lg">
                <img :alt="expertise.name"
                     :src="expertise.icon"
                     class="w-12 h-12 md:w-14 md:h-14">
                <p class="">{{ expertise.name }}</p>
              </div>
            </div>

          </div>
        </div>

        <router-link
            class="w-fit border-b-2 flex items-center space-x-2 mt-8 font-bold hover:text-white hover:border-b-white"
            to="expertises">
          <p>
            More about my expertise
          </p>
          <font-awesome-icon :icon="['fas', 'arrow-right']"/>
        </router-link>

      </div>
    </CenterLayout>
  </ScreenContainerLayout>
</template>

<script lang="ts" setup>

import CenterLayout from "../components/layout/CenterLayout.vue";
import ScreenContainerLayout from "../components/layout/ScreenContainerLayout.vue";

const expertises = [
  {
    name: "Java",
    icon: "src/assets/java.svg"
  },
  {
    name: "Spring",
    icon: "src/assets/spring.svg"
  },
  {
    name: "Vert.x",
    icon: "src/assets/vertx.svg"
  },
  {
    name: "Vue",
    icon: "src/assets/Vue.js.svg"
  },
  {
    name: "Docker",
    icon: "src/assets/Docker.svg"
  },
  {
    name: "MariaDB",
    icon: "src/assets/mariadb.svg"
  },
]


</script>

<style scoped>

</style>