var globaldata = {
    // 发票类型
    enums_fplx_ele: '026', // 电票
    enums_fplx_gen: '007', // 普票
    enums_fplx_spe: '004', // 专票   
    
    // 纸票清单票不超过8行
    enums_speTRS: 8,
    // 电票清单票不超过5行
    enums_eleTRS: 5,

    // 含税不含税
    enums_tax: '1',
    enums_noTax: '0',

    // 明细/清单
    enums_listing: '0',
    enums_detail: '1',

    // 普通征税
    enums_normal: '0',
    // 差额征税
    enums_CE: '2',

    // 0：蓝字发票；1：红字发票
    kplx_blue: '0',
    kplx_red: '1',

    // 发票状态
    invoiceState_FPZT: [
    {
      id: '0',
      text: '正数发票开具'
    },
    {
      id: '1',
      text: '负数发票开具'
    },
    {
      id: '2',
      text: '正数发票作废'
    },
    {
      id: '3',
      text: '负数发票作废'
    },
    {
      id: '5',
      text: '已红冲发票'
    }
    ],

    // 发票类型
    invoiceType_FPLX: [
    {
      id: '026',
      text: '电票'
    },
    {
      id: '007',
      text: '普票'
    },
    {
      id: '004',
      text: '专票'
    }
    ],

    // 交付状态
    deliveryStatus_JFZT: [
        {
          id: '0',
          text: '未交付'
        }, 
        {
          id: '1',
          text: '已交付'
        }
    ],
    XXBZT: [
        {
            id: "0",
            text: "未处理"
        },
        {
            id: "1",
            text: "已提交"
        }, 
        {
            id: "2",
            text: "审核通过"
        }, 
        {
            id: "3",
            text: "审核不通过"
        }
    ],
    TKRQ:''
    ,
    // 正则
    userNameRegexp: /^[a-zA-Z0-9]{1,30}$/,
    realNameRegexp: /^[\u4E00-\u9FA5a-zA-Z]{2,10}$/,
    phoneRegexp: /^[1][3,4,5,7,8][0-9]{9}$/,
    passWordRegexp: /^.*([\u4E00-\u9FA5])+.*$/,
    nameRegexp: /^[\u4E00-\u9FA5a-zA-Z]{2,10}$/,
    emailRegexp: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
}

/**
 *  dataConversion数据转换
 *  data 需要转换的值
 *  dataSource 数据源
 **/
export function dataConversion(data, dataSource) {
    for (let dataKey in dataSource) {
        if ((dataSource[dataKey].code || dataSource[dataKey].id) == data) {
            return dataSource[dataKey].name || dataSource[dataKey].text;
        }
    }
}
/**
 *  dateConversion数据转换
 *  data 需要转换的值
 *  dataSource 数据源
 **/
export function dateConversion(data) {
    return data ? new Date(Number(data)).toLocaleDateString().replace(/\//g, "-") : '';
}

export default {
    globaldata
}
