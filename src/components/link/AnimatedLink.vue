<template>
  <router-link :to="to"
               class="relative w-fit
                      flex items-center
                      mt-8
                      font-bold
                      hover:text-white
                      group">
    <p class="mr-1">
      {{ text }}
    </p>
    <font-awesome-icon
        :icon="icon"
        class="shrink-0
               -translate-y-px transition-transform
               group-hover:translate-x-1
               group-focus-visible:translate-x-1
               motion-reduce:transition-none"/>

    <span class="absolute
                 -bottom-0.5
                 left-0
                 w-0 h-0.5
                 bg-white
                 transition-all
                 group-hover:w-full">
    </span>

  </router-link>
</template>

<script lang="ts" setup>

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
});

</script>

<style scoped>

</style>