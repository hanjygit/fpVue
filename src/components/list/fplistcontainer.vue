<!--子组件-->
<template>
    <div class="listContent">
        <!--<slot name="listContent"></slot>-->
        <div class="tableList">
            <div class="th-container" ref="thwidth">
                <div v-for="(item, index) in listHeader" :key="index" class="table-header" :style="{width: item.width}">{{item.label}}</div>
            </div>
            <div class="tb-container" ref="thwidth">
                <div v-for="(item, index) in listHeader" :key="index" class="table-body" :style="{width: item.width}" v-if="index==0">单选框</div>
                <div v-for="(item, index) in listHeader" :key="index" class="table-body" :style="{width: item.width}" v-if="index==1">{{index}}</div>
                <div v-for="(item, index) in listHeader" :key="index" class="table-body" :style="{width: item.width}" v-if="index>1">{{item.column}}</div>
            </div>
            <div class="tb-container" ref="thwidth">
                <div v-for="(item, index) in listHeader" :key="index" class="table-body" :style="{width: item.width}" v-if="index==0">单选框</div>
                <div v-for="(item, index) in listHeader" :key="index" class="table-body" :style="{width: item.width}" v-if="index==1">{{index}}</div>
                <div v-for="(item, index) in listHeader" :key="index" class="table-body" :style="{width: item.width}" v-if="index>1">{{item.column}}</div>
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
    .tableList{
        width: auto;
        min-width: 100%;
        height: auto;
        min-height: 310px;
        background-color: #fff;
        margin-top: 10px;
        border: 1px solid #DDDDDD;
        overflow: auto;
        white-space: nowrap;
    }
    .th-container{
        width: auto;
        height: 40px;
        line-height: 40px;
        font-size: 0;
        text-align: center;
        color: #828995;
    }
    .table-header{
        height: 100%;
        border-bottom: 1px solid #f2f3f5;
        border-right: 1px solid #DDDDDD;
        display: inline-block;
        vertical-align: middle;
        font-size: 14px;
        background-color:#f2f3f5;
    }
    .tb-container{
        width: auto;
        height: 40px;
        line-height: 40px;
        font-size: 0;
        text-align: center;
        color: #495362;
    }
    .table-body{
        height: 100%;
        border-bottom: 1px solid #f2f3f5;
        border-right: 1px solid #DDDDDD;
        display: inline-block;
        vertical-align: middle;
        font-size: 14px;
    }
    .tb-container:nth-child(odd) .table-body{
        background-color:#f2f3f5;
    }
</style>