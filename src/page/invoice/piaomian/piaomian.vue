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
        height: 100%;
    }
</style>