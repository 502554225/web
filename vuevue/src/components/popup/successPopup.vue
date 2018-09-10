<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="popup-main">
    <div class="popup-logo"></div>
    <span class="popup-font">操作成功！</span>
    <div class="logo-close" v-on:click="no"></div>
  </div>
</template>

<script>
  export default {
    name: "successPopup",
    computed: {
      isSuccess: {
        get() {
          return this.$store.state.isSuccess
        },
        set(newdata) {
          this.$store.state.isSuccess = newdata
        }
      }
    },
    methods: {
      no: function () {
        this.isSuccess = false
      },
    },

  }
</script>

<style scoped>
  .popup-main{
    padding-top: 70px;
  }
  .popup-font{
    width: auto;
    text-align: center;
    font-size: 16px;
  }
  .popup-logo{
    background:url("../../img/success.png");
  }
</style>
