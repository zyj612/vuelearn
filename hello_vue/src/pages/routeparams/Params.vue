<template>
    <div class="flex h-screen">
        <!-- 左侧导航栏 -->
        <div class="w-1/8  p-4">
            <ul class="mt-4">
                <li class="mb-2">
                    <RouterLink :to="`/params/paramsmethod1/${car.id}/${car.brand}/${car.price}`"
                        class="hover:font-semibold">params参数传递方式一</RouterLink>
                </li>
                <li class="mb-2">
                    <RouterLink :to="{
                        name: 'paramsmethod2',
                        params: {
                            id: car.id,
                            brand: car.brand,
                            price: car.price
                        }
                    }" class="hover:font-semibold">params参数传递方式二</RouterLink>
                </li>
                <li class="mb-2">
                    <RouterLink :to="{
                        name: 'paramsmethod3',
                        params: {
                            id: car.id,
                            brand: car.brand
                        }
                    }" class="hover:font-semibold">params参数传递方式三</RouterLink>
                </li>
            </ul>
        </div>

        <div class="divider"></div>

        <div class="flex-1 p-4">
            <RouterView></RouterView>
        </div>

    </div>
</template>

<script lang="ts" setup name="Params">
import { ref, reactive } from 'vue'
import { RouterView } from 'vue-router'

let car = reactive({
    id: 1,
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