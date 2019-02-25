import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 创建查询状态管理
const storesearch= {
    state: { 
        //页面共享数据
        // 控制更多条件显示
        isMoreSearch:false,
        searchMoreText: '更多条件'
    },
    getters: {
        // 组件数据读取/输出，不能在这里直接修改状态
        // state 发生变化自动触发
        // 使用$store.getters.getSearch 来获取状态 
        getSearch(state) {
            // 这里的state对应上面的state
            return state.isMoreSearch;
        },
        getSearchText(state) {
            // 这里的state对应上面的state
            return state.searchMoreText;
        }
    },
    mutations: {
        // 只能在这里改变状态
        // 使用this.$store.commit('changeSearch')
        // 进行更多条件切换
        changeSearch(state) {
            // 这里的state对应上面的state
            state.isMoreSearch = !state.isMoreSearch;
            state.searchMoreText = state.isMoreSearch ? '收起条件':'更多条件';
        },
        // 进行更多条件恢复默认
        recoverySearch(state) {
            // 这里的state对应上面的state
            state.isMoreSearch = false;
            state.searchMoreText = '更多条件';
        },
    }
};

// hint状态管理
const storehint= {
    state: { 
        //页面共享数据
        hintShow:false,  //true:hint显示
        hintStatus:'',  //hint显示状态-样式
        hintText:''     //hint显示文字
    },
    getters: {
        getHintShow(state) {
            // 获取hint显示
            return state.hintShow;
        },
        getHintStatus(state) {
            // 获取hint显示样式
            return state.hintStatus;
        },
        getHintText(state) {
            // 显示文字
            return state.hintText;
        }
    },
    mutations: {
        changeHintShow(state,isTrue) {
            // 处理hint显示
            state.hintShow = isTrue;
            if (isTrue) {
                setTimeout(function() {
                  state.hintShow = false;
                }, 1500);
            }
        },
        changeHintStatus(state, hintStatus) {
            state.hintStatus = hintStatus;
        },
        changeHintText(state, hintText) {
            state.hintText = hintText;
        },
    }
};

const store = new Vuex.Store({
    state: {
        dialogHintShow:false         //弹窗默认关闭 
    },
    mutations: {
        //关闭弹窗
        closeD(state){
            state.dialogHintShow = !state.dialogHintShow;
        },
    },
    getters: {
        //获取弹窗状态
        getD(state){    
            return state.dialogHintShow;
        }
    },
    modules: {
        storesearch: storesearch,
        storehint: storehint,
    }
})

// 导出 store 对象
export default store
