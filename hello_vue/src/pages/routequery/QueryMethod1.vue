<template>
    <p class='mt-4'>query参数传递方式1</p>
    <br />
    <ul>
        <li>编号：{{ route.query.id }}</li>
        <li>品牌：{{ route.query.brand }}</li>
        <li>价格：{{ route.query.price }}</li>
    </ul>
</template>

<script lang="ts" setup name="QueryMethod1">

import { useRoute } from 'vue-router'
let route = useRoute();

</script>

<style></style>