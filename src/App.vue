<template>
  <div id="app">
    <!--<img src="./assets/logo.png">
    <router-view/>-->
      <indexnav v-if="isRouterAlive"></indexnav>
  </div>
</template>

<script>
import indexnav from './page/indexnav/indexnav';
import './components/css/commond.css';
export default {
    name: 'App',
    components:{
        indexnav
    },
    data() {
        return {
            isRouterAlive:true,                 //true or false 来控制刷新当前页面
        }
    }, 
    provide(){
        return {
            reload:this.reload
        }
    },
    methods:{
        //路由刷新
        reload(){
            this.isRouterAlive = false;
            this.$nextTick(function(){
                this.isRouterAlive = true;
            });
            //恢复更多条件
            this.$store.commit('recoverySearch');
        },
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    height: 100%;
}
*{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration:none
}
html,
body {
    min-width: 1200px;
    max-width: 1920px;
    margin: auto;
    height: 100%;
}
    button,input:focus{
        outline:0;
    } 
    
</style>
