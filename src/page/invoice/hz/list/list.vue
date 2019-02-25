<template>
    <div class="list">
        <fpsearch>
            <div slot="searchContent">
                <form>
                    <div class="search-item">
                        <div class="search-label">购买名称：</div>
                        <input ref="oldPassword" class="search-input" v-model="searchParm.ghdwmc">
                    </div>
                    <div class="search-item">
                        <div class="search-label">填开日期：</div>
                        <input ref="newPassword" class="search-input" >
                    </div>
                    <div class="moreSearch" v-if="this.$store.getters.getSearch">
                        <div class="search-item">
                            <div class="search-label">信息表编码：</div>
                            <input ref="newPassword" class="search-input" v-model="searchParm.xxbbh">
                        </div>
                        <div class="search-item">
                            <div class="search-label">销方单位名称：</div>
                            <input ref="newPassword" class="search-input" v-model="searchParm.xhdwmc">
                        </div>
                        <div class="search-item">
                            <div class="search-label">信息表状态：</div>
                            <input ref="newPassword" class="search-input" v-model="searchParm.clzt">
                        </div>
                    </div>
                </form>
            </div>
            <div slot="searchQueryBtn" class="searchQueryBtn">
                <button class="bluebtn" @click="searchQuery">查询</button>
            </div>
        </fpsearch>
        <div class="fplist">
            <!--<fplist>
                <div slot="listBtn" class="listBtn">
                    <button class="whitebtn"> <img src="../../../../assets/invoice/sc.png">批量删除</button>
                </div>
                <div slot="listContainer">555</div>
            </fplist>-->
            <fplistbtn>
                <div slot="listBtn" class="listBtn">
                    <button class="whitebtn"> <img src="../../../../assets/invoice/sc.png">批量删除</button>
                </div>
            </fplistbtn>
            <fplistcontainer :thData="listTh">
                <!--<ul slot="listContent" class="table-container">
                    <li v-for="(item, index) in this.listHeader" :key="index" class="table-header" ref="tableHeader"  :style="{width: item.width}">{{item.label}}</li>
                </ul>-->
            </fplistcontainer>
        </div>
    </div>
</template>

<script>
// import listdata from '../list/list.js'
import fpsearch from '../../../../components/list/fpsearch.vue'
import fplistbtn from '../../../../components/list/fplistBtn.vue'
import fplistcontainer from '../../../../components/list/fplistcontainer.vue'
//import { HZXXB_GL_CX } from '../../../../request/api';// 导入我们的api接口

export default {
    name:'list',
    components:{
        fpsearch,
        fplistbtn,
        fplistcontainer
    },
    data() {
        return {
            searchParm: {
                /*startTime: this.formartDate(),
                endTime: this.formartDate(),*/
                currentPage: '1',
                pageSize: '20',
                ghdwmc: '',
                clzt: '',
                xhdwmc: '',
                xxbbh: '',
            },
            listTh:[
                {
                    label: '',
                    column: '',
                    width: "40px"
                }, 
                {
                    label: "序号",
                    column: "",
                    width: "40px"
                }, 
                {
                    label: "红字信息表申请单号",
                    column: "sqdh",
                    width: "200px"
                }, 
                {
                    label: "红字信息表编号",
                    column: "xxbbh",
                    width: "200px"
                }, 
                {
                    label: "信息表状态",
                    column: "clzt",
                    align: "left",
                    width: "160px",
                    /*custom: function (item) {
                        return fapiao.baseInfoMap["XXBZT"][item.clzt] || '--';
                    }*/
                },
                {
                    label: "填开日期",
                    column: "tkrq",
                    align: "left",
                    width: "150px",
                    /*custom: function (item) {
                        return item.tkrq ? new Date(Number(item.tkrq)).pattern('yyyy-MM-dd') : '';
                    }*/
                }, 
                {
                    label: "发票代码",
                    column: "yfpdm",
                    width: "120px"
                }, 
                {
                    label: "发票号码",
                    column: "yfphm",
                    width: "120px"
                }, 
                {
                    label: "购方名称",
                    column: "ghdwmc",
                    width: "150px"
                }, 
                {
                    label: "金额",
                    column: "hjje",
                    width: "100px",
                    /*custom: function (item) {
                        return fapiao.formatMoney(item.hjje);
                    }*/
                }, 
                {
                    label: "税额",
                    column: "hjse",
                    width: "90px",
                    /*custom: function (item) {
                        return fapiao.formatMoney(item.hjse);
                    }*/
                }, 
                {
                    label: "销方名称",
                    column: "xhdwmc",
                    width: "160px"
                }, 
                {
                    label: "操作",
                    width: "250px",
                    operates: [{
                        label: "查看",
                        name: "preView",
                        isShow: true,
                    }, {
                        label: "申请",
                        name: "preSQ",
                        isShow: true,
                    },
                    {
                        label: "同步结果",
                        name: "preSH",
                        isShow: true,
                    },
                    {
                        label: "删除",
                        name: "preDelete",
                        isShow:true
                    }]
                }
            ],
            //tdwidth:40,
        }
    },
    created:function(){
        //this.getListHeader();
    },
    methods:{
        /*getListHeader(){
            this.listHeader = listdata.data.columns;
        },*/
        /*formartDate:function(){
            let date = new Date();
            let Y = date.getFullYear() ;
            let M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1)  : date.getMonth() + 1;
            let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
            let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
            let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
            let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
            return Y + M + D ;
        },*/
        searchQuery:function(){
            // 调用api接口，并且提供了两个参数    
            /*this.$api.api.HZXXB_GL_CX(this.searchParm)
                .then(res=> {
                // 执行某些操作
            }).catch(res=> {
                // 执行某些操作
            })*/
        },
    },
}
</script>
<style scoped lang="less">
</style>