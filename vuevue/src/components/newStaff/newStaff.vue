<template xmlns:v-model="http://www.w3.org/1999/xhtml">
  <div id="new-main" class="pm-main">
    <div class="table2">
      <router-link to="/">
        <button class="bt-white caozuo">
        <span class="bt-white-font">返回</span>
        </button>
      </router-link>
      <div class="tablecc">
        <table class="tb">
          <tr>
            <td class="na"><span class="x">*</span><span>姓名</span></td>
            <td class="inp">
              <input v-model="aStaff.name" id="name" type="text">
              <span v-show=isname id="noName" class="errors">请输入姓名</span>
            </td>
            <td class="na"></td>
            <td class="inp"></td>
          </tr>
          <tr>
            <td class="na">
              <span class="x">*</span>
              <span>手机号</span>

            </td>
            <td class="inp">
              <input v-model="aStaff.tel" id="tel" type="text">
              <span v-show=istel id="noTel" class="errors">请输入手机号</span>
              <!--<span id="errorTel" class="errors">请输入正确的手机号</span>-->
            </td>

          </tr>
          <tr class="xing">
            <td class="na"><span class="x">*</span><span>性别</span></td>
            <td class="inp">
              <input v-model:checked="aStaff.man" id="man" name="gender" type="radio" value="1">
              <span>男</span>
              <input v-model:checked="aStaff.man" id="woman" name="gender" type="radio" value="0">
              <span>女</span>
            </td>
            <td class="na"></td>
            <td class="inp"></td>

          </tr>
          <tr>
            <td class="na"><span class="x">*</span><span>人事状态</span></td>
            <td class="inp">
              <select v-model="aStaff.personnelStatus" id="personnelStatus">
                <option value="在职">在职</option>
                <option value="离职">离职</option>
                <option value="休假">休假</option>
              </select></td>
            <td class="na"></td>
            <td class="inp"></td>
          </tr>
          <tr>
            <td class="na remarks"><span>备注</span></td>
            <td class="inp remarks"><textarea v-model="aStaff.remarks" id="remarks"></textarea></td>
            <td class="na"></td>
            <td class="inp"></td>
          </tr>

          <tr>
            <td class="cc">
              <button class="button" v-on:click="submit">
                <span class="bt-font">提交</span>
              </button>
            </td>

          </tr>
        </table>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "newStaff",
    data() {
      return {
        isname: false,
        istel: false,
        aStaff: {
          id: 1,
          name: '',
          personnelStatus: '在职',
          tel: '',
          man: '1',
          remarks: '',
          isChecked: false
        },
      }
    },
    mounted() {
      setInterval(()=>{
        this.$store.commit('updataStaff',this.staff);
      })
      console.log(this.$store.state.staff)

    },
    methods: {
      submit: function () {
        if (this.aStaff.name) {
          this.isname = false
        } else {
          this.isname = true
          return
        }
        if (this.aStaff.tel) {
          this.istel = false
        } else {
          this.istel = true
          return
        }
        let astaff = {}
        Object.assign(astaff, this.aStaff)
        this.staff.push(astaff)
        console.log(this.$store.state.staff)
        this.staff.id++
        this.$router.replace('/')
        this.clear()
      },
      clear: function () {
        this.aStaff.name = ''
        this.aStaff.personnelStatus = '在职'
        this.aStaff.tel = ''
        this.aStaff.man = '1'
        this.aStaff.remarks = ''
      },
    },


    computed: {
      staff: {
        get() {
          return this.$store.state.staff
        },
        set(newValue) {
          this.$store.state.staff = newValue;
        }
      },


    }
  }
</script>

<style scoped>

</style>
