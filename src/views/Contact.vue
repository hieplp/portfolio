<template>
  <ScreenContainerLayout class="background bg-cover bg-center">
    <CenterLayout>
      <div class="w-full space-y-12">
        <!--Title-->
        <p class="text-3xl md:mb-16 pb-2 border-b-4">
          /*my contact*/
        </p>
        <!--End Title-->

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">
          <div class="col-span-1 flex flex-col gap-5">
            <CopyText :text-to-copy="CONTACT_MAP.gmail.label">
              <div class="flex flex-row gap-2 text-lg">
                <p class="">e-mail:</p>
                <p class="font-bold text-white">
                  {{ CONTACT_MAP.gmail.label }}
                </p>
              </div>
            </CopyText>

            <CopyText :text-to-copy="CONTACT_MAP.phone.label">
              <div class="flex flex-row gap-2 text-lg">
                <p class="">phone:</p>
                <p class="font-bold text-white">
                  {{ CONTACT_MAP.phone.label }}
                </p>
              </div>
            </CopyText>
          </div>

          <div class="flex flex-col md:flex-row col-span-1 gap-2 md:gap-12">
            <p class="text-lg">social media</p>

            <div class="flex flex-col gap-5">
              <AnimatedLink v-for="(social, index) in socials"
                            :key="index"
                            :data-tip="social.url"
                            :icon="['fas', 'arrow-right']"
                            :is-external="true"
                            :text="social.label"
                            :to="social.url"
                            class="font-bold text-white text-lg tooltip"/>
            </div>
          </div>
        </div>
      </div>
    </CenterLayout>
  </ScreenContainerLayout>
</template>

<script lang="ts" setup>
import ScreenContainerLayout from "../components/layout/ScreenContainerLayout.vue";
import CenterLayout from "../components/layout/CenterLayout.vue";
import {CONTACT_MAP} from "../common/constants.ts";
import CopyText from "../components/CopyText.vue";
import AnimatedLink from "../components/link/AnimatedLink.vue";

const socials = [
  CONTACT_MAP.github,
  CONTACT_MAP.facebook
];

</script>

<style lang="scss" scoped>
</style>