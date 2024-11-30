<template>
    <p class='mt-4'>prams通过在参数尾巴添加?,设置参数可传可不传</p>
    <br />
    <ul>
        <li>编号：{{ params.id }}</li>
        <li>品牌：{{ params.brand }}</li>
        <li>价格：{{ params.price }}</li>
    </ul>
</template>

<script lang="ts" setup name="ParamsMethod3">

import { toRefs } from 'vue'
import { useRoute } from 'vue-router'
let route = useRoute();
let {params} = toRefs(route);//结构并保留响应式

</script>

<style></style>