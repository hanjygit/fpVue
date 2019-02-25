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
            <fplistcontainer :listData="listHeader">
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
            listHeader:[],
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