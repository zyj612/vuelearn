<template>
  <nav class="bg-blue-500 p-4">
    <RouterLink to="/home" class="text-white ml-4">Home</RouterLink>
    <RouterLink to="/about" class="text-white ml-4">About</RouterLink>
    <RouterLink to="/tailwind" class="text-white ml-4">TailWindCss样式学习</RouterLink>
    <RouterLink to="/routerjumpway" replace class="text-white ml-4">vue路由器</RouterLink>
    <RouterLink to="/queryparams" replace class="text-white ml-4">vue-query参数传递</RouterLink>
    <RouterLink to="/params" replace class="text-white ml-4">vue-params参数传递</RouterLink>
    <RouterLink to="/props" replace class="text-white ml-4">vue-props参数传递</RouterLink>
    <RouterLink to="/componentcommunication" class="text-white ml-4">vue组件通讯</RouterLink>
    <RouterLink to="/tailwindcss" class="text-white ml-4">样式</RouterLink>
  </nav>
  <div>
    <RouterView></RouterView>
  </div>
</template>

<script lang="ts" setup name="Navbar">
import { RouterLink,RouterView } from 'vue-router'

</script>

<style></style>