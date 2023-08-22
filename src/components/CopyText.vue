<template>
  <div :class="{
          'tooltip tooltip-open': isCopied
       }"
       class="relative
              w-fit
              tooltip-right
              flex items-center group hover:cursor-pointer"
       data-tip="Copied!"
       @click="copyText">
    <slot/>

    <button class="flex items-center justify-center
                  h-6 w-6
                  text-xs
                  text-neutral-300
                  group-hover:text-neutral-500 group">

      <svg v-if="isCopied"
           class="w-3 h-3 text-green-500 stroke-current"
           fill="none"
           stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" x-cloak xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5 12.75l6 6 9-13.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <svg v-else class="w-4 h-4 stroke-current" viewBox="0 0 24 24"
           xmlns="http://www.w3.org/2000/svg">
        <g fill="none" stroke="none">
          <path d="M7.75 7.757V6.75a3 3 0 0 1 3-3h6.5a3 3 0 0 1 3 3v6.5a3 3 0 0 1-3 3h-.992" stroke="currentColor"
                stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
          <path d="M3.75 10.75a3 3 0 0 1 3-3h6.5a3 3 0 0 1 3 3v6.5a3 3 0 0 1-3 3h-6.5a3 3 0 0 1-3-3v-6.5z"
                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
        </g>
      </svg>
    </button>
  </div>

</template>

<script lang="ts" setup>

import {ref} from "vue";

const isCopied = ref(false);
const props = defineProps({
  textToCopy: {
    type: String,
    required: true
  }
});

const copyText = () => {
  isCopied.value = true;
  navigator.clipboard.writeText(props.textToCopy);
  setTimeout(() => {
    isCopied.value = false;
  }, 1000);
}

</script>

<style scoped>

</style>