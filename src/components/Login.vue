<template>
  <div id="login" :class="[flag?'a':'b']">
    <div style="position: relative;top: 60%;" v-if="flag">
      <mu-flex align-items="center" justify-content="around" direction="column" style="width: 100%;height:1.4rem;">
        <mu-button round color="#ff3a3a" @click="login(1)">手机号登录</mu-button>
        <mu-button round color="white" @click="login(2)">注册</mu-button>
        <a href="">
          <span>游客登录
            <i>&#155</i>
          </span>
        </a>
      </mu-flex>
      <login />
    </div>
    <logining v-if="!flag" :id="id" @getBack="getBack"/>
  </div>
</template>

<script>
import login from '../common/login'
import logining from '../common/logining'
export default {
  name: 'HelloWorld',
  components:{
    login,
    logining
  },
  data () {
    return {
      flag:true,
      id:0
    }
  },
  methods:{
    login(id){
      this.id = id;
      this.flag = false;
    },
    getBack(){
      this.flag = !this.flag;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.a{
  background-image:url(../assets/images/login_bg.png);
}
.b{
  background-image:url(../assets/images/bg.png);
}
#login{
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  .mu-button{
    width: 85%;
    box-shadow: none;
  }
  .mu-button:nth-child(2){
    border:1px solid #ff3a3a;
    color: #ff3a3a;
  }
  a{
    margin-top: -0.2rem;
    span{
      font-size: 12px;
      color: #999;
      i{
        font-size: 16px;
      }
    }
  }
}
</style>
