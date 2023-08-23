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
        Cultivating a comprehensive skill set, I bring expertise in Java and TypeScript to the table. My primary focus
        lies in backend development, where I've demonstrated proficiency in utilizing frameworks such as Vert.x and
        Spring to build robust and dependable systems.
      </p>

      <p>
        Additionally, I've extended my capabilities to encompass frontend technologies, including Vue.js and React,
        enabling me to contribute effectively across the full stack of software development.
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
        icon: "images/java.svg"
      },
      {
        name: "Javascript",
        icon: "images/JavaScript.svg"
      },
      {
        name: "Typescript",
        icon: "images/TypeScript.svg"
      },
    ]
  },
  {
    title: "Back-end Frameworks / Libraries",
    list: [
      {
        name: "Spring",
        icon: "images/spring.svg"
      },
      {
        name: "Vert.x",
        icon: "images/vertx.svg"
      },
      {
        name: "jOOQ",
        icon: "images/jooq.png"
      },
      {
        name: "JUnit",
        icon: "images/JUnit.svg"
      },
    ]
  },
  {
    title: "Front-end Frameworks / Libraries",
    list: [
      {
        name: "Vue",
        icon: "images/Vue.js.svg"
      },
      {
        name: "React",
        icon: "images/React.svg"
      },
      {
        name: "TailwindCSS",
        icon: "images/Tailwind CSS.svg"
      },
      {
        name: "Bootstrap",
        icon: "images/Bootstrap.svg"
      },
    ]
  },
  {
    title: "Databases",
    list: [
      {
        name: "MySQL",
        icon: "images/mysql.svg"
      },
      {
        name: "MariaDB",
        icon: "images/mariadb.svg"
      },
      {
        name: "Redis",
        icon: "images/Redis.svg"
      },
    ]
  },
  {
    title: "Operating Systems",
    list: [
      {
        name: "Arch",
        icon: "images/Arch Linux.svg"
      },
      {
        name: "Fedora",
        icon: "images/Fedora.svg"
      },
    ]
  },
  {
    title: "Version Control",
    list: [
      {
        name: "Github",
        icon: "images/GitHub.svg"
      },
      {
        name: "GitLab",
        icon: "images/GitLab.svg"
      },

    ]
  },
  {
    title: "Cloud",
    list: [
      {
        name: "Firebase",
        icon: "images/Firebase.svg"
      },
      {
        name: "Google",
        icon: "images/Google Cloud.svg"
      },

    ]
  },
  {
    title: "Tools",
    list: [
      {
        name: "Postman",
        icon: "images/Postman.svg"
      },
      {
        name: "IntelliJ",
        icon: "images/IntelliJ IDEA.svg"
      },
      {
        name: "WebStorm",
        icon: "images/WebStorm.svg"
      },
      {
        name: "DataGrip",
        icon: "images/DataGrip.svg"
      },
      {
        name: "Vim",
        icon: "images/Vim.svg"
      },
    ]
  },
  {
    title: "Others",
    list: [
      {
        name: "RabbitMQ",
        icon: "images/RabbitMQ.svg"
      },
      {
        name: "Slack",
        icon: "images/Slack.svg"
      },
      {
        name: "Jira",
        icon: "images/Jira.svg"
      },
      {
        name: "Docker",
        icon: "images/Docker.svg"
      },
      {
        name: "Jenkins",
        icon: "images/Jenkins.svg"
      },
      {
        name: "Kubernetes",
        icon: "images/Kubernetes.svg"
      },
    ]
  }
]


</script>

<style scoped>

</style>