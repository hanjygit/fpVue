<!--子组件-->
<template>
    <div class="searchCommon">
        <div class="searchContent">
            <slot name="searchContent"></slot>
            <div class="searchBtn">
                <slot name="searchQueryBtn"></slot>
                <button class="bluebtn" @click="searchfpMore">
                    {{this.$store.getters.getSearchText}}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'fpsearch',
    props: ['',''],
    data() {
        return {
        }
    },
    modules: {
        
    },
    created:function(){
    },
    methods:{
        searchfpMore:function(){
            this.$store.commit('changeSearch');
        },
    }
}
</script>
<style scoped lang="less">
    .searchCommon{
        width: 100%;
        background: #FFFFFF;
        margin-bottom: 20px;
    }
    .searchContent{
        padding: 25px 20px;
        position: relative;
        .search-item{
            display: inline-block;
            vertical-align: middle;
            font-size: 0;
            padding-right: 20px;
            .search-label{
                display: inline-block;
                vertical-align: middle;
                font-size: 14px;
                min-width: 70px;
                margin-right: 2px;
                height: 30px;
                line-height: 30px;
                text-align: right;
            }
            .search-input{
                display: inline-block;
                vertical-align: middle;
                width: 160px;
                display: inline-block;
                vertical-align: middle;
                border: 1px solid #E0E0E0;
                height: 30px;
                font-size: 14px;
                line-height: 30px;
                border-radius: 4px;
                -webkit-border-radius: 4px;
                padding-left: 5px;
                box-sizing: border-box;
            }
        }
    }
    .searchBtn{
        position: absolute;
        top: 25px;
        right: 175px;
    }
    .moreSearch{
        .search-item{
            padding-top: 20px;
        }
    }
    .searchQueryBtn{
        display: inline-block;
        vertical-align: middle;
    }
</style>