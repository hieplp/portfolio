<template>
  <ScreenContainerLayout>
    <CenterLayout>
      <div class="w-full space-y-5">

        <!--Title-->
        <p class="text-3xl md:mb-10">
          /*my experience*/
        </p>
        <!--End Title-->

        <!--Content-->
        <div class="flex flex-col md:flex-row w-full">

          <!--Description-->
          <div class="h-full">
            <p class="font-bold text-lg mb-2">
              With <span class="text-secondary">over 2.5 years</span> of hands-on experience, my journey has revolved
              around the dynamic world of <span class="text-secondary">Java and its diverse ecosystem</span>.
            </p>
            <p>
              I've seamlessly navigated through its intricacies, harnessing its power to architect, develop, and
              optimize software solutions that stand as a testament to my proficiency and dedication.
            </p>

            <AnimatedLink :icon="['fas', 'arrow-right']"
                          :is-external="true"
                          class="mt-10 md:mt-20"
                          text="View full résumé"
                          to="https://drive.google.com/file/d/1Z-8AK3RH0mBJszJRvw_pH6LrFX3X_U-r/view?usp=drive_link"/>
          </div>
          <!--End Description-->

          <div class="divider divider-vertical md:divider-horizontal"></div>

          <!--Experience-->
          <div class="col-span-2 space-y-8">
            <a v-for="(experience, experienceIndex) in experiences"
               :key="experienceIndex"
               :href="experience.companyLink"
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

                <p v-for="(description, descriptionIndex) in experience.descriptions"
                   :key="descriptionIndex"
                   class="mt-2 text-slate-500">
                  {{ description }}
                </p>

                <div class="flex flex-row space-x-3 mt-2">
                  <a v-for="(project, projectIndex) in experience.projects"
                     :key="projectIndex"
                     :href="project.link"
                     class="flex
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

                <div class="flex flex-row gap-1 mt-4">
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


          </div>
          <!--End Experience-->

        </div>
        <!--End Content-->

      </div>
    </CenterLayout>
  </ScreenContainerLayout>
</template>

<script lang="ts" setup>
import ScreenContainerLayout from "../components/layout/ScreenContainerLayout.vue";
import CenterLayout from "../components/layout/CenterLayout.vue";
import AnimatedLink from "../components/link/AnimatedLink.vue";


const experiences = [
  {
    from: "Mar 2021",
    to: "Jun 2023",
    title: "Backend Developer",
    company: "Intelin",
    companyLink: "https://intelin.vn",
    descriptions: [
      "Utilized Vertx, MariaDB, RabbitMQ, Redis, etc to develop multiple microservices and monolith applications.",
    ],
    projects: [
      {
        name: "giotmauvang",
        url: "https://giotmauvang.org.vn/",
      },
      {
        name: "tiktik",
        url: "https://tiktik.vn/",
      },
      {
        name: "meeasy",
        url: "https://meeasy.vn/",
      },
    ],
    skills: [
      "Vert.x",
      "jOOQ",
      "MariaDB",
      "Docker",
    ]
  },
  {
    from: "Sep 2019",
    to: "Dec 2019",
    title: "Software Engineer Intern",
    company: "FPT Software",
    companyLink: "https://fptsoftware.com",
    descriptions: [
      "Worked as a software engineer intern for an outsourcing Japanese project.",
    ],
    projects: [],
    skills: [
      "SpringBoot",
      "PostgreSQL",
      "VueJs",
      "ElementUI",
    ]
  }
]


</script>

<style scoped>

</style>