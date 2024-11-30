<template>
    <div class="person">
        <h2>name:{{ name }}</h2>
        <h2>name:{{ age }}</h2>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />

        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>
    <div
        class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="@/img/erin-lindford.jpg"
            alt="Woman's Face" />
        <div class="text-center space-y-2 sm:text-left">
            <div class="space-y-0.5">
                <p class="text-lg text-black font-semibold">
                    Erin Lindford
                </p>
                <p class="text-slate-500 font-medium">
                    Product Engineer
                </p>
            </div>
            <button
                class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
        </div>
    </div>
</template>

<script lang="ts">

export default {
    name: "Person"
} 
</script>

<script setup lang="ts">

import { ref } from 'vue'
let name = ref("王二");
let age = ref(18);
let tel = "13248361602";
let address = "浦东新区";

function changeName() {
    name.value = "二麻子";
}

function changeAge() {
    age.value += 1;
}

function showTel() {
    alert(tel);
}
</script>

<style></style>