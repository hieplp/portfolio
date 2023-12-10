<script lang="ts" setup>
import ExperienceType from "../common/model/ExperienceType.ts";
import {onMounted, PropType, ref} from "vue";

const props = defineProps({
  experience: {
    type: Object as PropType<ExperienceType>,
    required: true,
  },
  isLongDescription: {
    type: Boolean,
    default: false,
  }
})

const descriptions = ref<string[]>([]);
onMounted(() => {
  if (props.isLongDescription) {
    descriptions.value = props.experience?.longDescriptions;
  } else {
    descriptions.value = props.experience?.descriptions;
  }
})

</script>

<template>
  <a :href="experience.companyLink"
     class="relative
            grid grid-cols-12
            gap-1
            group
            pb-1
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
                md:group-hover:drop-shadow-lg">
    </div>
    <div class="col-span-4 z-10">
      <p class="text-slate-500 group-hover:text-slate-300 hidden md:block">
        {{ experience.from }} - {{ experience.to }}
      </p>
    </div>

    <div class="col-span-12 md:col-span-8 z-10">
      <p class="font-bold group-hover:text-white">
        {{ experience.title }}
        <span class="text-secondary">
          @ {{ experience.company }}
        </span>
      </p>

      <p class="text-slate-500 group-hover:text-slate-300 block md:hidden">
        {{ experience.from }} - {{ experience.to }}
      </p>

      <ul :class="{
        'list-inside': !props.isLongDescription,
        'list-disc ml-5': props.isLongDescription
      }">
        <li v-for="(description, descriptionIndex) in descriptions"
            :key="descriptionIndex"
            class="mt-2 text-slate-500">
          {{ description }}
        </li>
      </ul>

      <div class="flex flex-row space-x-3 mt-2">
        <a v-for="(project, projectIndex) in experience.projects"
           :key="projectIndex"
           :data-tip="project.url"
           :href="project.url"
           class="flex
                  tooltip
                  items-center
                  space-x-1
                  hover:text-white
                  hover:font-bold"
           rel="noopener noreferrer"
           target="_blank">
          <font-awesome-icon :icon="['fas', 'link']" class="h-4 w-4"/>
          <p>{{ project.name }}</p>
        </a>
      </div>

      <div class="flex flex-wrap gap-1 mt-4">
        <div v-for="(skill, skillIndex) in experience.skills"
             :key="skillIndex"
             class="flex
                    items-center
                    rounded-full
                    bg-blue-400/10
                    px-3
                    py-1
                    text-xs
                    font-medium
                    leading-5
                    text-blue-300 ">
          {{ skill }}
        </div>
      </div>
    </div>
  </a>
</template>

<style scoped>

</style>