<template>
    <mu-flex justify-content="around" style="width: 100%;height:1.2rem;padding-top:.1rem;">
        <div class="login">
          <p>
            <img src="../assets/images/wx.png" alt="微信">
          </p>
          <span>微信</span>
        </div>
        <div class="login">
          <p>
            <img src="../assets/images/qq.png" alt="QQ">
          </p>
          <span>QQ</span>
        </div>
        <div class="login">
          <p>
            <img src="../assets/images/wb.png" alt="微博">
          </p>
          <span>微博</span>
        </div>
        <div class="login">
          <p>
            <img src="../assets/images/wy.png" alt="网易">
          </p>
          <span>网易</span>
        </div>
      </mu-flex>
</template>
<script>
export default {
    name: 'login',
}
</script>
<style scoped lang="less">
.login{
      width: .6rem;
    p{
      height: .6rem;
      border-radius: 50%;
      border:1px solid #d0d0d0;
      text-align: center;
      line-height: .55rem;
      img{
        width: .3rem;
        height: .3rem;
      }
    }
    span{
      display: block;
      width: .6rem;
      font-size: 14px;
      text-align: center;
      color: #9a9a9a;
    }
}
</style>


