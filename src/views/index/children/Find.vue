<!--  -->
<template>
    <div>
      <Swiper />
      <mu-flex align-items="center" justify-content="around" style="width: 100%;height:.9rem;border-bottom:1px solid #d4b8bd">
        <div class="tab">
          <p>
            <i class="material-icons">today</i>
          </p>
          <span>每日推荐</span>
        </div>
        <div class="tab">
          <p>
            <i class="material-icons">queue_music</i>
          </p>
          <span>歌  单</span>
        </div>
        <div class="tab">
          <p>
            <i class="material-icons">radio</i>
          </p>
          <span>电  台</span>
        </div>
        <div class="tab">
          <p>
            <i class="material-icons">insert_chart_outlined</i>
          </p>
          <span>排行榜</span>
        </div>
      </mu-flex>
      <div class="top">
        <mu-flex align-items="center" justify-content="between" style="width: 100%;height:.3rem;">
          <h3>推荐歌单</h3>
          <mu-pagination raised :page-size="6" :total="30" :current.sync="current"></mu-pagination>
        </mu-flex>
        <div style="overflow: hidden;position:relative;width:100%;height:3rem;">
          <div class="middle" :style="{left:-(current - 1)*100 + '%'}">
            <mu-flex direction="column" wrap="wrap" v-for="(item,index) in recommend" :key="index" align-items="center" justify-content="around" style="width: 100%;height:2.8rem;float:left;">
              <div v-for="(img,idx) in item" :key="idx" style="width:1rem;">
                <p>
                  <img :src="img.picUrl" :alt="img.id">
                </p>
                <span>{{img.name}}</span>
              </div>
            </mu-flex>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Swiper from '@/common/Swiper'
export default {
  data () {
    return {
        current: 1
    };
  },
  computed:{
      recommend(){
          return this.$store.state.music.recommend
      }
  },
  components: {
      Swiper
  },
  created(){
    this.$store.dispatch("getRecommend")
  },
  mounted(){
    
  },
  methods:{

  }
}

</script>
<style lang='less' scoped>
.tab{
      width: .6rem;
    p{
      height: .6rem;
      border-radius: 50%;
      background: #ff3a3a;
      display: flex;
      align-items: center;
      justify-content: center;
      i{
        font-size: 30px;
        color: #fff;
      }
    }
    span{
      padding-top: 3px;
      display: block;
      width: .6rem;
      font-size: 14px;
      text-align: center;
      color: #ff3a3a;
    }
}
.top{
  width: 100%;
  h3{
    font-size: 14px;
    color: #ff3a3a;
    padding-left: 10px;
  }
  .mu-pagination{
    padding-right: 10px;
  }
  .middle{
    width: 500%;
    height: 2.8rem;
    display: flex;
    position: absolute;
    transition: left 2s;
    top:.1rem;
    p{
      border-radius: 8px;
      width: 1rem;
      height: 1rem;
      overflow: hidden;
    }
    img{
      display: block;
      width: 100%;
      height: 100%;
    }
    span{
      display: block;
      width: 1rem;
      height: .4rem;
      line-height: .2rem;
      font-size: 10px;
      word-wrap: break-word;
      word-break: normal;
      overflow: hidden;  
      text-overflow: ellipsis;  
      color: rgba(0, 0, 0, .5);
    }
  }
}
</style>