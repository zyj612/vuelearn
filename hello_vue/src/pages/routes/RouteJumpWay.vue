<template>
    <div class="flex h-screen">
        <!-- 左侧导航栏 -->
        <div class="w-1/8  p-4">
            <ul class="mt-4">
                <li class="mb-2">
                    <RouterLink :to="{ name: 'namejump' }" class="hover:font-semibold">路由名称跳转</RouterLink>
                </li>
                <li class="mb-2">
                    <RouterLink :to="{ path: '/routerjumpway/replacejump' }" replace class="hover:font-semibold">
                        路由replace模式</RouterLink>
                </li>
                <li class="mb-2">
                    <RouterLink to="/routerjumpway/namejump" class="hover:font-semibold">路由push模式</RouterLink>
                </li>
                <li class="mb-2">
                    <button @click="showCarDetail(car)" class="hover:font-semibold">查看汽车详情</button>
                </li>
                <!-- 添加更多导航项 -->
            </ul>
        </div>

        <div class="divider"></div>

        <div class="flex-1 p-4">
            <RouterView></RouterView>
        </div>

    </div>
</template>

<script lang="ts" setup name="RouteJumpWay">

import { reactive } from 'vue'
import { useRouter,RouterView } from 'vue-router'

const router = useRouter()

let car = reactive({
    id: 1,
    brand: "宝马",
    price: 1000000
})

interface Car {
    id: number,
    brand: string,
    price: number
}

function showCarDetail(car:Car) {
    //编程式导航路由

    router.replace({
        name: "cardetail",
        query: {
            id: car.id,
            brand: car.brand,
            price: car.price
        }
    });

}

</script>

<style>
.divider {
    width: 1px;
    background-color: #ddd;
}
</style>