<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div v-show=tolist id="list-main" class="pm-main">

    <div class="table">
      <button class="button caozuo" >
        <span class="bt-font">
          <router-link to="/newStaff">新建员工</router-link>
        </span>
      </button>
      <button id="delete" class="button caozuo" v-on:click="deleteall">
        <span class="bt-font">批量删除</span>
      </button>
      <div class="search">
        <input  id="search" type="text" class="search-input">
        <button class="search-button"><span class="search-img"></span></button>
      </div>
      <div class="tab">
        <span class="tabA bt-white" onclick="tab(1)">内部员工</span><span class="tabB bt-white" onclick="tab(2)">外部员工</span>
      </div>
      <div class="tablec">
        <table id="table-main" class="table-main">
          <tr>
            <th><span v-bind:class="isCheckedAll ? 'boxbg' : ''" class="checkBox" v-on:click="checkbox(-1)"></span></th>
            <th>姓名</th>
            <th>手机号</th>
            <th>性别</th>
            <th>人事状态</th>
            <th>备注</th>
            <th>操作</th>
          </tr>
          <tr v-bind:class="toStaff[index].isChecked ? 'color' : '' " v-for="(item,index) in toStaff">
            <td><span class="checkBox" v-bind:class="item.isChecked ? 'boxbg' : ''" v-on:click="checkbox(index)"></span>

            <td>{{item.name}}</td>
            <td>{{item.tel}}</td>
            <td>{{item.man}}</td>
            <td>{{item.personnelStatus}}</td>
            <td>{{item.remarks}}</td>
            <td><span class='editText' onclick='editText()'>编辑</span><span class='delText'
                                                                           v-on:click="delText(index)">删除</span>
            </td>
          </tr>

        </table>

      </div>
      <div v-show=isdata id="data" class="data">
        <div class="nodata"></div>
        <div class="nodata-font">无数据</div>
      </div>
      <div v-show=bitdata id="page" class="page">
        <span class="pageItem disabled">上一页</span>
        <span id="pageItem-1" class="pageItem current " onclick="jump(1)">1</span>
      </div>

    </div>
  </div>

</template>

<script src="./list.js">

</script>

<style scoped>

</style>
<link rel="stylesheet" href="../css/bt.css">
