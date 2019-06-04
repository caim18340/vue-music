<!--  -->
<template>
  <div class="index">
      <Header />
      <router-view></router-view>
  </div>
</template>

<script>
import Header from '../../components/Header'
import Swiper from '../../common/Swiper'
export default {
  data () {
    return {
       
    };
  },
  components: {
      Header,
      Swiper
  },
  computed:{
      
  },
  created(){
      
  },
  methods:{
    
  },
  mounted(){
    
  },
  watch:{
      
  }
}

</script>
<style lang='less' scoped>
.index{
  background-image:url(../../assets/images/bg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
}
</style>