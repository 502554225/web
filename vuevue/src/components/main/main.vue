<template>
  <div >
    <div class="title">
      <span class="title-font">机构管理系统</span>
      <span class="tou"><img src="../../img/pic.png" alt=""></span>
    </div>

    <div class="side">
      <div class="logo"></div>
      <ul class="list">
        <li>
          <div class="clearfix">
            <div class="img img-1"></div>

            <span class="name">首页</span>
          </div>

        </li>
        <li>
          <div class="clearfix">
            <div class="img img-2"></div>

            <span class="name">员工管理</span>
          </div>
        </li>
        <li>
          <div class="clearfix">
            <div class="img img-2"></div>

            <span class="name">学员管理</span>
          </div>
        </li>
        <li>
          <div class="clearfix">
            <div class="img img-2"></div>

            <span class="name">班级管理</span>
          </div>
        </li>
        <li>
          <div class="clearfix">
            <div class="img img-2"></div>

            <span class="name">学分管理</span>
          </div>
        </li>
        <li>
          <div class="clearfix">
            <div class="img img-2"></div>

            <span class="name">寝室管理</span>
          </div>
        </li>
      </ul>
    </div>

    <div id="list" class="bar">
      <span class="bar-font">当前位置：员工>员工列表</span>
    </div>

    <router-view></router-view>

    <div v-show="isDelete||isModify||isSuccess||isError" id="popup" class="popup">
      <delete-popup v-show="isDelete"></delete-popup>
      <modify-popup v-show="isModify"></modify-popup>
      <success-popup v-show="isSuccess"></success-popup>
      <error-popup v-show="isError"></error-popup>
    </div>

  </div>
</template>

<script>
  import deletePopup from '../../components/popup/deletePopup.vue'
  import modifyPopup from '../../components/popup/modifyPopup.vue'
  import successPopup from '../../components/popup/successPopup.vue'
  import errorPopup from '../../components/popup/errorPopup.vue'
  export default {
    name: 'App',
    computed: {
      isDelete: {
        get() {
          return this.$store.state.isDelete
        },
        set(newdata) {
          this.$store.state.isDelete = newdata
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
      isSuccess: {
        get() {
          return this.$store.state.isSuccess
        },
        set(newdata) {
          this.$store.state.isSuccess = newdata
        }
      },
      isError: {
        get() {
          return this.$store.state.isError
        },
        set(newdata) {
          this.$store.state.isError = newdata
        }
      },

    },
    components: {
      deletePopup,
      modifyPopup,
      errorPopup,
      successPopup
    },
    // created(){
    //   this.$http.get('/api/list').then((response)=>{
    //     console.log("调用了API了")
    //     response=response.body;
    //     if (response.errno===0){
    //       this.$store.state.staff=response.data;
    //     }
    //   })
    //
    // },
  }
</script>

