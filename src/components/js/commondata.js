var data_self ={
    navData:[
        {
            navid:0,
            navLevel:'first',
            navText:'发票开具',
            navChildren:[
                {
                    navid:0,
                    navLevel:'second',
                    navText:'红字信息表',
                    parentdjId:1,
                    navChildren:[
                        {
                            navid:0,
                            navLevel:'third',
                            navText:'红字信息表管理',
                            parentdjId:2,
                            url:'/invoice/hz/list'
                        },
                        {
                            navid:1,
                            navLevel:'third',
                            navText:'红字信息表填开',
                            parentdjId:2,
                            url:'/invoice/hz/create'
                        }
                    ]
                },
                {
                    navid:1,
                    navLevel:'second',
                    navText:'二维码',
                    parentdjId:1,
                    navChildren:[
                        {
                            navid:0,
                            navLevel:'third',
                            navText:'二维码生成',
                            parentdjId:2,
                            url:'/invoice/qrcode'
                        }
                    ]
                }
            ]
        },
        {
            navid:1,
            navLevel:'first',
            navText:'系统管理',
            navChildren:[
                {
                    navid:0,
                    navLevel:'second',
                    navText:'用户信息',
                    parentdjId:1,
                    navChildren:[
                        {
                            navid:0,
                            navLevel:'third',
                            navText:'用户信息管理',
                            parentdjId:2,
                            url:'/system/user'
                        }
                    ]
                }
            ]
        }
    ]
};
var data = {
    "resourceList": [
        {
            "children": [
               /*{
                    "children": [
                        {
                            "children": [],
                            "dj": 3,
                            "icons": "",
                            "id": 4,
                            "name": "正数开具（电票）",
                            "parentId": 3,
                            "parentName": "发票开具",
                            "selected": false,
                            "seqNum": 4,
                            "url": "#/invoice/ele/zsCreate.bill"
                        }, 
                        {
                            "children": [],
                            "dj": 3,
                            "icons": "",
                            "id": 5,
                            "name": "负数开具（电票）",
                            "parentId": 3,
                            "parentName": "发票开具",
                            "selected": false,
                            "seqNum": 5,
                            "url": "#/invoice/ele/fsCreate.bill"
                        }, 
                        {
                            "children": [],
                            "dj": 3,
                            "icons": "",
                            "id": 6,
                            "name": "正数开具（普票）",
                            "parentId": 3,
                            "parentName": "发票开具",
                            "selected": false,
                            "seqNum": 6,
                            "url": "#/invoice/gen/zsCreate.bill"
                        }, 
                        {
                            "children": [],
                            "dj": 3,
                            "icons": "",
                            "id": 7,
                            "name": "负数开具（普票）",
                            "parentId": 3,
                            "parentName": "发票开具",
                            "selected": false,
                            "seqNum": 7,
                            "url": "#/invoice/gen/fsCreate.bill"
                        }, 
                        {
                            "children": [],
                            "dj": 3,
                            "icons": "",
                            "id": 8,
                            "name": "正数开具（专票）",
                            "parentId": 3,
                            "parentName": "发票开具",
                            "selected": false,
                            "seqNum": 8,
                            "url": "#/invoice/spe/zsCreate.bill"
                        }, 
                        {
                            "children": [],
                            "dj": 3,
                            "icons": "",
                            "id": 9,
                            "name": "负数开具（专票）",
                            "parentId": 3,
                            "parentName": "发票开具",
                            "selected": false,
                            "seqNum": 9,
                            "url": "#/invoice/spe/fsCreate.bill"
                        }
                    ],
                    "dj": 2,
                    "icons": "level_2_fpkj",
                    "id": 3,
                    "name": "发票开具",
                    "parentId": 2,
                    "parentName": "发票开具",
                    "selected": false,
                    "seqNum": 3,
                    "url": "javascript:;"
                }, 
                {
                    "children": [],
                    "dj": 2,
                    "icons": "level_2_fpcx",
                    "id": 10,
                    "name": "发票查询",
                    "parentId": 2,
                    "parentName": "发票开具",
                    "selected": false,
                    "seqNum": 10,
                    "url": "#/invoice/query/bill"
}, 
                {
                    "children": [],
                    "dj": 2,
                    "icons": "level_2_fpdy",
                    "id": 11,
                    "name": "发票打印",
                    "parentId": 2,
                    "parentName": "发票开具",
                    "selected": false,
                    "seqNum": 11,
                    "url": "#/invoice/print/bill"
}, 
                {
                    "children": [],
                    "dj": 2,
                    "icons": "level_2_cwgl",
                    "id": 12,
                    "name": "财务管理",
                    "parentId": 2,
                    "parentName": "发票开具",
                    "selected": false,
                    "seqNum": 12,
                    "url": "http://192.168.2.218:8080/SKServer/"
}, 
                {
                    "children": [
                        {
                            "children": [],
                            "dj": 3,
                            "icons": "",
                            "id": 14,
                            "name": "申请管理",
                            "parentId": 13,
                            "parentName": "开票申请",
                            "selected": false,
                            "seqNum": 14,
                            "url": "#/invoice/apply/manage.bill"
                        }, 
                        {
                            "children": [],
                            "dj": 3,
                            "icons": "",
                            "id": 15,
                            "name": "申请审批",
                            "parentId": 13,
                            "parentName": "开票申请",
                            "selected": false,
                            "seqNum": 15,
                            "url": "#/invoice/apply/approve.bill"
                        }, 
                        {
                            "children": [],
                            "dj": 3,
                            "icons": "",
                            "id": 16,
                            "name": "申请查询",
                            "parentId": 13,
                            "parentName": "开票申请",
                            "selected": false,
                            "seqNum": 16,
                            "url": "#/invoice/apply/list.bill"
                        }
                    ],
                    "dj": 2,
                    "icons": "level_2_kpsq",
                    "id": 13,
                    "name": "开票申请",
                    "parentId": 2,
                    "parentName": "发票开具",
                    "selected": false,
                    "seqNum": 13,
                    "url": "javascript:;"
}, 
                {
                    "children": [],
                    "dj": 2,
                    "icons": "level_2_dkgl",
                    "id": 17,
                    "name": "待开管理",
                    "parentId": 2,
                    "parentName": "发票开具",
                    "selected": false,
                    "seqNum": 17,
                    "url": "#/invoice/stay/bill"
                },
                {
                    "children": [],
                    "dj": 2,
                    "icons": "level_2_cfgl",
                    "id": 18,
                    "name": "拆分管理",
                    "parentId": 2,
                    "parentName": "发票开具",
                    "selected": false,
                    "seqNum": 18,
                    "url": "#/invoice/split/bill"
}, */
                {
                    "children": [
                        {
                            "children": [],
                            "dj": 3,
                            "icons": "",
                            "id": 21,
                            "name": "红字信息表管理",
                            "parentId": 19,
                            "parentName": "红字信息表管理",
                            "selected": false,
                            "seqNum": 20,
                            "url": "/invoice/hz/list"
                        }, 
                        {
                            "children": [],
                            "dj": 3,
                            "icons": "",
                            "id": 20,
                            "name": "红字信息表填开",
                            "parentId": 19,
                            "parentName": "红字信息表管理",
                            "selected": false,
                            "seqNum": 21,
                            "url": "/invoice/hz/create"
                        }
                    ],
                    "dj": 2,
                    "icons": "level_2_hzxxbgl",
                    "id": 19,
                    "name": "红字信息表管理",
                    "parentId": 2,
                    "parentName": "发票开具",
                    "selected": false,
                    "seqNum": 19,
                    "url": "javascript:;"
                }, 
                {
                    "children": [],
                    "dj": 2,
                    "icons": "level_2_ewmsc",
                    "id": 22,
                    "name": "二维码生成",
                    "parentId": 2,
                    "parentName": "发票开具",
                    "selected": false,
                    "seqNum": 22,
                    "url": "/invoice/qrcode"
                }
            ],
            "dj": 1,
            "icons": "level_1_fpkj",
            "id": 2,
            "name": "发票开具",
            "parentId": null,
            "parentName": "",
            "selected": false,
            "seqNum": 2,
            "url": "invoice"
}, 
        {
            "children": [
            {
            "children": [{
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 25,
                "name": "电子底账库",
                "parentId": 24,
                "parentName": "进项发票管理",
                "selected": false,
                "seqNum": 25,
                "url": "#/VAT/dzdzk/VAT"
            }, {
                "children": [{
                    "children": [],
                    "dj": 4,
                    "icons": "",
                    "id": 27,
                    "name": "纸票扫描录入",
                    "parentId": 26,
                    "parentName": "发票采集",
                    "selected": false,
                    "seqNum": 27,
                    "url": "#/VAT/fpcj/zpsmlr.VAT"
                }, {
                    "children": [],
                    "dj": 4,
                    "icons": "",
                    "id": 28,
                    "name": "手工采集录入",
                    "parentId": 26,
                    "parentName": "发票采集",
                    "selected": false,
                    "seqNum": 28,
                    "url": "#/VAT/fpcj/sgcjlr.VAT"
                }, {
                    "children": [],
                    "dj": 4,
                    "icons": "",
                    "id": 29,
                    "name": "扫描枪录入",
                    "parentId": 26,
                    "parentName": "发票采集",
                    "selected": false,
                    "seqNum": 29,
                    "url": "#/VAT/fpcj/smqlre.VAT"
                }, {
                    "children": [],
                    "dj": 4,
                    "icons": "",
                    "id": 30,
                    "name": "图片识别录入",
                    "parentId": 26,
                    "parentName": "发票采集",
                    "selected": false,
                    "seqNum": 30,
                    "url": "#/VAT/fpcj/tpsblr.VAT"
                }, {
                    "children": [],
                    "dj": 4,
                    "icons": "",
                    "id": 31,
                    "name": "电票识别录入",
                    "parentId": 26,
                    "parentName": "发票采集",
                    "selected": false,
                    "seqNum": 31,
                    "url": "#/VAT/fpcj/dpsblr.VAT"
                }, {
                    "children": [],
                    "dj": 4,
                    "icons": "",
                    "id": 32,
                    "name": "发票批量录入",
                    "parentId": 26,
                    "parentName": "发票采集",
                    "selected": false,
                    "seqNum": 32,
                    "url": "#/VAT/fpcj/fppllr.VAT"
                }, {
                    "children": [],
                    "dj": 4,
                    "icons": "",
                    "id": 33,
                    "name": "已采集发票管理",
                    "parentId": 26,
                    "parentName": "发票采集",
                    "selected": false,
                    "seqNum": 33,
                    "url": "#/VAT/fpcj/ycjfpgl.VAT"
                }],
                "dj": 3,
                "icons": "",
                "id": 26,
                "name": "发票采集",
                "parentId": 24,
                "parentName": "进项发票管理",
                "selected": false,
                "seqNum": 26,
                "url": "javascript:;"
            }, {
                "children": [{
                    "children": [],
                    "dj": 4,
                    "icons": "",
                    "id": 35,
                    "name": "认证结果查询",
                    "parentId": 34,
                    "parentName": "发票认证",
                    "selected": false,
                    "seqNum": 35,
                    "url": "#/VAT/fprz/rzjgcx.VAT"
                }],
                "dj": 3,
                "icons": "",
                "id": 34,
                "name": "发票认证",
                "parentId": 24,
                "parentName": "进项发票管理",
                "selected": false,
                "seqNum": 34,
                "url": "javascript:;"
            }, {
                "children": [{
                    "children": [],
                    "dj": 4,
                    "icons": "",
                    "id": 37,
                    "name": "同步ERP待认证数据",
                    "parentId": 36,
                    "parentName": "账务管理",
                    "selected": false,
                    "seqNum": 37,
                    "url": "#/VAT/zwgl/tbERPdrzgl.VAT"
                }, {
                    "children": [],
                    "dj": 4,
                    "icons": "",
                    "id": 38,
                    "name": "账务预警",
                    "parentId": 36,
                    "parentName": "账务管理",
                    "selected": false,
                    "seqNum": 38,
                    "url": "#/VAT/zwgl/zwyj.VAT"
                }, {
                    "children": [],
                    "dj": 4,
                    "icons": "",
                    "id": 39,
                    "name": "已认证未出账数据",
                    "parentId": 36,
                    "parentName": "账务管理",
                    "selected": false,
                    "seqNum": 39,
                    "url": "#/VAT/zwgl/yrzwczsj.VAT"
                }, {
                    "children": [],
                    "dj": 4,
                    "icons": "",
                    "id": 40,
                    "name": "财务出账",
                    "parentId": 36,
                    "parentName": "账务管理",
                    "selected": false,
                    "seqNum": 40,
                    "url": "#/VAT/zwgl/zwcz.VAT"
                }, {
                    "children": [],
                    "dj": 4,
                    "icons": "",
                    "id": 41,
                    "name": "总账发票账务",
                    "parentId": 36,
                    "parentName": "账务管理",
                    "selected": false,
                    "seqNum": 41,
                    "url": "#/VAT/zwgl/zzfpcw.VAT"
                }],
                "dj": 3,
                "icons": "",
                "id": 36,
                "name": "账务管理",
                "parentId": 24,
                "parentName": "进项发票管理",
                "selected": false,
                "seqNum": 36,
                "url": "javascript:;"
            }, {
                "children": [{
                    "children": [],
                    "dj": 4,
                    "icons": "",
                    "id": 43,
                    "name": "认证期限预警",
                    "parentId": 42,
                    "parentName": "预警管理",
                    "selected": false,
                    "seqNum": 43,
                    "url": "#/VAT/yjgl/rzqxyj.VAT"
                }, {
                    "children": [],
                    "dj": 4,
                    "icons": "",
                    "id": 44,
                    "name": "模拟查询预警",
                    "parentId": 42,
                    "parentName": "预警管理",
                    "selected": false,
                    "seqNum": 44,
                    "url": "#/VAT/yjgl/ztfpyj.VAT"
                }, {
                    "children": [],
                    "dj": 4,
                    "icons": "",
                    "id": 45,
                    "name": "虚开发票预警",
                    "parentId": 42,
                    "parentName": "预警管理",
                    "selected": false,
                    "seqNum": 45,
                    "url": "#/VAT/yjgl/xkfpyj.VAT"
                }],
                "dj": 3,
                "icons": "",
                "id": 42,
                "name": "预警管理",
                "parentId": 24,
                "parentName": "进项发票管理",
                "selected": false,
                "seqNum": 42,
                "url": "javascript:;"
            }],
            "dj": 2,
            "icons": "level_2_jxfpgl",
            "id": 24,
            "name": "进项发票管理",
            "parentId": 23,
            "parentName": "增值税管理",
            "selected": false,
            "seqNum": 24,
            "url": "javascript:;"
        }, 
            {
            "children": [{
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 47,
                "name": "转出处理",
                "parentId": 46,
                "parentName": "进项税额转出",
                "selected": false,
                "seqNum": 47,
                "url": "#/VAT/sezc/zccl.VAT"
            }, {
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 48,
                "name": "财务出账",
                "parentId": 46,
                "parentName": "进项税额转出",
                "selected": false,
                "seqNum": 48,
                "url": "#/VAT/sezc/cwcz.VAT"
            }],
            "dj": 2,
            "icons": "level_2_jxsezc",
            "id": 46,
            "name": "进项税额转出",
            "parentId": 23,
            "parentName": "增值税管理",
            "selected": false,
            "seqNum": 46,
            "url": "javascript:;"
        }, 
            {
            "children": [{
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 50,
                "name": "获取系统数据",
                "parentId": 49,
                "parentName": "海关专用缴款书",
                "selected": false,
                "seqNum": 50,
                "url": "#/VAT/hg/hqxtsj.VAT"
            }, {
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 51,
                "name": "生成抵扣清单",
                "parentId": 49,
                "parentName": "海关专用缴款书",
                "selected": false,
                "seqNum": 51,
                "url": "#/VAT/hg/scdkqd.VAT"
            }, {
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 52,
                "name": "稽核数据导出",
                "parentId": 49,
                "parentName": "海关专用缴款书",
                "selected": false,
                "seqNum": 52,
                "url": "#/VAT/hg/jhshdc.VAT"
            }, {
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 53,
                "name": "稽核结果导入",
                "parentId": 49,
                "parentName": "海关专用缴款书",
                "selected": false,
                "seqNum": 53,
                "url": "#/VAT/hg/jhjgdr.VAT"
            }, {
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 54,
                "name": "账务处理",
                "parentId": 49,
                "parentName": "海关专用缴款书",
                "selected": false,
                "seqNum": 54,
                "url": "#/VAT/hg/zwcl.VAT"
            }, {
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 55,
                "name": "财务出账",
                "parentId": 49,
                "parentName": "海关专用缴款书",
                "selected": false,
                "seqNum": 55,
                "url": "#/VAT/hg/zwcz.VAT"
            }],
            "dj": 2,
            "icons": "level_2_hgzyjks",
            "id": 49,
            "name": "海关专用缴款书",
            "parentId": 23,
            "parentName": "增值税管理",
            "selected": false,
            "seqNum": 49,
            "url": "javascript:;"
        }, 
            {
            "children": [{
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 57,
                "name": "数据导入",
                "parentId": 56,
                "parentName": "代扣代缴增值税",
                "selected": false,
                "seqNum": 57,
                "url": "#/VAT/dkdj/sjdr.VAT"
            }, {
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 58,
                "name": "生成抵用清单",
                "parentId": 56,
                "parentName": "代扣代缴增值税",
                "selected": false,
                "seqNum": 58,
                "url": "#/VAT/dkdj/scdyqd.VAT"
            }, {
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 59,
                "name": "账务处理",
                "parentId": 56,
                "parentName": "代扣代缴增值税",
                "selected": false,
                "seqNum": 59,
                "url": "#/VAT/dkdj/zwcl.VAT"
            }, {
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 60,
                "name": "财务出账",
                "parentId": 56,
                "parentName": "代扣代缴增值税",
                "selected": false,
                "seqNum": 60,
                "url": "#/VAT/dkdj/zwcz.VAT"
            }],
            "dj": 2,
            "icons": "level_2_dkdjzzs",
            "id": 56,
            "name": "代扣代缴增值税",
            "parentId": 23,
            "parentName": "增值税管理",
            "selected": false,
            "seqNum": 56,
            "url": "javascript:;"
        }, 
            {
            "children": [{
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 62,
                "name": "城建税",
                "parentId": 61,
                "parentName": "其他税项管理",
                "selected": false,
                "seqNum": 62,
                "url": "#/VAT/qtsx/cjs.VAT"
            }, {
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 63,
                "name": "教育附加税",
                "parentId": 61,
                "parentName": "其他税项管理",
                "selected": false,
                "seqNum": 63,
                "url": "#/VAT/qtsx/jyfjf.VAT"
            }, {
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 64,
                "name": "地方教育基金",
                "parentId": 61,
                "parentName": "其他税项管理",
                "selected": false,
                "seqNum": 64,
                "url": "#/VAT/qtsx/dfjyjj.VAT"
            }, {
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 65,
                "name": "房产税",
                "parentId": 61,
                "parentName": "其他税项管理",
                "selected": false,
                "seqNum": 65,
                "url": "#/VAT/qtsx/fcs.VAT"
            }, {
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 66,
                "name": "土地税",
                "parentId": 61,
                "parentName": "其他税项管理",
                "selected": false,
                "seqNum": 66,
                "url": "#/VAT/qtsx/tds.VAT"
            }, {
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 67,
                "name": "车船税",
                "parentId": 61,
                "parentName": "其他税项管理",
                "selected": false,
                "seqNum": 67,
                "url": "#/VAT/qtsx/ccs.VAT"
            }, {
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 68,
                "name": "印花税",
                "parentId": 61,
                "parentName": "其他税项管理",
                "selected": false,
                "seqNum": 68,
                "url": "#/VAT/qtsx/yhs.VAT"
            }, {
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 69,
                "name": "土地使用费",
                "parentId": 61,
                "parentName": "其他税项管理",
                "selected": false,
                "seqNum": 69,
                "url": "#/VAT/qtsx/tdsyf.VAT"
            }, {
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 70,
                "name": "企业所得税",
                "parentId": 61,
                "parentName": "其他税项管理",
                "selected": false,
                "seqNum": 70,
                "url": "#/VAT/qtsx/qysds.VA"
            }, {
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 71,
                "name": "个人所得税",
                "parentId": 61,
                "parentName": "其他税项管理",
                "selected": false,
                "seqNum": 71,
                "url": "#/VAT/qtsx/grsds.VAT"
            }, {
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 72,
                "name": "预提所得税（不含经营性租赁）",
                "parentId": 61,
                "parentName": "其他税项管理",
                "selected": false,
                "seqNum": 72,
                "url": "#/VAT/qtsx/ytsdsNo.VAT"
            }, {
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 73,
                "name": "预提所得税（含经营性租赁）",
                "parentId": 61,
                "parentName": "其他税项管理",
                "selected": false,
                "seqNum": 73,
                "url": "#/VAT/qtsx/ytsds.VAT"
            }, {
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 74,
                "name": "预提流传税附加",
                "parentId": 61,
                "parentName": "其他税项管理",
                "selected": false,
                "seqNum": 74,
                "url": "#/VAT/qtsx/ytlzsfj.VAT"
            }, {
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 75,
                "name": "预提增值税",
                "parentId": 61,
                "parentName": "其他税项管理",
                "selected": false,
                "seqNum": 75,
                "url": "#/VAT/qtsx/ytzzs.VAT"
            }, {
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 76,
                "name": "关税",
                "parentId": 61,
                "parentName": "其他税项管理",
                "selected": false,
                "seqNum": 76,
                "url": "#/VAT/qtsx/gs.VAT"
            }, {
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 77,
                "name": "残保金",
                "parentId": 61,
                "parentName": "其他税项管理",
                "selected": false,
                "seqNum": 77,
                "url": "#/VAT/qtsx/cbj.VAT"
            }, {
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 78,
                "name": "土地增值税",
                "parentId": 61,
                "parentName": "其他税项管理",
                "selected": false,
                "seqNum": 78,
                "url": "#/VAT/qtsx/tdzzs.VAT"
            }, {
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 79,
                "name": "其他",
                "parentId": 61,
                "parentName": "其他税项管理",
                "selected": false,
                "seqNum": 79,
                "url": "#/VAT/qtsx/qt.VAT"
            }],
            "dj": 2,
            "icons": "level_2_qtsxgl",
            "id": 61,
            "name": "其他税项管理",
            "parentId": 23,
            "parentName": "增值税管理",
            "selected": false,
            "seqNum": 61,
            "url": "javascript:;"
        }, 
            {
            "children": [{
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 81,
                "name": "已认证发票统计",
                "parentId": 80,
                "parentName": "进项数据分析",
                "selected": false,
                "seqNum": 81,
                "url": "#/VAT/jxsj/yrzfptj.VAT"
            }, {
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 82,
                "name": "抵扣趋势分析",
                "parentId": 80,
                "parentName": "进项数据分析",
                "selected": false,
                "seqNum": 82,
                "url": "#/VAT/jxsj/zkqsfx.VAT"
            }, {
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 83,
                "name": "发票认证统计",
                "parentId": 80,
                "parentName": "进项数据分析",
                "selected": false,
                "seqNum": 83,
                "url": "#/VAT/jxsj/fprztj.VAT"
            }, {
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 84,
                "name": "销方排名",
                "parentId": 80,
                "parentName": "进项数据分析",
                "selected": false,
                "seqNum": 84,
                "url": "#/VAT/jxsj/xfpm.VAT"
            }, {
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 85,
                "name": "发票录入统计",
                "parentId": 80,
                "parentName": "进项数据分析",
                "selected": false,
                "seqNum": 85,
                "url": "#/VAT/jxsj/fplrtj.VAT"
            }, {
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 86,
                "name": "抵扣明细统计",
                "parentId": 80,
                "parentName": "进项数据分析",
                "selected": false,
                "seqNum": 86,
                "url": "#/VAT/jxsj/zkmxtj.VAT"
            }, {
                "children": [],
                "dj": 3,
                "icons": "",
                "id": 87,
                "name": "抵扣汇总统计",
                "parentId": 80,
                "parentName": "进项数据分析",
                "selected": false,
                "seqNum": 87,
                "url": "#/VAT/jxsj/zkhztj.VAT"
            }],
            "dj": 2,
            "icons": "level_2_jxsjfx",
            "id": 80,
            "name": "进项数据分析",
            "parentId": 23,
            "parentName": "增值税管理",
            "selected": false,
            "seqNum": 80,
            "url": "javascript:;"
        }, 
            {
            "children": [{
                "children": [{
                    "children": [],
                    "dj": 4,
                    "icons": "",
                    "id": 90,
                    "name": "航空运输收入清算账单",
                    "parentId": 89,
                    "parentName": "免抵退申报",
                    "selected": false,
                    "seqNum": 90,
                    "url": "#/VAT/mdtsb/hkys.VAT"
                }, {
                    "children": [],
                    "dj": 4,
                    "icons": "",
                    "id": 91,
                    "name": "国际、港澳台运输申报明细表",
                    "parentId": 89,
                    "parentName": "免抵退申报",
                    "selected": false,
                    "seqNum": 91,
                    "url": "#/VAT/mdtsb/gjggt.VAT"
                }, {
                    "children": [],
                    "dj": 4,
                    "icons": "",
                    "id": 92,
                    "name": "申报查询",
                    "parentId": 89,
                    "parentName": "免抵退申报",
                    "selected": false,
                    "seqNum": 92,
                    "url": "#/VAT/mdtsb/sbcx.VAT"
                }],
                "dj": 3,
                "icons": "",
                "id": 89,
                "name": "免抵退申报",
                "parentId": 88,
                "parentName": "申报管理",
                "selected": false,
                "seqNum": 89,
                "url": "javascript:;"
            }, {
                "children": [{
                    "children": [],
                    "dj": 4,
                    "icons": "",
                    "id": 94,
                    "name": "国航本部纳税申报",
                    "parentId": 93,
                    "parentName": "增值税申报",
                    "selected": false,
                    "seqNum": 94,
                    "url": "#/VAT/zzssb/ghbbns.VAT"
                }, {
                    "children": [],
                    "dj": 4,
                    "icons": "",
                    "id": 95,
                    "name": "分公司纳税申报",
                    "parentId": 93,
                    "parentName": "增值税申报",
                    "selected": false,
                    "seqNum": 95,
                    "url": "#/VAT/zzssb/fgsns.VAT"
                }, {
                    "children": [],
                    "dj": 4,
                    "icons": "",
                    "id": 96,
                    "name": "传递单",
                    "parentId": 93,
                    "parentName": "增值税申报",
                    "selected": false,
                    "seqNum": 96,
                    "url": "#/VAT/zzssb/cdd.VAT"
                }, {
                    "children": [],
                    "dj": 4,
                    "icons": "",
                    "id": 97,
                    "name": "会计科目数据查询",
                    "parentId": 93,
                    "parentName": "增值税申报",
                    "selected": false,
                    "seqNum": 97,
                    "url": "#/VAT/zzssb/kjkm.VAT"
                }, {
                    "children": [],
                    "dj": 4,
                    "icons": "",
                    "id": 106,
                    "name": "申报查询",
                    "parentId": 93,
                    "parentName": "增值税申报",
                    "selected": false,
                    "seqNum": 106,
                    "url": "#/VAT/zzssb/sbcx.VAT"
                }, {
                    "children": [],
                    "dj": 4,
                    "icons": "",
                    "id": 107,
                    "name": "传递单查询",
                    "parentId": 93,
                    "parentName": "增值税申报",
                    "selected": false,
                    "seqNum": 107,
                    "url": "#/VAT/zzssb/cddcx.VAT"
                }],
                "dj": 3,
                "icons": "",
                "id": 93,
                "name": "增值税申报",
                "parentId": 88,
                "parentName": "申报管理",
                "selected": false,
                "seqNum": 93,
                "url": "javascript:;"
            }],
            "dj": 2,
            "icons": "level_2_sbgl",
            "id": 88,
            "name": "申报管理",
            "parentId": 23,
            "parentName": "增值税管理",
            "selected": false,
            "seqNum": 88,
            "url": "javascript:;"
        }
        ],
            "dj": 1,
            "icons": "level_1_zzsgl",
            "id": 23,
            "name": "增值税管理",
            "parentId": null,
            "parentName": "",
            "selected": false,
            "seqNum": 23,
            "url": "VAT"
}, 
        {
            "children": [
                /*{
                    "children": [],
                    "dj": 2,
                    "icons": "level_2_jggl",
                    "id": 99,
                    "name": "机构管理",
                    "parentId": 98,
                    "parentName": "系统管理",
                    "selected": false,
                    "seqNum": 99,
                    "url": "#/system/organization/manage"
                }, 
                {
                    "children": [],
                    "dj": 2,
                    "icons": "level_2_jsgl",
                    "id": 101,
                    "name": "角色管理",
                    "parentId": 98,
                    "parentName": "系统管理",
                    "selected": false,
                    "seqNum": 100,
                    "url": "#/system/role/manage"
                }, */
                {
                    "children": [],
                    "dj": 2,
                    "icons": "level_2_yhgl",
                    "id": 100,
                    "name": "用户管理",
                    "parentId": 98,
                    "parentName": "系统管理",
                    "selected": false,
                    "seqNum": 101,
                    "url": "/system/user"
                },
                /*{
                    "children": [],
                    "dj": 2,
                    "icons": "level_2_spgl",
                    "id": 102,
                    "name": "审批管理",
                    "parentId": 98,
                    "parentName": "系统管理",
                    "selected": false,
                    "seqNum": 102,
                    "url": "#/system/approve/manage"
                }, 
                {
                    "children": [],
                    "dj": 2,
                    "icons": "level_2_spxxwh",
                    "id": 103,
                    "name": "商品信息维护",
                    "parentId": 98,
                    "parentName": "系统管理",
                    "selected": false,
                    "seqNum": 103,
                    "url": "#/system/goodsMsg/manage"
                }, 
                {
                    "children": [],
                    "dj": 2,
                    "icons": "level_2_khxxwh",
                    "id": 104,
                    "name": "客户信息维护",
                    "parentId": 98,
                    "parentName": "系统管理",
                    "selected": false,
                    "seqNum": 104,
                    "url": "#/system/clientMsg/manage"
                }, 
                {
                    "children": [],
                    "dj": 2,
                    "icons": "level_2_xxzx",
                    "id": 105,
                    "name": "消息中心",
                    "parentId": 98,
                    "parentName": "系统管理",
                    "selected": false,
                    "seqNum": 105,
                    "url": "#/system/msgCenter/manage"
                }*/
            ],
            "dj": 1,
            "icons": "",
            "id": 98,
            "name": "系统管理",
            "parentId": null,
            "parentName": "",
            "selected": false,
            "seqNum": 98,
            "url": "system"
        }
]
}

export default
{
    data,
}　
