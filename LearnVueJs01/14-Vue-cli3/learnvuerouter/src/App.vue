<template>
  <div id="app">
    <h2>我是app组件</h2>
    <!-- <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" replace>关于</router-link> -->
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- 参数传递方式1 -->
    <!-- <router-link v-bind:to="'/user/' + userId">用户</router-link> -->
    <!-- 参数传递方式2 -->
    <!-- <router-link v-bind:to="{path:'/profile',query:{name:'jack',age:18,height:188}}">档案</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'zhangsan'
    }
  },
  methods: {
    homeClick() {
      //通过代码路径修改url，不要绕过vue-router修改路径
      this.$router.push('/home');
      console.log("homeClick");
    },
    aboutClick() {
      this.$router.push('/about');
      console.log("aboutClick");
    },
    userClick() {
      this.$router.push('/user'+this.userId);
    },
    profileClick() {
       this.$router.push({path:'/profile',query:{
         name:'jack',
         age:18,
         height:188
       }});
    }
  }
}
</script>

<style>
</style>
