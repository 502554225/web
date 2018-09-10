<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id="list-main" class="pm-main">

    <div class="table">
      <!--<router-link to="/newStaff">-->
      <button class="button caozuo" v-on:click="modifyAll">
        <span class="bt-font">批量修改</span>
      </button>
      <!--</router-link>-->
      <button id="delete" class="button caozuo" v-on:click="deleteall">
        <span class="bt-font">批量删除</span>
      </button>
      <div class="search">
        <input id="search" type="text" class="search-input">
        <button class="search-button"><span class="search-img"></span></button>
      </div>
      <div class="tab">
        <span class="tabA bt-white" onclick="tab(1)">内部员工</span><span class="tabB bt-white" onclick="tab(2)">外部员工</span>
      </div>
      <div class="tablec">
        <table id="table-main" class="table-main">
          <tr>
            <th  width="30"><span v-bind:class="isCheckedAll ? 'boxbg' : ''" class="checkBox" v-on:click="checkbox(-1)"></span></th>
            <th>姓名</th>
            <th>手机号</th>
            <th>所属部门</th>
            <th>入职时间</th>
            <th>人事状态</th>
            <th>机构账号</th>
            <th>操作</th>
          </tr>
          <tr v-bind:class="toStaff[index].isChecked ? 'color' : '' " v-for="(item,index) in toStaff">
            <td><span class="checkBox" v-bind:class="item.isChecked ? 'boxbg' : ''" v-on:click="checkbox(index)"></span>

            <td>{{item.name}}</td>
            <td>{{item.tel}}</td>
            <td>{{item.bu}}</td>
            <td>{{item.startDate}}</td>
            <td>{{item.personnelStatus}}</td>
            <td>{{item.position}}</td>
            <td><span class='editText' onclick='editText()'>编辑</span><span class='delText' v-on:click="delText(index)">删除</span>
            </td>
          </tr>

        </table>

      </div>
      <div v-show=isdata id="data" class="data">
        <div class="nodata"></div>
        <div class="nodata-font">无数据</div>
      </div>
      <page></page>

    </div>
  </div>

</template>

<script>
  import page from '../page/page'

  export default {
    name: "list",
    data() {
      return {}
    },
    methods: {
      delText: function (index) {
        this.staff.splice(index, 1)
        console.log(this.$store.state.staff)
      },
      checkbox: function (index) {
        if (index < 0) {
          this.isCheckedAll = !this.isCheckedAll
          this.staff.forEach((item) => {
            item.isChecked = this.isCheckedAll
          })
          return
        }
        this.staff[index].isChecked = !this.staff[index].isChecked

        let isTrue = 1
        this.staff.forEach((item) => {
          if (item.isChecked == false) {
            this.isCheckedAll = false
            isTrue = 0
          }
        })
        if (isTrue) {
          this.isCheckedAll = true
        }
      },
      deleteall: function () {
        if (this.isCheckedList===false){
          this.isError=true
          return
        }
        else {
          this.isDelete = true
        }
      },
      modifyAll: function () {
        if (this.isCheckedList===false){
          this.isError=true
          return
        }
        else {
           this.isModify = true
        }
      }
    },
    mounted() {
      // setInterval(()=>{
      //   this.$store.commit('updateState',);
      // })
      console.log(this.$store.state.staff)

    },
    computed: {
      isCheckedList(){
        return this.$store.getters.isCheckedList
      },
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
      toStaff() {
        return this.$store.getters.toStaff;
      },
      isdata() {
        // 判断有无数据
        if (this.staff) {
          return false
        } else return true
      },
      bitdata() {
        // 判断是否需要分页
        let length = this.staff.length
        console.log(length)
        if (length > 10) {
          return true
        } else {
          return false
        }
      },
      isCheckedAll: {
        get() {
          return this.$store.state.isCheckedAll
        },
        set(newValue) {
          this.$store.state.isCheckedAll = newValue
        }

      },
      staff: {
        get() {
          return this.$store.state.staff
        },
        set(newValue) {
          this.$store.state.staff = newValue;
        }
      },
    },
    components: {
      page
    },

  }
</script>

<style scoped>

</style>
