<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue';
</script>

<template>
  <HeaderComponent>
    <h1 class="text-[30px]">Article Platform</h1>
    <nav class="text-[25px] flex justify-between w-[200px] [&>a]:text-inherit [&>a]:no-underline">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/new">New Post</RouterLink>
    </nav>
  </HeaderComponent>
  <main class="m-[15px]">
    <router-view v-slot="{ Component }">
      <keep-alive exclude="PostListView,PostView">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </main>
</template>

<style scoped></style>
