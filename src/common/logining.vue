<!--  -->
<template>
  <div>
      <div class="header">
        <span class="material-icons" @click="getBack">
            keyboard_backspace
        </span>
        <p>手机号{{id === 1 ? '登录' : '注册'}}</p>
      </div>
      <mu-flex v-if="id === 1" class="content" align-items="center" justify-content="around" direction="column" style="width: 100%;height:2rem;">
        <mu-text-field v-model="phone" placeholder="请输入手机号" prefix="+86"></mu-text-field>
        <mu-text-field v-model="password" placeholder="请输入密码" :action-icon="visibility ? 'visibility_off' : 'visibility'" :action-click="() => (visibility = !visibility)" :type="visibility ? 'text' : 'password'"></mu-text-field>
        <mu-button round color="#ff3a3a">登录</mu-button>
      </mu-flex>
      <mu-flex v-if="id === 2" class="content" align-items="center" justify-content="around" direction="column" style="width: 100%;height:2rem;">
        <mu-text-field v-model="phone" placeholder="请输入手机号" prefix="+86"></mu-text-field>
        <mu-text-field v-model="password" placeholder="请设置登录密码，不少于6位" :action-icon="visibility ? 'visibility_off' : 'visibility'" :action-click="() => (visibility = !visibility)" :type="visibility ? 'text' : 'password'"></mu-text-field>
        <mu-button round color="#ff3a3a">下一步</mu-button>
      </mu-flex>
  </div>
</template>

<script>
export default {
  props:["id"],
  data () {
    return {
      visibility: false,
      phone:"",
      password:""
    };
  },
  created(){
    
  },
  methods:{
    getBack(){
      this.$emit("getBack")
    }
  }
}

</script>
<style lang='less' scoped>
.header{
  width: 100%;
  height: .5rem;
  color: #fff;
  background: rgba(178, 188, 203, .2);
  span{
    width: .5rem;
    height: .5rem;
    float: left;
    text-align: center;
    line-height: .5rem;
    font-size: 30px;
  }
  p{
    float: left;
    line-height: .5rem;
    font-size: 16px;
  }
}
.content{
  .mu-input:nth-child(1){
    margin-top: 10px;
  }
  .mu-input:nth-child(2){
    margin-bottom: 30px;
  }
  .mu-input{
    width: 90%;
    height: .5rem;
  }
  .mu-button{
    box-shadow: none;
    width: 90%;
  }
}
</style>