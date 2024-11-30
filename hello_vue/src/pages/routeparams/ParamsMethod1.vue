<template>
    <p class='mt-4'>params参数传递方式1</p>
    <br />
    <ul>
        <li>编号：{{ route.params.id }}</li>
        <li>品牌：{{ route.params.brand }}</li>
        <li>价格：{{ route.params.price }}</li>
    </ul>
</template>

<script lang="ts" setup name="ParamsMethod1">

import { useRoute } from 'vue-router'
const route = useRoute();

</script>

<style></style>