<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  icon: {
    type: Array<string>,
    required: true,
  }
});


</script>

<template>
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
</template>

<style scoped>

</style>