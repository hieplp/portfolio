<template>
  <!--Project-->
  <a :href="project.link?.url || project.location.url"
     class="relative
            grid grid-cols-12
            gap-3
            group
            pb-1
            mt-3
            transition-all
            hover:!opacity-100
            group-hover/list:opacity-50"
     rel="noopener noreferrer"
     target="_blank">

    <div class="absolute
                left-0
                -inset-y-4
                z-0
                hidden
                rounded-md
                transition
                motion-reduce:transition-none
                md:-inset-x-2
                md:block
                md:group-hover:bg-slate-600/50
                md:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]
                md:group-hover:drop-shadow-lg"></div>

    <div class="col-span-12 md:col-span-4 z-10 ">
      <img :alt="project.name"
           :src="project.smallBackground"
           class="w-full rounded">
    </div>

    <!--Detail-->
    <div class="col-span-12 md:col-span-8 z-10">
      <!--Name-->
      <p class="font-bold group-hover:text-white">
        {{ project.name }}
      </p> <!--End Name-->

      <!--Description-->
      <p class="mt-2 text-slate-500">
        {{ project.shortDescription }}
      </p> <!--End Description-->

      <!--Links-->
      <div class="flex flex-row gap-2">
        <a v-if="project.link"
           :href="project.link.url"
           class="flex
                  mt-1
                  items-center
                  space-x-1
                  hover:text-white
                  hover:font-bold">
          <font-awesome-icon :icon="['fas', 'link']" class="h-3 w-3"/>
          <p>
            {{ project.link.name }}
          </p>
        </a>

        <a :href="project.location.url"
           class="flex
                  mt-1
                  items-center
                  space-x-1
                  hover:text-white
                  hover:font-bold" rel="noopener noreferrer"
           target="_blank">
          <font-awesome-icon :icon="['fas', 'at']" class="h-3 w-3"/>
          <p>
            {{ project.location.name }}
          </p>
        </a>
      </div> <!--End Links-->

      <!--Tags (Type, Role)-->
      <div class="flex flex-row gap-1 mt-3">
        <div :class="{
                    'bg-green-400/10 text-green-300': project.type === 'Personal',
                    'bg-red-400/10 text-red-300': project.type === 'Company',
             }"
             class="flex
                    items-center
                    rounded-full
                    px-3
                    py-1
                    text-xs
                    font-medium
                    leading-5">
          {{ project.type }}
        </div>

        <div class="flex
                    items-center
                    rounded-full
                    bg-yellow-400/10
                    px-3
                    py-1
                    text-xs
                    font-medium
                    leading-5
                    text-yellow-300 ">
          {{ project.role }}
        </div>
      </div> <!--End Tags (Type, Role)-->

      <!--Skills-->
      <div class="flex flex-wrap gap-1 mt-3">
        <p v-for="(skill, skillIndex) in project.skills"
           :key="skillIndex"
           class="rounded-full
                  bg-blue-400/10
                  px-3
                  py-1
                  text-xs
                  font-medium
                  leading-5
                  text-blue-300">
          {{ skill }}
        </p>
      </div> <!--End Skills-->
    </div> <!--End Detail-->
  </a> <!--End Project-->
</template>

<script lang="ts" setup>
import {PropType} from "vue";
import ProjectType from "../common/model/ProjectType";

const props = defineProps({
  project: {
    type: Object as PropType<ProjectType>,
    required: true,
  },
});

</script>

<style scoped>

</style>