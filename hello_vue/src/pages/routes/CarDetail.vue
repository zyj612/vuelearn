<template>
    <p class='mt-4'>编程式导航，并使用query传递参数</p>
    <br />
    <ul>
        <li>编号：{{ route.query.id }}</li>
        <li>品牌：{{ route.query.brand }}</li>
        <li>价格：{{ route.query.price }}</li>
    </ul>
</template>


<script lang="ts" setup name="CarDetail">

import { useRoute } from 'vue-router'
let route = useRoute();

</script>

<style></style>