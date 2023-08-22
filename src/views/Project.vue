<template>
  <ScreenContainerLayout>
    <CenterLayout>
      <div class="w-full space-y-12">

        <!--Title-->
        <p class="text-3xl md:mb-10">
          /*my projects*/
        </p>
        <!--End Title-->

        <!--Content-->
        <div v-if="projects"
             class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
          <ProjectItem v-for="project in projects"
                       :key="project.id"
                       :project="project"/>
        </div> <!--End Content-->

        <AnimatedLink :icon="['fas', 'arrow-right']"
                      class="ml-auto"
                      text="More about my projects"
                      to="projects"/>

      </div>
    </CenterLayout>
  </ScreenContainerLayout>
</template>

<script lang="ts" setup>
import ScreenContainerLayout from "../components/layout/ScreenContainerLayout.vue";
import CenterLayout from "../components/layout/CenterLayout.vue";
import {onMounted, ref} from "vue";
import {STAR_PROJECTS_ARR} from "../common/constants";
import ProjectType from "../common/model/ProjectType";
import ProjectItem from "../components/ProjectItem.vue";
import AnimatedLink from "../components/link/AnimatedLink.vue";

onMounted(() => {
  console.log("mounted");
  projects.value = STAR_PROJECTS_ARR;
});

const projects = ref<ProjectType[]>([]);


</script>

<style scoped>

</style>