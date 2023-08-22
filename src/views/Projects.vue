<template>
  <HeaderWithOnlyLogo/>


  <ContainerLayout class="min-h-screen">

    <!--Breadcrumbs-->
    <div class="text-lg breadcrumbs mb-5">
      <ul>
        <li>
          <router-link to="/">
            Home
          </router-link>
        </li>
        <li class="font-bold">
          <a>
            Projects
          </a>
        </li>
      </ul>
    </div>
    <!--End Breadcrumbs-->

    <div class="flex flex-row gap-2 w-full">
      Filter by:

      <div v-for="(filterType, index) in filterTypes"
           :key="index"
           class="flex flex-row">

        <p :class="{'font-bold text-secondary': currentFilter === filterType.name}"
           class="relative hover:cursor-pointer hover:font-bold hover:text-secondary"
           @click="filterType.onClick">
          {{ filterType.name }}
          <span class="absolute -right-4 -top-1.5 text-xs">
            {{ appendZero(filterType.total) }}
          </span>
        </p>

        <p v-if="index < filterTypes.length -1" class="ml-6">/</p>
      </div>

    </div>

    <!--Content-->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 mt-10 pb-10">
      <ProjectItem v-for="project in projects"
                   :key="project.id"
                   :project="project"/>
    </div> <!--End Content-->

  </ContainerLayout>
</template>

<script lang="ts" setup>
import HeaderWithOnlyLogo from "../components/header/HeaderWithOnlyLogo.vue";
import ContainerLayout from "../components/layout/ContainerLayout.vue";
import {onMounted, ref} from "vue";
import ProjectType from "../common/model/ProjectType";
import {COMPANY_PROJECTS_ARR, PERSONAL_PROJECTS_ARR, PROJECT_ARR} from "../common/constants";
import ProjectItem from "../components/ProjectItem.vue";
import {appendZero} from "../common/helpers";
import FilterType from "../common/model/FilterType";

onMounted(() => {
  document.title = "all projects | hiep.lp";
  window.scrollTo(0, 0);

  projects.value = PROJECT_ARR;
});

const projects = ref<ProjectType[]>([]);
const currentFilter = ref("all");

const filterTypes = [
  {
    name: "all",
    total: PROJECT_ARR.length,
    onClick: () => {
      currentFilter.value = "all";
      projects.value = PROJECT_ARR;
    }
  },
  {
    name: "personal",
    total: PERSONAL_PROJECTS_ARR.length,
    onClick: () => {
      currentFilter.value = "personal";
      projects.value = PERSONAL_PROJECTS_ARR;
    }
  },
  {
    name: "company",
    total: COMPANY_PROJECTS_ARR.length,
    onClick: () => {
      currentFilter.value = "company";
      projects.value = COMPANY_PROJECTS_ARR;
    }
  }
] as FilterType[];

</script>

<style scoped>

</style>