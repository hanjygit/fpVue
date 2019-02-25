import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'

import HelloWorld from '@/components/HelloWorld'
import indexnav from '@/page/indexnav/indexnav'
import create from '@/page/invoice/hz/create/create'
import list from '@/page/invoice/hz/list/list'
import qrcode from '@/page/invoice/qrcode/qrcode'
import user from '@/page/system/user/user'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
    mode: 'history',
    routes: [
        {
          path: '/',
          name: 'list',
          component:list
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
})
