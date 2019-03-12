import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'

import login from '@/page/login/login'
import indexnav from '@/page/indexnav/indexnav'
import create from '@/page/invoice/hz/create/create'
import piaomian from '@/page/invoice/piaomian/piaomian'
import list from '@/page/invoice/hz/list/list'
import qrcode from '@/page/invoice/qrcode/qrcode'
import user from '@/page/system/user/user'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
    mode: 'history',
    routes: [
        {
          path: '/login',
          name: '登录',
          component: login,
          /*hidden: true*/
        },
        {
            path: '/',
            name: 'indexnav',
            component:indexnav,
            children: [
                {
                  path: '/invoice/piaomian',
                  name: 'piaomian',
                  component:piaomian
                },
                {
                  path: '/invoice/hz/list',
                  name: 'list',
                  component:list
                },
                {
                  path: '/invoice/hz/create',
                  name: 'create',
                  component:create
                },
                {
                  path: '/invoice/qrcode',
                  name: 'qrcode',
                  component:qrcode
                },
                {
                  path: '/system/user',
                  name: 'user',
                  component:user
                }
            ]
        },
        
    ]
})
