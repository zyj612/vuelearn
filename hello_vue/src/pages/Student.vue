<template>
    <div class="person">
        <h2>name:{{ name }}</h2>
        <h2>name:{{ age }}</h2>

        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>

<script lang="ts">

export default {
    name: "Person"
} 
</script>

<script setup lang="ts" >
    let name = "王二";
        let age = 18;
        let tel = "13248361602";

        let address = "浦东新区";

        function changeName() {
            name = "二麻子"
        }

        function changeAge() {
            age += 1
        }

        function showTel() {
            alert(tel);
        }
</script>

<style>
</style>