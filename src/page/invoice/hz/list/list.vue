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
            <fplistcontainer :thData="listTh" :tbData="listtbData" @pageCallBack="pageList">
                <!--<ul slot="listContent" class="table-container">
                    <li v-for="(item, index) in this.listHeader" :key="index" class="table-header" ref="tableHeader"  :style="{width: item.width}">{{item.label}}</li>
                </ul>-->
            </fplistcontainer>
        </div>
    </div>
</template>

<script>
// import listdata from '../list/list.js'
import fpsearch from 'components/list/fpsearch.vue'
import fplistbtn from 'components/list/fplistBtn.vue'
import fplistcontainer from 'components/list/fplistcontainer.vue'
import globaldata from 'globaldata/globaldata';
//import { HZXXB_GL_CX } from '../../../../request/api';// 导入我们的api接口

export default {
    name:'list',
    components:{
        fpsearch,
        fplistbtn,
        fplistcontainer
    },
    data() {
        let _this = this;
        return {
            isgetList:false,
            searchParm: {
                /*startTime: this.formartDate(),
                endTime: this.formartDate(),*/
                startTime: '',
                endTime: "",
                currentPage: '1',
                pageSize: '20',
                ghdwmc: '',
                clzt: '',
                xhdwmc: '',
                xxbbh: '',
            },
            //表头等信息
            listTh:[
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
                    // 是否需要转换数据
                    needTransform: true,
                    // 转换数据
                    transformData: globaldata.globaldata.XXBZT,
                },
                {
                    label: "填开日期",
                    column: "tkrq",
                    align: "left",
                    width: "150px",
                    // 是否需要转换时间
                    needDate: true,
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
                        clickAction(invoice){
                            var paramList ={};
                            paramList.fpDm = invoice.yfpdm;
                            paramList.fpHm = invoice.yfphm;
                            console.log(paramList)
                            /*invoice.backfillType = 'hzxxb';
                            var checkid = invoice.id;
                            ecui.esr.request('data@JSON ' + URLS.API.HZXXB_GL_CK + '?id='+checkid, function () {
                                var data = ecui.esr.getData('data');
                                    data.tkrq = new Date(Number(data.tkrq)).pattern('yyyy-MM-dd');
                                var dialog = fapiao.initDialog(ecui.$('dialog2Container'), 'list.hzxxbckDialog',{
                                    buttonShow:false,
                                    addType:'addHZ'
                                });
                                dialog.showModal();
                                var form1 = document.forms.hzxxckForm;
                                fapiao.backfillDtata.init(data, form1, paramList, 'hzxxbGL',false);
                            });*/
                        }
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
                        isShow:true,
                        clickAction: function (invoice) {
                            //console.log(invoice.id)
                            _this.searchQuery();
                            //this.searchQuery();
                            /*ecui.confirm({'title': '删除', 'content': '确定要删除该数据吗'}, function () {
                                ecui.esr.request('data@JSON ' + URLS.API.HZXXB_GL_DELALL + '?ids=' + invoice.id, function () {
                                    var data = ecui.esr.getData('data');
                                    if (data instanceof Object) {
                                        fapiao.showHint('success', '删除成功');
                                        _this.reload();
                                    }
                                });
                            });*/
                        }
                    }]
                }
            ],
            //查询list信息
            listtbData:[],
            fhlistdata: {
                "code": "0000",
                "data": {
                    "count": 1,
                    "currentPage": 1,
                    "list": [
                        {
                            "clzt": 0,
                            "flag": null,
                            "ghdwmc": "123",
                            "ghdwsbh": "123",
                            "hjje": "-94.34",
                            "hjse": "-5.66",
                            "id": "774AFEB655E245789B870C3E271CCFD8",
                            "kpzddm": "123456",
                            "lines": [],
                            "lxfs": "158965587511",
                            "nsrsbh": "1101011234567890000Q",
                            "returncode": "",
                            "returnmsg": "",
                            "sfdk": null,
                            "sqdh": "",
                            "sqjgmc": "顺丰快递公司",
                            "sqlx": 2,
                            "sqly": "",
                            "sqrmc": "管理员",
                            "tkrid": 1,
                            "tkrq": 1548728252000,
                            "xhdwmc": "顺丰快递公司",
                            "xhdwsbh": "1101011234567890000Q",
                            "xxbbh": "",
                            "yfpdm": "123123",
                            "yfphm": "123123",
                            "ywlx": 0,
                            "zdbz": null
                        }
                    ],
                    "pageSize": 20
                },
                "message": "返回数据成功"
            }
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
            this.listtbData = this.fhlistdata.data.list;
            /*let _this = this;
            this.$api.api.HZXXB_GL_CX(this.searchParm)
                .then(res=> {
                // 执行某些操作
                if (res instanceof Object) {
                    
                }
            }).catch(res=> {
                // 执行某些操作
            })*/
        },
        pageList:function(msg){
            console.log(msg)
        }
    },
}
</script>
<style scoped lang="less">
</style>