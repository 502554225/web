<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div v-show="isModify" class="popup-main ">
    <div class="p-title">
      批量设置员工所属部门
    </div>
    <div class="line"></div>
    <div class="p-mian">
      <span class="popup-font ">选择部门</span>
      <span class="popup-select">
        <select  v-model="localBu" name="" id="">
          <option value="0">请选择</option>
          <option value="STP">STP</option>
          <option value="IBU">IBU</option>
        </select>
      </span>
    </div>

    <div class="bt-container">
      <button class="button p-button" v-on:click="yes(localBu)">
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
    name: "modifyPopup",
    data(){
      return{
        localBu:'0'
      }
    },
    computed: {
      isSuccess: {
        get() {
          return this.$store.state.isSuccess
        },
        set(newdata) {
          this.$store.state.isSuccess = newdata
        }
      },
      isModify: {
        get() {
          return this.$store.state.isModify
        },
        set(newdata) {
          this.$store.state.isModify = newdata
        }
      },
      isCheckedList() {
        return this.$store.getters.isCheckedList
      },
      staff: {
        get() {
          return this.$store.state.staff
        },
        set(newdata) {
          this.$store.state.staff = newdata
        }
      },
    },
    methods: {
      no: function () {
        this.isModify = false
      },
      yes: function (bu) {
        this.staff.forEach(item=>{
          if (item.isChecked==true) {
            item.bu=bu
          }
        })
        this.isModify = false
        this.isSuccess = true
        this.staff.forEach(item=>{
          item.isChecked=false
        })
        // 修改成功后全部置位未选择
      }
    },

  }
</script>

<style scoped>
@import "modify.css";
</style>
