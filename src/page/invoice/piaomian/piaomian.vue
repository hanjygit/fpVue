<template>
    <div class="piaomian">
    <fppm></fppm>
    </div>
</template>

<script>
import fppm from 'components/fppiaomian/fppm.vue'
export default {
    name:'piaomian',
    components:{
        fppm
    },
    data() {
        return {        }
    },
    created:function(){
        //this.getListHeader();
    },
    methods:{
    },
}
</script>
<style scoped lang="less">
    .piaomian{
        width: 1040px;
        height: 606px;
        border: 1px solid #E0E0E0;
        box-shadow: 0 0 10px #ccc;
    }
</style>