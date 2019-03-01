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
        <div class="footerList" @click="sendpage">
            <div class="selectBox">
              <div class="selectBox_show" @click.stop="arrowDown">
                <i class="icon icon_arrowDown"></i>
                <p>{{pageVal}}</p>
                <!--<input name="unit" v-model="pageVal">-->
              </div>
              <div class="selectBox_list" v-show="isShowSelect">
                <div class="selectBox_listLi" v-for="(item, index) in pageList"
                     @click="select(item, index)" :class="pageVal==item.value?'selectBox_listfocus':''">{{item.value}}
                </div>
              </div>
            </div>

            <!--<div class="page-select  ui-select ui-input ">
                <div class="ui-select-text ui-input-text page-select-text " style="width: 25px; height: 16px;">20</div>
                <input value="20" readonly="" placeholder="">
            </div>-->
            <!--<select>
                <option value="1">1</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="20">50</option>
                <option value="20">100</option>
            </select>-->
            <!--<div class="line"></div>
            <div class="page-btn   page-btn-disabled  ui-disabled"><div class="first"></div></div>
            <div class="page-btn   page-btn-disabled  ui-disabled"><div class="prev"></div></div>
            <div class="line"></div>
            <div class="page-go">第<div class="ui-input ui-number ui-text"><input value="1"></div>共0页</div>
            <div class="line"></div>
            <div class="page-btn   page-btn-disabled  ui-disabled"><div class="next"></div></div>
            <div class="page-btn   page-btn-disabled  ui-disabled"><div class="last"></div></div>
            <div class="line"></div>
            <div class="page-btn  "><div class="refresh"></div></div>
            <div class="page-info">显示1到20，共0记录</div>-->
        </div>
        
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
            //翻页选择页面
            isShowSelect: false,
            pageList: [
                {key: 1, value: "1"},
                {key: 2, value: "5"},
                {key: 3, value: "10"},
                {key: 4, value: "20"},
                {key: 5, value: "50"},
                {key: 6, value: "100"},
            ],
            pageVal:'1',
            unitModel:''
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
    },
    methods: {
        arrowDown() {
            this.isShowSelect = !this.isShowSelect;
        },
        select(item, index) {
            this.isShowSelect = false;
            this.pageVal = item.value;
        },
        sendpage(){
            this.$emit('pageCallBack', this.pageVal);
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
    .footerList{
        margin-top: 10px;
        font-size: 0;
        .selectBox{
            display: inline-block;
            vertical-align: middle;
            width: 50px;
            font-size: 14px;
            margin: 0 6px;
            .selectBox_show{
                p{
                    padding-left: 5px;
                    width: 50px;
                    border: 1px solid #E0E0E0;
                    border-radius: 4px;
                }
            }
            .selectBox_list{
                width: 50px;
                height: auto;
                position: absolute;
                top: 225px;
                border: 1px solid #d7d8d9;
                background: #fff;
                .selectBox_listLi{
                    height: 16px;
                    line-height: 16px;
                    font-size: 14px;
                    text-indent: 5px;
                    cursor: pointer;
                }
                .selectBox_listfocus{
                    color: #4DA1FF;
                }
                .selectBox_listLi:hover{
                    background-color: #4DA1FF;
                    color: #fff;
                }
            }
        }
    }
</style>