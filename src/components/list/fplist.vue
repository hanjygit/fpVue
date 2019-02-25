<!--子组件-->
<template>
    <div class="fplist">
        <div class="listBtnContent">
            <slot name="listBtn" class="listBtn"></slot>
        </div>
        <div class="listContent">
            <slot name="listContainer"></slot>
        </div>
        <!--<fplistcontainer></fplistcontainer>-->
    </div>
</template>

<script>
//import fplistcontainer from 'fplistcontainer.vue'
export default {
    name:'fplist',
    props: ['',''],
    components:{
        //fplistcontainer,
    },
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
    
    .listBtnContent{
        width: 100%;
        /*height: 50px;*/
        border-bottom: 1px dashed rgba(230, 230, 230, 1);
        background-color: #fff;
        padding: 12px 0px;
    }
</style>