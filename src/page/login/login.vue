<template>
    <div class="login-bg-stage">
        <img class="login_bg" src="./login-bg-market.png" alt="">
        <img class="login_welcome" src="./welcome.png" alt="">
        <div class="bg-small">
          <div class="login-wrapper">
            <div class="login-title clearfix">
              <img src="./login-logo.png" class="loginTitle">
            </div>
            <form name="loginForm" class="form clearfix loginformstyle">
              <div class="input-item inp-wrapper">
                <img src="./login-user.png" class="loginUser">
                <div class="mobile clearfix ui-input ui-text">
                  <input v-model="username" name="mobile" placeholder="请输入用户名" value="" class="phone-num" id="userclick">
                </div>
              </div>
              <div class="input-item inp-wrapper">
                <img src="./login-password.png" class="loginUser">
                <div class=" password clearfix ui-input ui-text">
                  <input v-model="password" type="password" placeholder="请输入密码" value="" class="identify-code" id="passwordclick">
                </div>
              </div>
              <div class="icon-error" id="error" v-show="loginError">{{errorMessage}}</div>
              <input @click="login()" value="登录" type="button" class="btn-login">
            </form>
          </div>
        </div>
        <hintdialog :dialogTitle="isdialogTitle" :dialogShow="isdialogShow" :dialogStatus="isdialogStatus"></hintdialog>
    </div>
</template>

<script>
import Vue from 'vue';
import md5 from 'js-md5';
import hintdialog from 'components/dialog/hintdialog.vue'
import {hintFunction} from 'common/js/hint.js'
import {setCookie, getCookie,delCookie} from 'common/js/cookie';

export default {
    name:'login',
    components:{
        hintdialog
    },
    data() {
        return {
            username: '',
            password: '',
            loginError: false,
            errorMessage: '',
            isdialogTitle:'',                   //弹窗标题
            isdialogStatus:'',                   //弹窗状态：成功或失败
            isdialogShow:false,                   //弹窗是否显示
        }
    },
    created:function(){
        this.clearCookie();
    },
    methods:{
        clearCookie(){
            delCookie('GH_token');
        },
        login(){
          //  this.$router.push('/');
            let regName = /[a-zA-Z0-9]{1,30}/g;
            if (!regName.test(this.username)) {
              this.loginError = true;
              this.errorMessage = '*请输入1-30位的用户名';
              return false;
            } else if (this.password.length === 0) {
              this.loginError = true;
              this.errorMessage = '*请输入登录密码';
              return false;
            } else {
                var data = {
                    'userName': this.username,
                    'password': md5(this.password)
                };
                this.$api.api.LOGIN(data)
                    .then(res=> {
                    // 执行某些操作
                    if (res instanceof Object) {
                        setCookie('GH_token', res.token);
                        window.localStorage.setItem('userInfo', JSON.stringify(res.user));
                        Vue.prototype.instance.defaults.headers.common['x-access-token'] = getCookie('GH_token') || '';
                        this.loginError = false;
                        this.errorMessage = '';
                        this.$router.push('/');
                    }
                }).catch(res=> {
                    // 执行某些操作
                })
            }
        }
    }
}
</script>
<style scoped lang="less">
    .ui-text {
        width: auto !important;
        height: auto !important;
    }
    .ui-text input{
        background-color: #F5F5F5 !important;
        color: #333 !important;
        font-size: 16px !important;
        line-height: 46px;
        padding: 0!important;
        width: 100%;
        height: 100%;
    }
    .ui-input {
        display: block !important;
    }

    .ui-button{
        padding: 0!important;
    }

  .ui-placeholder {
    height: 100%;
    line-height: 46px;
    vertical-align: middle;
  }
  /*后台登陆页*/
  .login-bg-stage {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .login-bg-stage .login_bg{
    width: 100%;
    height: 100%;
    display: block;
  }
  .login_welcome{
    width: 29%;
    position: absolute;
    top: 62%;
    left: 8%;
  }
  .bg-small{
    width:390px;
    height:400px;
    position: absolute;
    top:50%;
    right: 8%;
    margin-top: -200px;
  }
  .login-wrapper {
    position: relative;
    width:100%;
    height:100%;
    box-sizing: border-box;
    background: #fff;
    border-radius:10px;
  }
  .icon-error {
    position: absolute;
    left: 25px;
    top: 115px;
    color: #f95e08;
    margin-top: 5px;
    font-size: 14px;
  }

  .login-title {
    color: #353A5D;
    font-size: 22px;
    text-align: center;
    font-weight: bold;
    position: relative;
    top: 38px;
    height: 56px;
  }

  .loginTitle{
    height: 100%;
  }
  .input-item {
    position: relative;
    width: 340px;
    height: 46px;
    border-radius: 6px;
    background-color: #F5F5F5;
    margin: 20px auto 0;
  }
  .input-item .ui-text {
    width: 80% !important;
    float: left;
    border: 0px !important;
    height: 46px!important;
    background-color: #F5F5F5;
  }

  .input-item.password {
    margin-bottom: 5px;
  }
  .inp-wrapper input {
    vertical-align: middle;
    border: 0px !important;
  }

  .inp-wrapper input::placeholder {
    color: #C0CCDA;
  }
  .login-wrapper .btn-login {
    display: block;
    background: #ED1C24;
    border-radius: 6px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    -ms-border-radius: 6px;
    -o-border-radius: 6px;
    width: 340px;
    height: 46px;
    line-height: 46px;
    font-size: 16px;
    color: #ffffff;
    cursor: pointer;
    text-align: center;
    border: none;
    margin: 58px auto 0;
  }
  .loginUser{
    width: 16px;
    height: 18px;
    float: left;
    margin: 14px 10px 14px 18px;
  }
  .getCode {
    width: 80px;
    font-size: 14px;
    color: #3076FC;
    cursor: pointer;
    border: none;
    background: #fff;
  }

  .getCode-wrap {
    display: inline-block;
    position: absolute;
    top: 10px;
    right: 10px;
    padding-left: 10px;
    margin: 0px 0px 10px;
    border-left: 1px solid #acbaca;
  }
  .loginformstyle{
    top: 50px;
    position: relative;
  }
  #ucimg,#pcimg{
    display: none;
  }
</style>