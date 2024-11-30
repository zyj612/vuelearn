<template>
    <p class='mt-4'>使用params传递参数，使用props属性配置，支持参数解构</p>
    <br />
    <ul>
        <li>编号：{{ id }}</li>
        <li>品牌：{{ brand }}</li>
        <li>价格：{{ price }}</li>
    </ul>
</template>

<script lang="ts" setup name="PropsMethod2">

defineProps(['id','brand','price'])

</script>

<style></style>