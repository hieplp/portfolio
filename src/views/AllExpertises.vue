<template>
  <HeaderWithOnlyLogo/>
  <ContainerLayout>

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
            Expertise
          </a>
        </li>
      </ul>
    </div>
    <!--End Breadcrumbs-->

    <!--Description-->
    <div class="mb-10 space-y-2">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consectetur consequuntur debitis dolorum eius
        excepturi id maiores molestias nihil obcaecati pariatur quas sapiente sequi sint suscipit, totam unde
        voluptates? Illo?
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aspernatur consectetur consequatur cumque
        delectus distinctio dolores doloribus eaque enim et facilis nam perspiciatis provident, quasi rem repellendus
        rerum sint.
      </p>
    </div>
    <!--End Description-->

    <!--Expertise-->
    <div class="space-y-5 pb-5">
      <div v-for="(type, index) in expertises"
           :key="index"
           class="space-y-2">
        <p class="">
          {{ type.title }}
        </p>

        <div class="grid grid-cols-3 md:grid-cols-9 gap-2">
          <div v-for="(expertise, index) in type.list"
               :key="index"
               class="flex flex-col
                      justify-center items-center
                      p-3
                      bg-white
                      rounded
                      space-y-2">
            <img :alt="expertise.name" :src="expertise.icon" class="w-10 h-10"/>
            <p class="text-black">{{ expertise.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <!--End Expertise-->
  </ContainerLayout>
</template>

<script lang="ts" setup>
import ContainerLayout from "../components/layout/ContainerLayout.vue";
import HeaderWithOnlyLogo from "../components/header/HeaderWithOnlyLogo.vue";
import {onMounted} from "vue";

onMounted(() => {
  document.title = "all expertise | hiep.lp";
  window.scrollTo(0, 0);
});

const expertises = [
  {
    title: "Programming Languages",
    list: [
      {
        name: "Java",
        icon: "src/assets/java.svg"
      },
      {
        name: "Javascript",
        icon: "src/assets/JavaScript.svg"
      },
      {
        name: "Typescript",
        icon: "src/assets/TypeScript.svg"
      },
    ]
  },
  {
    title: "Back-end Frameworks / Libraries",
    list: [
      {
        name: "Spring",
        icon: "src/assets/spring.svg"
      },
      {
        name: "Vert.x",
        icon: "src/assets/vertx.svg"
      },
      {
        name: "jOOQ",
        icon: "src/assets/jooq.png"
      },
      {
        name: "JUnit",
        icon: "src/assets/JUnit.svg"
      },
    ]
  },
  {
    title: "Front-end Frameworks / Libraries",
    list: [
      {
        name: "Vue",
        icon: "src/assets/Vue.js.svg"
      },
      {
        name: "React",
        icon: "src/assets/React.svg"
      },
      {
        name: "TailwindCSS",
        icon: "src/assets/Tailwind CSS.svg"
      },
      {
        name: "Bootstrap",
        icon: "src/assets/Bootstrap.svg"
      },
    ]
  },
  {
    title: "Databases",
    list: [
      {
        name: "MySQL",
        icon: "src/assets/mysql.svg"
      },
      {
        name: "MariaDB",
        icon: "src/assets/mariadb.svg"
      },
      {
        name: "Redis",
        icon: "src/assets/Redis.svg"
      },
    ]
  },
  {
    title: "Operating Systems",
    list: [
      {
        name: "Arch",
        icon: "src/assets/Arch Linux.svg"
      },
      {
        name: "Fedora",
        icon: "src/assets/Fedora.svg"
      },
    ]
  },
  {
    title: "Version Control",
    list: [
      {
        name: "Github",
        icon: "src/assets/GitHub.svg"
      },
      {
        name: "GitLab",
        icon: "src/assets/GitLab.svg"
      },

    ]
  },
  {
    title: "Cloud",
    list: [
      {
        name: "Firebase",
        icon: "src/assets/Firebase.svg"
      },
      {
        name: "Google",
        icon: "src/assets/Google Cloud.svg"
      },

    ]
  },
  {
    title: "Tools",
    list: [
      {
        name: "Postman",
        icon: "src/assets/Postman.svg"
      },
      {
        name: "IntelliJ",
        icon: "src/assets/IntelliJ IDEA.svg"
      },
      {
        name: "WebStorm",
        icon: "src/assets/WebStorm.svg"
      },
      {
        name: "DataGrip",
        icon: "src/assets/DataGrip.svg"
      },
      {
        name: "Vim",
        icon: "src/assets/Vim.svg"
      },
    ]
  },
  {
    title: "Others",
    list: [
      {
        name: "RabbitMQ",
        icon: "src/assets/RabbitMQ.svg"
      },
      {
        name: "Slack",
        icon: "src/assets/Slack.svg"
      },
      {
        name: "Jira",
        icon: "src/assets/Jira.svg"
      },
      {
        name: "Docker",
        icon: "src/assets/Docker.svg"
      },
      {
        name: "Jenkins",
        icon: "src/assets/Jenkins.svg"
      },
      {
        name: "Kubernetes",
        icon: "src/assets/Kubernetes.svg"
      },
    ]
  }
]


</script>

<style scoped>

</style>