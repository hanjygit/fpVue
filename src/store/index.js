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
    }
})

// 导出 store 对象
export default store
