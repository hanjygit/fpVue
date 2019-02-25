<!--子组件-->
<template>
   <!-- v-if="this.$store.getters.getD"-->
  
    <div class="dialogCommon" v-if="this.dialogShow">
        <div class="dialog">
            <div class="title">{{this.dialogTitle}}</div>
            <img src="../../assets/common/close_dialog.png" class="close_dialog" @click="closefpDialog">
            <div class="dialogContent">
                <slot name="dialogContent"></slot>
                <slot name="dialogBtn"></slot>
            </div>
        </div>
        <div class="mask"></div>
    </div>
</template>

<script>
export default {
    name:'fpdialog',
    props: ['dialogTitle','dialogShow','closeDialog'],
    data() {
        return {
            
        }
    },
    modules: {
        
    },
    created:function(){
    },
    methods:{
        closefpDialog:function(){
            this.closeDialog();

            /*this.$store.commit('closeD');*/
            //让父组件监听到子组件的关闭弹窗事件
            this.$parent.$emit('closefpDialog');
        },
        confirmCD:function(){
            //让父组件监听到子组件的关闭弹窗事件
            this.$emit('confirmCD');
        },
    }
}
</script>
<style scoped lang="less">
    .dialogCommon{
        position: relative;
    }
    .mask{
        position: fixed;
        width:100%;
        height: 100%;
        z-index: 32008;
        background-color: rgba(0,0,0,0.5);
        top: 0;
        left: 0;
    }
    .dialog{
        position: fixed;
        top:50%;
        left: 50%;
        background-color: #fff;
        border-radius: 4px;
        margin-top: -100px;
        margin-left: -250px;
        z-index: 32009;
        .title{
            width: 100%;
            height: 40px;
            line-height: 40px;
            font-size: 16px;
            font-family: MicrosoftYaHei-Bold;
            font-weight: 700;
            color: #4DA1FF;
            background-color: #F7F7F7;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            padding-left: 20px;
            box-sizing: border-box;
        }
        .close_dialog{
            position: absolute;
            top:13px;
            right: 25px;
            cursor: pointer;
        }
        .dialogContent{
            padding: 20px;
            .form-item{            
                font-size: 0;
                padding: 0 0 26px;
                .form-label{
                    display: inline-block;
                    vertical-align: middle;
                    width: 112px;
                    height: 30px;
                    line-height: 30px;
                    font-size: 14px;
                    text-align: right;
                    margin-right: 10px;
                    color: #666;
                }
                .form-input{
                    display: inline-block;
                    vertical-align: middle;
                    width:135px; 
                    height: 30px;
                    font-size: 14px;
                    line-height: 30px;
                    border: 1px solid #E0E0E0;
                    border-radius: 4px;
                    box-sizing: border-box;
                    padding-left: 5px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
            .hint-label{
                font-size: 14px;
                color: #666;
                margin-bottom: 20px;
            }
            .option-title{
                height: 40px;
                font-size: 15px;
                font-weight: bold;
                line-height: 40px;
            }
            .search-item{
                font-size: 0;
                padding-bottom: 20px;
                .search-label{
                    display: inline-block;
                    vertical-align: middle;
                    min-width: 70px;
                    height: 30px;
                    line-height: 30px;
                    font-size: 14px;
                    text-align: right;
                    color: #666;
                }
                .search-input{
                    display: inline-block;
                    vertical-align: middle;
                    width:135px; 
                    height: 30px;
                    font-size: 14px;
                    line-height: 30px;
                    border: 1px solid #E0E0E0;
                    border-radius: 4px;
                    box-sizing: border-box;
                    padding-left: 5px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .fsearch-input{
                    margin-right: 10px;
                }
            }
        }
        .button-box{
            text-align: center;
        }
    }
</style>