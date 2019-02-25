<template>
    <div class="create">
        create
        <fpdialog :dialogTitle="'红字信息表申请'" :dialogShow="ishzxxbsq" :closeDialog="closeDialog">
            <div slot="dialogContent">
                <form>
                    <div class="option-title">开具红字信息发票选择</div>
                    <input type="radio" name="sqlx" value="2" id="seller" class="application" v-model="dialogData.sqlx">
                    <span>销货方申请</span>
                    <div class="option-title">对应蓝票专用发票信息</div>
                    
                    <div class="search-item">
                        <div class="search-label">发票代码：</div>
                        <input class="search-input fsearch-input" type="text" name="fpDm" value="" v-model="dialogData.fpDm">
                        <div class="search-label">发票号码：</div>
                        <input class="search-input" type="text" name="fpHm" value="" v-model="dialogData.fpHm">
                    </div>
                </form>
            </div>
            <div class="button-box" slot="dialogBtn">
                <button class="bluebtn" @click="next">下一步</button>
            </div>
        </fpdialog>
    </div>
</template>

<script>
import fpdialog from '../../../../components/dialog/fpdialog.vue'
import hintdialog from '../../../../components/dialog/hintdialog.vue'
export default {
    name:'create',
    
    components:{
        fpdialog,
        hintdialog
    },
    data() {
        return {
            ishzxxbsq:true,
            dialogData:{
                sqlx:'2',
                fpDm:'',
                fpHm:''
            }
        }
    },
    modules: {
        
    },
    created:function(){
        this.ishzxxbsq=true;
    },
    methods:{
        //关闭弹窗
        closeDialog:function(){
            this.ishzxxbsq = false; 
        },
        next(){
            //this.ishzxxbsq = false; 
            console.log(this.dialogData)
        }
    },
}
</script>
<style scoped lang="less">
    .create{
        font-size: 14px;
    }
</style>