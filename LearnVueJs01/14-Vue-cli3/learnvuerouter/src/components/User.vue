<template>
    <div>
        <h2>我是用户界面</h2>
        <p>我是用户相关信息</p>
        <h2>{{userId}}</h2>
    </div>
</template>

<script>
export default {
    name:'User',
    computed:{
        userId(){
            //这个userId是从路由配置中写的
            return this.$route.params.userId;
        }
    }
}
</script>