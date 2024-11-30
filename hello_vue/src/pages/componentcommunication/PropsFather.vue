<template>
    <div class="parent">
        <h3>父组件</h3>
        <h4>汽车：{{ car }}</h4>
        <PropsChildren :car="car"/>
    </div>
</template>

<script lang="ts" setup name="PropsFather">
import {ref} from 'vue'
import PropsChildren from '@/pages/componentcommunication/PropsChildren.vue'
let car = ref("奔驰")
</script>

<style scoped>
/* @layer .parent {
  .child {
    background-color: green;
    color: white;
    padding: 10px;
  }
} */
.parent{
  background-color: red;
  color: white;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>