<template>

  <div id="app">
    <div class="title">
      <span class="title-font">机构管理系统</span>
      <span class="tou"><img src="./img/pic.png" alt=""></span>
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

    <div id="popup" class="popup">
      <div class="popup-main">
        <div class="popup-logo"></div>
        <span class="popup-font">当前操作将删除这条数据，确定删除吗？</span>
        <div class="bt-container">
          <button class="button p-button">
            <span class="bt-font">确定删除</span>
          </button>
          <button class="button bt-white p-button">
            <span class="bt-white-font">取消操作</span></button>
        </div>

        <div class="logo-close" onclick="cancel()"></div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'App',
    data() {
      return {
        staff: [],
        tonew: false,
        tolist: true,
        todetail: false,
        isCheckedAll:false,
        isname:false,
        istel:false,
        aStaff: {
          id: 1,
          name: "",
          personnelStatus: "在职",
          tel: "",
          man: "1",
          remarks: "",
          isChecked: false,
        },
        searchName: "",
        deletelist: [],
        deletelist2: [],
      };
    },
  }
</script>


