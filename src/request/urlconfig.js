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
    DZDZK_GET_ALL_NSRSBH: URLS.RBAC_BASE + "/mvc/user/getNsrsbhList",

    LOGIN: URLS.RBAC_BASE + "/mvc/login",
    LOGIN_OUT: URLS.RBAC_BASE + "/mvc/logout",
    MESSAGE: URLS.RBAC_BASE + "/mvc/alertMessage/countUnread",   //未读消息

    // 开具
    GM_GET_LIST: URLS.RBAC_BASE + "/mvc/customer/getList", //POST 查询客户信息列表
    SPMC_GET_LIST: URLS.RBAC_BASE + "/mvc/commodityInfo/getList", //POST 查询商品信息列表

    // 机构管理scp  -r ./output-fapiao-GH/*  root@192.168.7.76:/opt/server/nginx/html
    ORGDEPT_GET_LIST: URLS.RBAC_BASE + "/mvc/organization/getList", //GET/POST 查询机构部门树，参数 list=true 时，返回集合，否则返回树
    ORG_GET_LIST: URLS.RBAC_BASE + "/mvc/organization/getJgList", //GET/POST 查询机构树，参数 list=true 时，返回集合，否则返回树
    ORG_LIST_ALL: URLS.RBAC_BASE + "/mvc/organization/getJgAllList", //GET/POST 查询机构列表
    ORG_ADD: URLS.RBAC_BASE + "/mvc/organization/add", //POST 添加组织
    ORG_MODIFY: URLS.RBAC_BASE + "/mvc/organization/update", //POST 更新组织
    ORG_DELETE: URLS.RBAC_BASE + "/mvc/organization/delete", //POST 删除组织
    ORG_UPLOAD: URLS.RBAC_BASE + "/mvc/organization/uploadExcel", //POST 批量添加部门，excel文件上传
    ORG_GET_ID: URLS.RBAC_BASE + "/mvc/organization/getInfo", //GET 查询组织信息
    ORG_DELETE_ORG: URLS.RBAC_BASE + "/mvc/organization/delete", //GET 查询组织信息
    ORG_DELETE_DEPT: URLS.RBAC_BASE + "/mvc/depart/delete", //GET 查询组织信息
    ORG_UPLOAD_EXCEL: URLS.RBAC_BASE + "/mvc/organization/uploadExcel", //GET 查询组织信息
    ORG_AUTH_LIST: URLS.RBAC_BASE + "/mvc/organization/getJgAuthList", //GET 查询有权限的机构,参数 list=true 时，返回集合，否则返回树
    ORG_AUTH_DEPRT: URLS.RBAC_BASE + "/mvc/organization/getBmAuthListByJgId", //GET 查询当前用户有权限部门
    DEPT_LIST_ORG: URLS.RBAC_BASE + "/mvc/organization/getBmListByJgId", //GET 查询机构下的部门或责任中心zrzxd=true时查询责任中心

    //用户管理
    USER_ADD: URLS.RBAC_BASE + "/mvc/user/add", // POST 添加用户
    USER_DELETE: URLS.RBAC_BASE + "/mvc/user/delete", // POST 删除用户
    USER_MODIFY: URLS.RBAC_BASE + "/mvc/user/update", //POST 更新用户
    USER_GET_ID: URLS.RBAC_BASE + "/mvc/user/getUserInfo", //GET 获取用户信息
    USER_ROLELIST: URLS.RBAC_BASE + "/mvc/user/getRoleList", // POST 当前用户所有角色
    USER_PWD_MODIFY: URLS.RBAC_BASE + "/mvc/user/updatePassword", //POST 修改密码
    USER_PWD_RESET: URLS.RBAC_BASE + "/mvc/user/resetPassword", //POST 重置密码
    USER_ASSIGNROLE: URLS.RBAC_BASE + "/mvc/user/assignRole", //POST 分配权限
    USER_UPDATEENABLED: URLS.RBAC_BASE + "/mvc/user/updateEnabled/", //POST 启用、停用
    USER_ALLROLE: URLS.RBAC_BASE + "/mvc/role/getAll", //POST 所有权限
    USER_ALLSALLERINFO: URLS.RBAC_BASE + "/mvc/sallerInfo/getAll", //POST 所有销方信息
    USER_ALLUSER: URLS.RBAC_BASE + "/mvc/user/getUserList", //POST 所有用户
    USER_SEGMENTLIST: URLS.RBAC_BASE + "/mvc/user/getSegmentList", //POST 所有责任中心段
    USER_SEGMENTSAVE: URLS.RBAC_BASE + "/mvc/user/saveSegment", //POST 修改责任中心段
    USER_SEGMENTALL: URLS.RBAC_BASE + "/mvc/user/getSegmentAll", //POST 查询用户关联的责任中心段
    USER_FIND_DEPT: URLS.RBAC_BASE + "/mvc/user/getUserListByBmId?buId=", //POST 查询用户关联的责任中心段
    USER_GET_GSDLIST: URLS.RBAC_BASE + "/mvc/user/getGsdList", //GET 查询用户公司段列表
    USER_GET_ZRZXDLIST: URLS.RBAC_BASE + "/mvc/user/getZrzxdList", //GET 查询用户责任中心段列表
    QUERY_GET_ByOrgId: URLS.RBAC_BASE + "/mvc/user/getUserListByOrgId",//GET 获取开票人信息
    QUERY_GET_ByBmId: URLS.RBAC_BASE + "/mvc/user/getUserListByBmId",//GET 新获取开票人信息
    USER_GET_HRLIST: URLS.RBAC_BASE +"/mvc/hrData/getList", //模糊查询hr信息

    //角色管理
    ROLE_ADD: URLS.RBAC_BASE + "/mvc/role/add", // POST 添加角色
    ROLE_MODIFY: URLS.RBAC_BASE + "/mvc/role/update", // POST 更新角色
    ROLE_ROLELIST: URLS.RBAC_BASE + "/mvc/role/getRoleList", // POST 所有角色
    ROLE_ROLEINFO: URLS.RBAC_BASE + "/mvc/role/getRoleInfo", // POST 角色信息
    ROLE_FINDTOALLOT: URLS.RBAC_BASE + "/mvc/resource/findToAllot", // POST 权限树信息
    ROLE_ROLEDELETE: URLS.RBAC_BASE + "/mvc/role/delete", // POST 删除权限
    ROLE_ROLEENABLED: URLS.RBAC_BASE + "/mvc/role/updateEnabled", // POST 停、启用权限
    ROLE_ROLEEAUTH: URLS.RBAC_BASE + "/mvc/organization/getAuthList", // POST 获取机构权限
    ROLE_FINDTREE: URLS.RBAC_BASE + "/mvc/resource/findTree", // POST 获取机构权限


    MENU_GET_USER: URLS.RBAC_BASE + "/mvc/resource/findTreeByUser?userId=${userId}", //POST  查询用户有权限的菜单

    // 商品管理
    GOOD_QUERY: URLS.RBAC_BASE + "/mvc/commodityInfo/getList", //POST 查询商品信息列表
    GOOD_GET_ID: URLS.RBAC_BASE + "/mvc/commodityInfo/getInfo", //GET 查询商品信息列表
    GOOD_ADD: URLS.RBAC_BASE + "/mvc/commodityInfo/add", //POST  添加商品信息
    GOOD_UPDATE: URLS.RBAC_BASE + "/mvc/commodityInfo/update", //POST 更新商品信息
    GOOD_DELETE: URLS.RBAC_BASE + "/mvc/commodityInfo/delete", //POST 删除商品信息
    GOOD_EXCEL: URLS.RBAC_BASE + "/mvc/commodityInfo/uploadExcel", //POST 批量添加商品，excel文件导入

    // 客户管理
    CLIENT_QUERY: URLS.RBAC_BASE + "/mvc/customer/getList", //POST 查询客户信息列表
    CLIENT_GET_ID: URLS.RBAC_BASE + "/mvc/customer/getInfo", //GET 查询客户信息
    CLIENT_ADD: URLS.RBAC_BASE + "/mvc/customer/add", //POST 添加客户信息
    CLIENT_UPDATE: URLS.RBAC_BASE + "/mvc/customer/update", //POST 更新客户信息
    CLIENT_DELETE: URLS.RBAC_BASE + "/mvc/customer/delete", //POST 删除客户信息
    CLIENT_EXCEL: URLS.RBAC_BASE + "/mvc/customer/uploadExcel", //POST 批量添加客户，excel文件导入

    // 审批管理
    APPROVE_GETSTAFF: URLS.RBAC_BASE + "/mvc/approveFlow/getStaff", //GET 获取跨税人员配置
    APPROVE_SAVESTAFF: URLS.RBAC_BASE + "/mvc/approveFlow/saveStaff", //POST 保存跨税人员配置
    APPROVE_LIST: URLS.RBAC_BASE + "/mvc/approveFlow/getList", //POST 获取审批列表
    APPROVE_SVAE: URLS.RBAC_BASE + "/mvc/approveFlow/save", //POST 保存审批
    APPROVE_UPDATE: URLS.RBAC_BASE + "/mvc/approveFlow/update", //POST 更新审批
    APPROVE_DELETE: URLS.RBAC_BASE + "/mvc/approveFlow/delete", //POST 删除审批

    MESSAGE_LIST: URLS.RBAC_BASE + "/mvc/alertMessage/getList", //POST 消息中心列表
    MESSAGE_UPDATE: URLS.RBAC_BASE + "/mvc/alertMessage/update", //POST 消息已读修改

    // 获取税控配置
    GET_SK_INFO: URLS.RBAC_BASE + "/mvc/organization/getSkInfo" //GET 获取税控配置
};

