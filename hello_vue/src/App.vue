<template>
    <Navbar/>
</template>

<!-- <script lang="ts" setup name="App">

/* export default{
    name:'App',
    components:['Navbar','Person']
} */

import Navbar from "./components/Navbar.vue"

import Person from "./components/Person.vue"

</script> -->

<script lang="ts">

import Navbar from "./components/Navbar.vue"

export default {
    name: 'App',
    components: {Navbar }
}

</script>

<style></style>