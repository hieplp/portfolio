<template>
  <a v-if="isExternal"
     :href="to"
     class="relative w-fit
            flex items-center
            hover:text-white hover:font-bold
            group"
     rel="noopener noreferrer"
     target="_blank">
    <AnimatedLinkContent :icon="icon" :text="text"/>
  </a>
  <router-link v-else
               :to="to"
               class="relative w-fit
                      flex items-center
                      hover:text-white hover:font-bold
                      group">
    <AnimatedLinkContent :icon="icon" :text="text"/>
  </router-link>
</template>

<script lang="ts" setup>

import AnimatedLinkContent from "./AnimatedLinkContent.vue";

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  icon: {
    type: Array<string>,
    required: true,
  },
  isExternal: {
    type: Boolean,
    default: false,
  },
});

</script>

<style scoped>

</style>