// 销项
URLS.API = {

    // 发票开具
    ADD_INVOICE: URLS.API_BASE + '/mvc/invoice/addInvoice.do', // POST发票开具按钮
    bILL_PaperInvoice: URLS.API_BASE + '/mvc/paper/billPaperInvoice.do', // POST纸票开具按钮

    bILL_PaperSplitInsert: URLS.API_BASE + '/mvc/invoicePre/insertInvoicePreForPaper', // POST纸票开具按钮,进待开
    bILL_PaperSplitUpdate: URLS.API_BASE + '/mvc/invoicePre/updateInvoicePreForPaper', // POST纸票拆分，修改待开数据
    bILL_PaperSplitSAVE: URLS.API_BASE + '/mvc/paper/saveInvoicePaper.do', // POST纸票开具成功保存数据库

    bILL_PaperUpdate: URLS.API_BASE + '/mvc/invoice/updateInvoiceHeader.do', // POST纸票作废，打印成功之后，调用修改发票状态

    ADD_INVOICE_NOCHECK: URLS.API_BASE + '/mvc/invoice/addInvoiceWithNoCheck.do', // POST发票开具,跳过校验
    GET_InvoiceByDmHm: URLS.API_BASE + '/mvc/invoice/getInvoiceByDmHm.do', // POST请求发票信息全票面信息

    GET_InvoicePaperByDmHm: URLS.API_BASE + '/mvc/invoice/getPaperInvoiceByDmHm.do', // POST请求发票信息全票面信息(纸票红冲)
    GET_InvoiceForReInvoice: URLS.API_BASE + '/mvc/invoice/getInvoiceForReInvoice.do', // POST发票重开

    // 发票查询
    downloadPDF: URLS.API_BASE + "/mvc/EntinvoiceRecord/downloadPDF.do", //GET 销方信息
    downloadBillAll: URLS.API_BASE + "/mvc/EntinvoiceRecord/fpExportExcel.do", //GET 导出全部
    downloadBillSelect: URLS.API_BASE + "/mvc/EntinvoiceRecord/fpExportExcelSelected.do", //GET 导出选中


    // 业务类型
    COMMON_GET_YWLX: URLS.API_BASE + '/mvc/systemdict/find/items/ywlx.do',
    // 公司段
    COMMON_GET_GSD: URLS.API_BASE + '/mvc/systemdict/find/items/gsd.do',
    // 责任中心段
    COMMON_GET_ZRZXD: URLS.API_BASE + '/mvc/systemdict/find/items/zrzxd.do',
    // 没有分页的商品查询
    COMMON_COMMODITY_LIST: URLS.API_BASE + '/mvc/dataDictionaryController/findProductAll.do',

    // 来源系统
    COMMON_GET_LYXT: URLS.API_BASE + '/mvc/systemdict/find/items/lyxt.do',

    // 发票查询
    XF_ENTIR_LIST: URLS.API_BASE + "/mvc/EntinvoiceRecord/entIRList.do", //POST 查询列表
    XF_SEND_PDF: URLS.API_BASE + "/mvc/EntinvoiceRecord/sendPDF.do", //POST 推送邮件
    VIEW_INVOICE: URLS.API_BASE + "/mvc/invoice/getInvoiceForReInvoice.do",//POST 查看发票
    VIEW_FPBS: URLS.API_BASE + "/mvc/invoice/getExtralInvoiceInfo.do",//POST 修改发票标识

    // 开票申请
    INVOICE_SQRIDANDJQID:URLS.RBAC_BASE+"/mvc/approveFlow/getBySqrIdAndJgId", //POST  开票申请单 销方名称改变
    INVOICE_APPLY_LIST: URLS.API_BASE + "/mvc/invoiceApply/getApplyList.do", //POST 查询申请列表 开票申请列表
    INVOICE_APPROVAL_LIST: URLS.API_BASE + "/mvc/invoiceApply/getApprovalList.do", //POST 审批查询 开票申请列表
    INVOICE_APPROVALCHECKOUT_LIST: URLS.API_BASE + "/mvc/invoiceApply/applyExportExcelSelected.do", //POST 导出选中 开票申请列表
    INVOICE_SAVE_APPLY: URLS.API_BASE + "/mvc/invoiceApply/saveApply.do", //POST 保存开票申请
    INVOICE_CACHEATTACHMENT: URLS.API_BASE + "/mvc/invoiceApply/skip/cacheAttachment.do", //POST 上传附件 开票申请列表
    INVOICE_UPLOADLINES: URLS.API_BASE + "/mvc/invoiceApply/skip/uploadLinesExcel.do", //POST 导入明细 开票申请列表
    INVOICE_GETAPPLY: URLS.API_BASE + "/mvc/invoiceApply/getApply.do", //POST 获取 开票申请列表
    INVOICE_UPDATEAPPLY: URLS.API_BASE + "/mvc/invoiceApply/updateApply.do", //POST 修改审批状态 开票申请列表
    INVOICE_REJECTAPPLY: URLS.API_BASE + "/mvc/invoiceApply/rejectApply.do", //POST 驳回 开票申请列表
    INVOICE_DOWNLOADATTACHMENT: URLS.API_BASE + "/mvc/invoiceApply/downloadAttachment.do", //POST 下载附件 开票申请列表
    INVOICE_EXPORTAOOLYALL: URLS.API_BASE + "/mvc/invoiceApply/applyExportExcel.do", //POST 导出全部申请表 开票申请列表
    INVOICE_EXPORTAOOLY: URLS.API_BASE + "/mvc/invoiceApply/applyExportExcelSelected.do", //POST 导出选中申请表 开票申请列表
    INVOICE_EDITAPPLY: URLS.API_BASE + "/mvc/invoiceApply/editApply.do", //FORM 申请管理 编辑 提交撤销按钮
    INVOICE_GETFSAPPLY: URLS.API_BASE + "/mvc/invoice/getApplyByDmHm.do", //FORM 申请管理 查询负数发票数据

    // 拆分管理
    SPLIT_INVOICE_LIST: URLS.API_BASE + "/mvc/invoiceSplit/getList", //POST 查询列表
    SPLIT_AUTOSPLIT: URLS.API_BASE + "/mvc/invoiceSplit/autoSplit", //POST 自动拆分-电票
    SPLIT_AUTOSPLIT_Invoice: URLS.API_BASE + "/mvc/invoice/addSplitInvoiceAuto.do", //POST 自动拆分-电票开具
    SPLIT_AUTOSPLIT_ZP_A: URLS.API_BASE + "/mvc/paper/billPaperInvoice.do", //POST 自动拆分-纸票-第一步
    SPLIT_MANUALSPLIT_Invoice: URLS.API_BASE + "/mvc/invoice/addSplitInvoice.do", //POST 手动拆分-电票开具
    SPLIT_DELETE: URLS.API_BASE + "/mvc/invoiceSplit/deleteSplit", //POST 删除
    SPLIT_ADD: URLS.API_BASE + "/mvc/invoiceSplit/add", //POST 手工录入
    SPLIT_GETXSFJG: URLS.API_BASE + "/mvc/invoiceSplit/getXsfJgList", //POST 查询销方机构列表
    SPLIT_UPLOAD: URLS.API_BASE + "/mvc/invoiceSplit/skip/uploadExcel", //POST 数据导入
    // 新增拆分接口20181229
    SPLIT_handspitpaperinvoice: URLS.API_BASE + "/mvc/paper/handSpitPaperInvoice.do", //POST 手工拆分-纸票开具
    SPLIT_autosplitpaperinvoice: URLS.API_BASE + "/mvc/paper/autoSplitPaperInvoice.do", //POST 手动拆分-纸票开具

    // 红字信息表
    HZXXB_TK_SQBTN: URLS.API_BASE + "/mvc/hzxxb/getInfoByDmHm", //POST 填开申请下一步BTN
    HZXXB_TK_BC: URLS.API_BASE + "/mvc/hzxxb/add", //POST 填开保存添加信息
    HZXXB_GL_CX: URLS.API_BASE + "/mvc/hzxxb/getList", //POST 查询列表
    HZXXB_GL_CK: URLS.API_BASE + "/mvc/hzxxb/getInfo", //POST 查看行
    HZXXB_GL_DEL: URLS.API_BASE + "/mvc/hzxxb/deleteTicketByKey.do", //POST 删除行
    HZXXB_GL_DELALL: URLS.API_BASE + "/mvc/hzxxb/batchDelete", //POST 批量删除
    HZXXB_GL_SQ: URLS.API_BASE + "/mvc/hzxxb/apply", //POST 申请
    HZXXB_GL_SHCX: URLS.API_BASE + "/mvc/hzxxb/query", //POST 审核查询-同步结果




    // 待开管理
    STAY_LIST: URLS.API_BASE + "/mvc/invoicePre/getInvoicePreList", //POST 待开列表查询
    STAY_ADD: URLS.API_BASE + "/mvc/invoicePre/updateInvoicePreGmf", //POST 待开列表查询
    STAY_MODIFY: URLS.API_BASE + "/mvc/invoicePre/updateInvoicePreGmf", //POST 待开列表查询
    STAY_DELETE: URLS.API_BASE + "/mvc/invoicePre/deleteInvoicePre", //POST 待开列表查询
    STAY_UPLOAD: URLS.API_BASE + "/mvc/invoicePre/skip/uploadExcel", //POST 待开列表查询
    STAY_UPDATE: URLS.API_BASE + "/mvc/invoicePre/updateInvoicePre", //POST 待开列表修改按钮
    STAY_SPLIT: URLS.API_BASE + "/mvc/invoicePre/updatePreToSplit", //POST 转入拆分
    STAY_PAPER_INVOICE: URLS.API_BASE + "/mvc/paper/stayPaperInvoice.do", //POST 待开纸票请求XML开具接口
    STAY_PAPER_SUCCESSSAVE_PAROPER: URLS.API_BASE + "/mvc/paper/saveStayInvoicePaper.do", //POST 待开纸票开具成功请求保存接口
    STAY_PAPER_FAILSAVE_PAROPER: URLS.API_BASE + "/mvc/paper/saveStayFailInvoicePaper.do", //POST 待开纸票开具失败请求接口


    // 二维码生成
    DOWNLOAD_QRCODE: URLS.API_BASE + "/mvc/qrcode/downloadQrcode.do", //POST 下载二维码
    GET_QRCODE: URLS.API_BASE + "/mvc/qrcode/getQrcode.do", //POST 查找二维码
    MAKE_QRCODE: URLS.API_BASE + "/mvc/qrcode/makeQrcode.do" //POST 生成二维码
};

export default URLS;