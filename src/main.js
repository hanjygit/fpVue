// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'   // 导入路由文件
import store from './store'     // 导入vuex文件
import api from './request/index'         // 导入api接口

Vue.config.productionTip = false
Vue.prototype.$api = api; // 将api挂载到vue的原型上

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,  
    store,
    components: { App },
    template: '<App/>'
})
