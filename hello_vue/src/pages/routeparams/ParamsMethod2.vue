<template>
    <p class='mt-4'>params参数传递方式2，使用to方式，后面必须要接的是路由的name</p>
    <br />
    <ul>
        <li>编号：{{ route.params.id }}</li>
        <li>品牌：{{ route.params.brand }}</li>
        <li>价格：{{ route.params.price }}</li>
    </ul>
</template>

<script lang="ts" setup name="QueryMethod1">

import { useRoute } from 'vue-router'
let route = useRoute();

</script>

<style></style>