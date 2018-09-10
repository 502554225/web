<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <header class="loginHeader">
      <img src="../../img/logo.png" alt="北京市八一学校"/>
    </header>
    <div class="loginWrap clearFix">
      <!-- 登录结构开始-->
      <div class="boxLayout">
        <h3 class="loginTitle">用户登录</h3>
        <div class="loginBox">
          <input v-model="username" type="text" class="inputStyle user" placeholder="请输入用户名"/>
          <span v-show="nameError ? 'false' : 'true' " class="errorTips">不能为空</span>
        </div>
        <div class="loginBox">
          <input v-model="password" type="text" class="inputStyle passWord error" placeholder="请输入用户名"/>
          <span v-show="pwdError ? 'false' : 'true' " class="errorTips">不能为空</span>
        </div>
        <button class="button" type="button" v-on:click="login" style="width: 100%;height: 40px;"><span class="bt-font">登录</span></button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'login',
    date(){
      return{
        username:'',
        password:'',
      }
    },
    computed:{
      nameError(){
          return this.username
      },
      pwdError(){
          return this.password
      },
    },
    methods:{

      login:function () {

        if ((this.nameError===false)&&(this.pwdError===false)) {
          this.$router.replace('/main')
        }
      }
    }
  }
</script>
