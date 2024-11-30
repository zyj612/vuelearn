<template>
    <p class='mt-4'>使用query传递参数，使用props属性配置，不支持参数解构</p>
    <br />
    <ul>
        <li>编号：{{ id }}</li>
        <li>品牌：{{ brand }}</li>
        <li>价格：{{ price }}</li>
    </ul>
</template>

<script lang="ts" setup name="PropsMethod1">

defineProps(['id','brand','price'])

import { useRoute } from 'vue-router'
let route = useRoute();
console.log("PropsMethod1",route);

</script>

<style></style>