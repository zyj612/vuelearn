<template>
    <div class="child">
        <h3>子组件</h3>
        <h4>玩具：{{ toy }}</h4>
    </div>
</template>

<script lang="ts" setup name="PropsChildren">

import { ref } from 'vue'
let toy = ref("奥特曼")

</script>

<style>
.child {
  background-color: blue;
  color: white;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>