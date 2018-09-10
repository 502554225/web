<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="popup-main">
    <div class="popup-logo"></div>
    <span class="popup-font">当前操作将删除这条数据，确定删除吗？</span>
    <div class="bt-container">
      <button class="button p-button" v-on:click="yes">
        <span class="bt-font">确定删除</span>
      </button>
      <button class="button bt-white p-button" v-on:click="no">
        <span class="bt-white-font">取消操作</span></button>
    </div>
    <div class="logo-close" v-on:click="no"></div>
  </div>
</template>

<script>
  export default {
    name: "deletePopup",
    computed: {
      isDelete: {
        get() {
          return this.$store.state.isDelete
        },
        set(newdata) {
          this.$store.state.isDelete = newdata
        }
      },
      isSuccess: {
        get() {
          return this.$store.state.isSuccess
        },
        set(newdata) {
          this.$store.state.isSuccess = newdata
        }
      },
      isCheckedList(){
        return this.$store.getters.isCheckedList
      },
    },
    methods: {
      no: function () {
        this.isDelete = false
      },
      yes: function () {
        this.$store.state.staff=this.isCheckedList
        this.isDelete = false
        this.isSuccess = true
      }
    },

  }
</script>

<style scoped>

</style>
