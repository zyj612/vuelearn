<template>
    <div>首页</div>
</template>

<script lang="ts" setup name="Home">
import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
const router= useRouter()

//编程式导航路由
onMounted(() => {
    console.log('Home组件被挂载了');
    setTimeout(()=>{
        router.replace('/about');
    },3000)
})

onUnmounted(() => {
    console.log('Home组件被卸载了');
})

</script>

<style></style>