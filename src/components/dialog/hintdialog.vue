<!--子组件-->
<template>
    <div class="dialogCommon" v-if="dialogShow">
        <div class="dialog">
            <div class="title" :class="dialogStatus=='success'?'greenmask':'redmask'">{{dialogTitle}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name:'hintdialog',
    props: ['dialogTitle','dialogShow','dialogStatus'],
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
    .dialogCommon{
        position: relative;
    }
    .dialog{
        position: fixed;
        top:50%;
        left: 50%;
        background-color: #fff;
        border-radius: 4px;
        margin-top: -10px;
        margin-left: -100px;
        z-index: 32009;
        .title{
            min-width: 200px;
            min-height: 20px;
            line-height: 20px;
            font-size: 16px;
            font-family: MicrosoftYaHei-Bold;
            font-weight: 700;
            color: #000;
            border-radius: 4px;
            box-sizing: border-box;
            text-align: center;
            padding: 20px;
        }
        .redmask{
            background-color: rgba(234,28,36,0.5)
        }
        .greenmask{
            background-color: rgba(28,234,80,0.5)
        }
    }
</style>