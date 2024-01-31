<script lang="ts" setup>
import HeaderWithOnlyLogo from "../components/header/HeaderWithOnlyLogo.vue";
import ContainerLayout from "../components/layout/ContainerLayout.vue";

const companyName = "FPT Software";
</script>

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
        <li>
          <router-link to="/experiences">
            Experiences
          </router-link>
        </li>
        <li class="font-bold">
          {{ companyName }}
        </li>
      </ul>
    </div>
    <!--End Breadcrumbs-->

    <!--Content-->
    <div class="grid grid-cols-1 gap-x-6 gap-y-3 mt-10 pb-10">

      <!-- Overview -->
      <div class="flex flex-col gap-5">
        <p class="text-2xl font-bold">Overview</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div class="grid grid-cols-10 md:flex gap-3">
            <p class="text-slate-400 col-span-3">Company:</p>
            <p class="font-bold col-span-7">{{ companyName }}</p>
          </div>

          <div class="grid grid-cols-10 md:flex gap-3">
            <p class="text-slate-400 col-span-3">Duration:</p>
            <p class="font-bold col-span-3">{{ "Nov 2023" }}</p>
            <p class="col-span-1">-</p>
            <p class="font-bold col-span-3">{{ "Dec 2023" }}</p>
          </div>

          <div class="grid grid-cols-10 md:flex gap-3">
            <p class="text-slate-400 col-span-3">Role:</p>
            <p class="font-bold col-span-7">{{ "Software Engineer" }}</p>
          </div>

          <div class="grid grid-cols-10 md:flex gap-3">
            <p class="text-slate-400 col-span-3">Location:</p>
            <p class="font-bold col-span-7">{{ "Ho Chi Minh City, Vietnam" }}</p>
          </div>
        </div>
      </div>
      <!-- End Overview -->

      <div class="divider divider-vertical"></div>

      <!-- Responsibilities -->
      <div class="flex flex-col gap-5">
        <p class="text-2xl font-bold">Responsibilities</p>

        <ul class="list-disc ml-5 flex flex-col gap-2 text-slate-400">
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at elit in risus dictum iaculis quis et
            eros. Ut laoreet mollis ipsum eu interdum. Aliquam erat volutpat. Suspendisse tempor hendrerit felis.
            Integer sit amet sodales nibh. Nulla posuere blandit justo at pharetra. Sed ullamcorper felis a magna
            efficitur, sit amet facilisis nibh accumsan. Mauris quis sapien malesuada, suscipit augue vitae, volutpat
            quam. Praesent ac consequat lorem.
          </li>
          <li class="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at elit in risus dictum iaculis quis et
            eros. Ut laoreet mollis ipsum eu interdum. Aliquam erat volutpat. Suspendisse tempor hendrerit felis.
            Integer sit amet sodales nibh. Nulla posuere blandit justo at pharetra. Sed ullamcorper felis a magna
            efficitur, sit amet facilisis nibh accumsan. Mauris quis sapien malesuada, suscipit augue vitae, volutpat
            quam. Praesent ac consequat lorem.
          </li>
        </ul>
      </div>
      <!-- End Responsibilities -->

      <div class="divider divider-vertical"></div>

      <!-- Skills -->
      <div class="flex flex-col gap-5">
        <p class="text-2xl font-bold">Expertise</p>
      </div>
      <!-- End Skills -->

      <div class="divider divider-vertical"></div>

      <!-- Projects -->
      <div class="flex flex-col gap-5">
        <p class="text-2xl font-bold">Projects</p>
      </div>
      <!-- End Projects -->

    </div>
    <!--End Content-->

  </ContainerLayout>
</template>

<style scoped>

</style>