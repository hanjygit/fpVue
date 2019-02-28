<!--子组件-->
<template>
    <div class="listContent">
        <!--<slot name="listContent"></slot>-->
        <div class="tableList">
            <div class="th-container">
                <div class="table-header" style="width:40px"></div>
                <div class="table-header" style="width:40px">序号</div>
                <div v-for="(item, index) in listHeader" :key="index" class="table-header" :style="{width: item.width}">{{item.label}}</div>
            </div>
            <div class="tb-container" v-for="(item, index) in listTable" :key="index">
                <div class="table-body" style="width:40px">单选框</div>
                <div class="table-body" style="width:40px"></div>
                <div class="table-body" v-for="(_item, _index) in listHeader" :style="{width: _item.width}">
                <!--转换数据-->
                <div v-if="_item.needTransform">{{dataConversion(item[_item.column], _item.transformData)}}</div>
                <!--转换时间-->
                <div v-if="_item.needDate">{{dateConversion(item[_item.column])}}</div>
                <!--不转换 直接显示-->
                <div v-if="_item.column && !_item.needTransform && !_item.needDate">{{item[_item.column]}}</div>
                <!--操作：点击操作事件-->
                <div v-if="_item.operates" v-for="itemBtn in _item.operates" class="oprateBtn" @click="itemBtn.clickAction(item)">{{itemBtn.label}}</div>
                </div>
            </div>
        </div>
        <div class="footerList"></div>
    </div>
</template>

<script>
    import {dataConversion} from 'globaldata/globaldata';
    import {dateConversion} from 'globaldata/globaldata';
export default {
    name:'fplistcontainer',
    props: ['thData','tbData'],
    data() {
        return {
            listHeader:'',
            listTable:'',
            dataConversion:dataConversion,
            dateConversion:dateConversion,
        }
    },
    modules: {
        
    },
    created:function(){
    },
    mounted:function(){
        this.listHeader = this.thData;
    },
    watch:{
        tbData: {  
            handler(newValue, oldValue) {  
                for (let i = 0; i < newValue.length; i++) {  
                    if (oldValue[i] != newValue[i]) {  
                        this.listTable = newValue;
                    }  
                }
            },  
            deep: true
        } 
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
    .oprateBtn{
        display: inline-block;
        vertical-align: middle;
        height: 24px;
        line-height: 24px;
        padding: 2px 7px;
        margin: 0 0 0 10px;
        font-size: 13px;
        background: #4DA1FF;
        border-radius: 4px;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        -ms-border-radius: 4px;
        -o-border-radius: 4px;
        color: #FFF;
        cursor: pointer;
    }
</style>