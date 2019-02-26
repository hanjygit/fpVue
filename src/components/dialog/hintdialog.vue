<!--子组件-->
<template>
<!--
    <div class="dialogCommon" v-if="dialogShow">
        <div class="dialog">
            <div class="title" :class="dialogStatus=='success'?'greenmask':'redmask'">{{dialogTitle}}</div>
        </div>
    </div>
-->
    <div class="hintBox" v-show="this.$store.getters.getHintShow">
        <div class="hintText" :class="this.$store.getters.getHintStatus"> 
        {{this.$store.getters.getHintText}}
        </div>
    </div>
</template>

<script>
export default {
    name:'hintdialog',
   /* props: ['dialogTitle','dialogShow','dialogStatus'],*/
    data() {
        return {
        }
    },
    modules: {
        
    },
    created:function(){
    },
    methods:{
    }
}
</script>
<style scoped lang="less">
    .hintBox{
        position: relative
    }
    .hintText{
        min-width: 280px;
        max-width: 500px;
        height: auto;
        min-height: 20px;
        line-height: 20px;
        padding: 30px 15px;
        position: fixed;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        text-align: center;
        font-size: 16px;
        color: #fff;
        border-radius: 5px;
    }
    .errmask{
        background-color: rgba(234,28,36,0.5)
    }
    .successmask{
        background-color: rgba(28,234,80,0.5)
    }
</style>