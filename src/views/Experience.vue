<template>
  <ScreenContainerLayout>
    <CenterLayout>
      <div class="w-full space-y-5">

        <!--Title-->
        <p class="text-3xl md:mb-10">
          /*my experience*/
        </p>
        <!--End Title-->

        <!--Content-->
        <div class="flex flex-col md:flex-row w-full">

          <!--Description-->
          <div class="h-full">
            <p class="font-bold text-lg mb-2">
              With <span class="text-secondary">over 3 years</span> of hands-on experience, my journey has revolved
              around the dynamic world of <span class="text-secondary">Java and its diverse ecosystem</span>.
            </p>
            <p>
              I've seamlessly navigated through its intricacies, harnessing its power to architect, develop, and
              optimize software solutions that stand as a testament to my proficiency and dedication.
            </p>

            <AnimatedLink :icon="['fas', 'arrow-right']"
                          :is-external="true"
                          class="mt-10 md:mt-20"
                          text="View full résumé"
                          to="https://drive.google.com/file/d/1EDSU2GHhi4w5-fqyfb0OgQ3W39aiyS8t/view?usp=sharing"/>
          </div>
          <!--End Description-->

          <div class="divider divider-vertical md:divider-horizontal"></div>

          <!--Experience-->
          <div class="col-span-2 space-y-8">
            <experience-item v-for="(experience, experienceIndex) in experiences"
                             :key="experienceIndex" :experience="experience"/>

            <AnimatedLink :icon="['fas', 'arrow-right']"
                          class="ml-auto"
                          text="More about my experience"
                          to="experiences"/>
          </div>
          <!--End Experience-->
        </div>
        <!--End Content-->

      </div>
    </CenterLayout>
  </ScreenContainerLayout>
</template>

<script lang="ts" setup>
import ScreenContainerLayout from "../components/layout/ScreenContainerLayout.vue";
import CenterLayout from "../components/layout/CenterLayout.vue";
import AnimatedLink from "../components/link/AnimatedLink.vue";
import {TOP_3_EXPERIENCES_ARR} from "../common/constants.ts";
import ExperienceItem from "../components/ExperienceItem.vue";

const experiences = TOP_3_EXPERIENCES_ARR

</script>

<style scoped>

</style>