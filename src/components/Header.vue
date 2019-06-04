<!--  -->
<template>
    <mu-flex class="tab" align-items="center" justify-content="between" style="width: 100%;height:.5rem;background: rgba(255,58,58,.5);">
        <router-link to="/index/menu" active-class="active" class="material-icons">format_indent_decrease</router-link>
        <router-link to="/index/my" active-class="active" class="material-icons">我的</router-link>
        <router-link to="/index/find" active-class="active" class="material-icons">发现</router-link>
        <router-link to="/index/mv" active-class="active" class="material-icons">视频</router-link>
        <router-link to="/index/search" active-class="active" class="material-icons">format_paint</router-link>
    </mu-flex>
</template>

<script>
export default {
  data () {
    return {
    };
  }
}

</script>
<style lang='less' scoped>
.tab{
    .active{
        color: #ccc;
    }
    a{
        color: #fff;
    }
    a:nth-child(1),a:nth-child(5){
        display: block;
        width: .6rem;
        height: 100%;
        line-height: .5rem;
        text-align: center;
        font-size: 35px;
    }
    a:nth-child(2),a:nth-child(3),a:nth-child(4){
        font-size: 16px;    
    }
}
</style>