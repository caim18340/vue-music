<!--  -->
<template>
    <mu-flex class="banner" align-items="center" justify-content="around" style="width: 100%;height:1.5rem;">
      <mu-carousel hide-controls>
        <mu-carousel-item v-for="(item,index) in banners" :key="index">
            <img :src="item.imageUrl">
            <span :style="{background:item.titleColor}">{{item.typeTitle}}</span>
        </mu-carousel-item>
      </mu-carousel>
    </mu-flex>
</template>
<script>
export default {
  data () {
    return {
      active: 0
    };
  },
  computed:{
      banners(){
          return this.$store.state.music.banners
      }
  },
  created(){
    this.$store.dispatch("getBanner")
  },
  methods:{
    changeActive (index) {
      this.active = index;
    }
  },
  mounted(){
    this.$nextTick(()=>{
        this.banners = this.$store.state.music.banners;
    });
  }
}

</script>
<style lang='less' scoped>
.mu-carousel{
  width:96%;
  height: 90%;
  border-radius: 8px;
  overflow: hidden;
  .mu-carousel-item{
    span{
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 2px 12px;
      border-radius: 8px 0 0 0;
      color: #fff;
      font-size: 14px;
    }
  }
  img{
    width: 100%;
    height: 100%;
  }
}
</style>