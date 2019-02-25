<!--子组件-->
<template>
    <div class="listContent">
        <!--<slot name="listContent"></slot>-->
        <div class="tbList">
            <div class="table-container" ref="thwidth">
                <div v-for="(item, index) in listHeader" :key="index" class="table-header" :style="{width: item.width}">{{item.label}}</div>
            </div>
        </div>
        <div class="footerList"></div>
    </div>
</template>

<script>
export default {
    name:'fplistcontainer',
    props: ['thData',''],
    data() {
        return {
            listHeader:'',
            //thwidth:'',
        }
    },
    modules: {
        
    },
    
    created:function(){
    },
    mounted:function(){
        this.listHeader = this.thData;
    },
    methods:{
    }
}
</script>
<style scoped lang="less">
    .listContent{
        position: relative
    }
    .tbList{
        width: 100%;
        background-color: #fff;
        margin-top: 10px;
        border: 1px solid #DDDDDD;
        height: 340px;
        overflow: auto;
    }
    .table-container{
        width: auto
    }
    .table-header{
        min-width: 40px;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #DDDDDD;
        border-right: 1px solid #DDDDDD;
        display: inline-block;
        vertical-align: middle;
    }
</style>