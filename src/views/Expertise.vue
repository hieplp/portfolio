<template>
  <ScreenContainerLayout>
    <CenterLayout>
      <div class="w-full space-y-12">

        <!--Title-->
        <p class="text-3xl md:mb-16">
          /*my expertise*/
        </p>
        <!--End Title-->

        <!--Content-->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <!--Description-->
          <div class="col-span-2">
            <div class="space-y-1">
              <p class="font-bold text-lg space-x-1 mb-4">
                I've been working with <span class="text-secondary">Java and its ecosystem</span>
                for<span class="text-secondary">over 2.5 years </span> of hands-on experience.
              </p>

              <p class="text-slate-400">
                Proficient in designing and implementing Restful APIs and managing databases efficiently.
                My strong problem-solving skills enable me to create scalable software solutions.
              </p>
              <p class="text-slate-400">
                I am enthusiastic about exploring microservices, security, and design patterns.
              </p>
              <p class="text-slate-400">
                I am open to exciting opportunities and eager to take my skills to the next level.
              </p>
            </div>
          </div>
          <!--End Description-->

          <!--Expertise-->
          <div class="col-span-1 space-y-2">
            <p class="font-bold text-lg">
              Check out what I've been working on
            </p>

            <div class="grid
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
                     class="w-12 h-12 md:w-10 md:h-10 xl:w-14 xl:h-14">
                <p class="">{{ expertise.name }}</p>
              </div>
            </div>
          </div>
          <!--End Expertise-->

        </div>
        <!--End Content-->

        <!--Link-->
        <AnimatedLink :icon="['fas', 'arrow-right']" text="More about my expertise" to="expertises"/>
        <!--End Link-->

      </div>
    </CenterLayout>
  </ScreenContainerLayout>
</template>

<script lang="ts" setup>

import CenterLayout from "../components/layout/CenterLayout.vue";
import ScreenContainerLayout from "../components/layout/ScreenContainerLayout.vue";
import AnimatedLink from "../components/link/AnimatedLink.vue";

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