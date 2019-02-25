/**
  * api模块接口列表
  */

import axios from './http'; // 导入http中创建的axios实例
import URLS from './urlconfig'; // 导入接口域名列表
import qs from 'qs'; // 根据需求是否导入qs模块


const api = {
    // 新闻列表
    /*HZXXB_GL_CX (params) {
        console.log(URLS.API.HZXXB_GL_CX)
        return axios.get(`${URLS.API.HZXXB_GL_CX}`,{params});
    },*/
    // 新闻详情,演示
    /*articleDetail (id, params) {
        return axios.get(`${base.sq}/topic/${id}`, {
            params: params
        });
    },*/
    // post提交
    HZXXB_GL_CX (params) {
        return axios.post(`${URLS.API.HZXXB_GL_CX}`, qs.stringify(params));
    },
    // post提交
    LOGIN (params) {
        return axios.post(`${URLS.RBAC.LOGIN}`, params);
    }
    // 其他接口…………
}

export default api;
