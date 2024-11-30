<template>
    <div class="flex h-screen">
        <!-- 左侧导航栏 -->
        <div class="w-1/8  p-4">
            <ul class="mt-4">
                <li class="mb-2">
                    <RouterLink to="/tailwindcss/block" class="hover:font-semibold">Block样式</RouterLink>
                </li>
                <li class="mb-2">
                    <RouterLink :to="{
                        path:'/tailwindcss/button'
                    }" class="hover:font-semibold">Button样式</RouterLink>
                </li>
                <li class="mb-2">
                    <RouterLink :to="{
                        name:'login'       
                    }" class="hover:font-semibold">Login样式</RouterLink>
                </li>
                <li class="mb-2">
                    <RouterLink :to="{
                        name:'contact'       
                    }" class="hover:font-semibold">Contact样式</RouterLink>
                </li>
                <li class="mb-2">
                    <RouterLink :to="{
                        name:'essential'       
                    }" class="hover:font-semibold">Essential样式</RouterLink>
                </li>
            </ul>
        </div>

        <div class="divider"></div>

        <div class="flex-1 p-4">
            <RouterView></RouterView>
        </div>

    </div>
</template>

<script lang="ts" setup name="QueryParams">
import { ref, reactive } from 'vue'
import { RouterView } from 'vue-router'

let car = reactive({
    id:1,
    brand: "宝马",
    price: "价格"
})
</script>

<style>
.divider {
    width: 1px;
    background-color: #ddd;
}
</style>