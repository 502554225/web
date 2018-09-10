<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="popup-main">
    <div class="popup-logo"></div>
    <span class="popup-font">请选择需要操作的员工！</span>
    <div class="logo-close" v-on:click="no"></div>
  </div>
</template>

<script>
  export default {
    name: "errorPopup",
    computed: {
      isError: {
        get() {
          return this.$store.state.isError
        },
        set(newdata) {
          this.$store.state.isError = newdata
        }
      }
    },
    methods: {
      no: function () {
        this.isError = false
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
    background:url("../../img/tips.png");
  }
</style>
