/**
  * 接口配置
  */
const URLS = {};
URLS.RBAC_BASE = "/rbac";
URLS.API_BASE = "/api";
URLS.TAX_BASE = "/tax";
URLS.VAT_BASE = "/vat-web";

// 系统管理
URLS.RBAC = {
    DZDZK_GET_ALL_NSRSBH: URLS.RBAC_BASE + "/",
};

// 销项
URLS.API = {
    MAKE_QRCODE: URLS.API_BASE + "/" //POST 生成二维码
};

export default URLS;