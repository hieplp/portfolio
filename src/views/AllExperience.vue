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
            Experience
          </a>
        </li>
      </ul>
    </div>
    <!--End Breadcrumbs-->

    <!--Content-->
    <div class="grid grid-cols-1 gap-x-6 gap-y-10 mt-10 pb-10">
      <experience-item v-for="(experience, experienceIndex) in experiences"
                       :key="experienceIndex" :experience="experience"
                       :is-long-description="true"
      />
    </div><!--End Content-->

  </ContainerLayout>
</template>

<script lang="ts" setup>
import HeaderWithOnlyLogo from "../components/header/HeaderWithOnlyLogo.vue";
import ContainerLayout from "../components/layout/ContainerLayout.vue";
import {onMounted} from "vue";
import {EXPERIENCES_ARR} from "../common/constants";
import ExperienceItem from "../components/ExperienceItem.vue";

onMounted(() => {
  document.title = "all experiences | hiep.lp";
  window.scrollTo(0, 0);
});

const experiences = EXPERIENCES_ARR;

</script>

<style scoped>

</style>