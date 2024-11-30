<template>
    <p class='mt-4'>使用name跳转路由，并解构参数</p>
    <br />
    <ul>
        <li>编号：{{ query.id }}</li>
        <li>品牌：{{ query.brand }}</li>
        <li>价格：{{ query.price }}</li>
    </ul>
</template>

<script lang="ts" setup name="QueryMethod1">

import { toRefs } from 'vue'
import { useRoute } from 'vue-router'
let route = useRoute();
let {query} = toRefs(route);//结构并保留响应式

</script>

<style></style>