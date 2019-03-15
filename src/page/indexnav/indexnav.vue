<template>
    <div class="indexnavDiv">
        <div class="header">
            <div class="first_nav">
                <ul>
                    <li v-for="(item, index) in navdata_first" :key="index" @click="chooseFirstNav(item,index)" :class="nowFirstIndex == index?'isFirstNav':''">{{ item.name }} </li>
                </ul>
            </div>
            <div class="right_header">
                <ul>
                    <li class="role">管理员</li>
                    <li class="changePsw" @click="changePswDialog()">修改密码</li>
                    <li class="loginout" @click="loginout.isLoginout = true">退出</li>
                </ul>
            </div>
        </div>
        <div class="content" ><!--ref="content"-->
            <div class="leftPart" @click="routeClick">
                <div class="second_nav">
                    <ul>
                        <li v-for="(item, index) in navdata_second" :key="index" @click.capture="chooseSecondNav(item, index)" :class="nowSecondIndex == index?'isSecondNav':''">
                            <div v-if="item.children.length == 0">
                                <router-link class="second_navText" :class="nowSecondIndex == index?'isSecondNav':''" :to="item.url">
                                    {{ item.name }}
                                </router-link>
                            </div>
                            <div v-if="item.children.length != 0">
                                <div class="second_navText">{{ item.name }}</div>
                                <div class="third_nav">
                                    <ul v-if="nowSecondIndex == index">
                                        <li v-for="(_item, _index) in item.children" :key="_index" :class="nowThirdIndex == _index?'isThirdNav':''" @click.capture="chooseThirdNav(_item, _index)" >
                                            <router-link :to="_item.url">
                                                {{ _item.name }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="rightPart">
                <router-view/>
            </div>
        </div>
        
        <fpdialog :dialogTitle="'修改密码'" ref="changePassWordFrom" @confirmCD="confirmChangePsw" :closeDialog="closeDialog" :dialogShow="changePsw.isChangePsw">
            <div slot="dialogContent">
                <form>
                    <div class="form-item">
                        <div class="form-label">输入原密码：</div>
                        <input type="password" ref="oldPassword" class="form-input" v-model="changePsw.oldPassword">
                    </div>
                    <div class="form-item">
                        <div class="form-label">输入新密码：</div>
                        <input type="password" ref="newPassword" class="form-input" v-model="changePsw.newPassword">
                    </div>
                    <div class="form-item">
                        <div class="form-label">确认新密码：</div>
                        <input type="password" ref="confirmPsw" class="form-input" v-model="changePsw.confirmPsw">
                    </div>
                </form>
            </div>
            <div class="button-box" slot="dialogBtn">
                <button class="bluebtn" @click="confirmChangePsw">确认</button>
                <button class="bluebtn" @click="closeDialog">取消</button>
            </div>
        </fpdialog>
        
        <fpdialog :dialogTitle="'退出'" :closeDialog="closeDialog" :dialogShow="loginout.isLoginout">
            <div slot="dialogContent">
                <div class="hint-label">确认退出么？</div>
            </div>
            <div class="button-box" slot="dialogBtn">
                <button class="bluebtn" @click="confirmLogout">确认</button>
                <button class="bluebtn" @click="closeDialog">取消</button>
            </div>
        </fpdialog>
        
        <hintdialog :dialogTitle="isdialogTitle" :dialogShow="isdialogShow" :dialogStatus="isdialogStatus"></hintdialog>
    </div>
</template>

<script>
import data from 'common/js/commondata.js'
import fpdialog from 'components/dialog/fpdialog.vue'
import hintdialog from 'components/dialog/hintdialog.vue'
export default {
    name:'indexnav',
    inject: ['reload'],
    components:{
        fpdialog,
        hintdialog
    },
    data() {
        return {
            clientWidth:'',                    //页面高度
            navdata_first:[],                   //一级菜单数据
            navdata_second:[],                  //二级菜单数据
            navdata_third:[],                   //三级菜单数据
            nowFirstIndex:0,                    //当前一级菜单
            nowSecondIndex:0,                   //当前二级带单
            nowThirdIndex:0,                    //当前三级带单
            isdialogTitle:'',                   //弹窗标题
            isdialogStatus:'',                   //弹窗状态：成功或失败
            isdialogShow:false,                   //弹窗是否显示
            changePsw:{                         //修改密码
                oldPassword:'',
                newPassword:'',
                confirmPsw:'',
                isChangePsw:false,
            },
            loginout:{                          //退出
                isLoginout:false,
            },
            
        }
    },
    modules: {
        
    },
    created:function(){
        this.getNavData();
        this.getNav();
    },
    mounted:function(){
        this.clientWidth  = document.documentElement.clientWidth ;//获取浏览器可视区域高度
        let that = this;
        window.onresize = function(){
            this.clientWidth  =  document.documentElement.clientWidth ;
            if(that.$refs.content){
                that.$refs.content.style.width = clientWidth  - 200 + 'px';
            }
        }
    },
    watch:{
        clientWidth (){     //如果clientHeight 发生改变，这个函数就会运行
           this.changeFixed(this.clientWidth ) 
        }
    },
    methods:{
        changeFixed(clientWidth ){
            if(this.$refs.content){
              this.$refs.content.style.width = clientWidth  -200 + 'px';
            }
        },
        //获得菜单数据
        getNavData:function(){
            /*var params = {
                userId:JSON.parse(window.localStorage.getItem('userInfo')).id
            };
            this.$api.api.USERMENU(params).then(res=> {
                
            }).catch(res=> {
                // 执行某些操作
            })*/
            this.navdata_first = data.data.resourceList;
            this.navdata_second = this.navdata_first[0].children;
            this.nowFirstIndex = 0;
            if (this.$route.path === '/') {
                // route为空，找到一个默认有权限菜单
                this.$router.push(this.navdata_second[0].children[0].url)
            }
        },
        //选择一级菜单
        /*nextNav 下一级参数*/
        chooseFirstNav:function(item,index){
            this.navdata_second = item.children;
            this.nowFirstIndex = index;
            this.nowSecondIndex = 0;
            this.nowThirdIndex = 0;
            if(item.children[0].children && item.children[0].children.length>0){
                this.$router.push(item.children[0].children[0].url)
            }else{
                this.$router.push(item.children[0].url)
            }
        },
        //选择二级菜单
        /*nextNav 下一级参数*/
        chooseSecondNav:function(item, index){
            this.nowSecondIndex = index;
            this.nowThirdIndex = 0;
            if(item.children.length>0){
                this.navdata_third = item.children;
                this.$router.push(item.children[0].url)
            }else{
                this.$router.push(item.url)
            }
        },
        //选择三级菜单
        /*nextNav 下一级参数*/
        chooseThirdNav:function(item, index){
            this.nowThirdIndex = index;
            this.$router.push(item.url);
            this.reload();
            //this.$router.go(0);  
        },
        //用于刷新页面时 定位当前页面所在菜单
        getNav:function(){
            this.navdata_first.forEach((item,index) => {
                if(this.$route.path.indexOf(item.url)!=-1){
                    this.nowFirstIndex = index;
                    this.navdata_second = item.children.length > 0 ? item.children : '' ;
                }
            });
            if(this.navdata_second){
                this.navdata_second.forEach((item,index) => {
                    if(this.$route.path.indexOf(item.url) != -1){
                        this.nowSecondIndex = index;
                        return
                    }
                    if(this.$route.path.indexOf(item.url) == -1){
                        if(item.children.length > 0){
                            item.children.forEach((_item,_index) => {
                                if(this.$route.path.indexOf(_item.url) != -1){
                                    this.nowThirdIndex = _index;
                                    this.navdata_third = item.children.length > 0 ? item.children : '' ;
                                }
                            });
                        }
                    }
                });
            }
        },
        routeClick(){
            this.reload()  //冒泡刷新路由
        },
        //关闭弹窗
        closeDialog:function(){
            this.changePsw.isChangePsw = false;
            this.loginout.isLoginout = false; 
        },
        //提示信息弹窗处理
        hintDialog:function(status,title){
            this.isdialogTitle = title;                  //弹窗标题
            this.isdialogStatus = status;                //弹窗状态：成功或失败
            this.isdialogShow = true;                  //弹窗是否显示
            setTimeout(() => {
                      this.isdialogShow = false;
                },1000);
        },
        //修改密码弹窗
        changePswDialog:function(){
            this.changePsw.isChangePsw = true;
            //监听子组件关闭弹窗事件--清空input
            this.$on('closefpDialog', function() {
                this.changePsw.oldPassword='';
                this.changePsw.newPassword='';
                this.changePsw.confirmPsw='';
            })
        },
        //确认修改密码btn
        confirmChangePsw:function(){
            if(this.changePsw.newPassword != this.changePsw.confirmPsw){
                this.hintDialog('error','两次密码不一致');
                return
            }
            //请求结束关闭弹窗
            /*this.closeDialog();*/
        },
        //确认退出
        confirmLogout:function(){
            this.$router.push('/login');
        },
    }
}
</script>
<style scoped lang="less">
    .indexnavDiv{
        width: 100%;
        height: 100%;
        min-width: 1200px;
        position: relative;
    }
    .header{
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;
        width: 100%;
        height: 70px;
        background: #fff;
        .first_nav{
            width: 100%;
            height: 70px;
            ul{
                margin-left: 200px;
                li{
                    width:104px;
                    height: 70px;
                    line-height: 70px;
                    display: inline-block;
                    vertical-align: middle;
                    cursor: pointer;
                    text-align: center;
                } 
            }
            .isFirstNav{
                color: #4DA1FF;
            }
        }
        .right_header{
            width: 230px;
            position: absolute;
            right: 0;
            top: 28px;
            li{
                font-size: 14px;
                display: inline-block;
                vertical-align: middle;
                padding: 0 13px;
                color: #737E91;
                cursor: pointer;
            }
            .role,.changePsw{
                border-right: 1px solid #d9d9d9;
            }
        }
    }
    .content{
        height: 100%;
        position: absolute;
        top: 70px;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        background: #f3f3f3;
        font-size: 0;
        display: flex;
        .leftPart{
            width: 200px;
            height: 100%;
            overflow-y: auto;
            background: #212844;
            .second_nav{
                width: 100%;
                height: 100%;
                color: #fff;
                ul{
                    li{
                        width: 100%;
                        height: auto;
                        line-height: 54px;
                        color: #fff;
                        font-size: 14px;
                        box-sizing: border-box;
                        cursor: pointer;
                        .third_nav{
                            ul{
                                li{
                                    padding: 0;
                                    height: 40px;
                                    font-size: 13px;
                                    line-height: 24px;
                                    a{
                                        display: inline-block;
                                        padding: 8px 11px 8px 60px;
                                        color: #828995;
                                    }
                                }
                                li:hover{
                                    cursor: pointer;
                                }
                                .isThirdNav{
                                    background: #4DA1FF;
                                    a{
                                        color: #fff;
                                    }
                                }
                            }
                        }
                        .second_navText{
                            padding-left: 30px;
                        }
                        a{
                            color: #fff;
                        }
                    }
                    .isSecondNav{
                        color: #4DA1FF;
                    }
                }
            }
        }
        .rightPart{
            flex: 1;
            min-width: 1000px;
            height: 100%;
            font-size: 14px;
            margin: 20px;
            box-sizing: border-box;
            /*background: #ffffff;*/
        }
    }
   
</style>