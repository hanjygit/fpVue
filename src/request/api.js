/**
  * api模块接口列表
  */

import axios from './http'; // 导入http中创建的axios实例
import URLS from './urlconfig'; // 导入接口域名列表
import qs from 'qs'; // 根据需求是否导入qs模块


const api = {
    //登录 post提交
    LOGIN (params) {
        return axios.post(`${URLS.RBAC.LOGIN}`, params);
    },
    //用户-菜单 GET
    USERMENU (params) {
        return axios.get(`${URLS.RBAC.MENU_GET_USER}`, {params: params});
    },
    //红字信息表管理查询列表 post
    HZXXB_GL_CX (params) {
        return axios.post(`${URLS.API.HZXXB_GL_CX}`, params);
    },
    // 其他接口…………
}

export default api;
