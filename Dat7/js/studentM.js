let staff = JSON.parse(localStorage.getItem("staff"));
let externalStaff = JSON.parse(localStorage.getItem("externalStaff"));
/*去除本地存储的值并转换为JSON数组 */
let tabnum = 1;
let isdel;
let In;
let deletelist = [];
/* 待删除数组下标*/
let deletelist2 = [];
/* 待删除数组内容*/
let Bdeletelist=[];
let Bdeletelist2=[];
let myloadd = (staff) => {
    if (staff) {
        let i = 0;
        Object.values(staff).forEach((item, index) => { /*遍历json数组 */
            if (index >= 10) {
                return;
            }
            let table = $("#table-main")[0];

            table.innerHTML += `<tr onclick="details(${index})">
                                    <td><span class="checkBox" onclick="checkbox(${index})"></span></td>
                                    <td>${item.name}</td>
                                    <td>${item.tel}</td>
                                    <td>${item.man}</td>
                                    <td>${item.personnelStatus}</td>
                                    <td>${item.remarks}</td>
                                    <td><span class='editText' onclick='editText(${index})'>编辑</span><span class='delText' onclick='delText(${index})'>删除</span></td>
                                </tr>`
        });
        /*动态添加表节点 */
        $("#data").css("display", "none");
        // document.getElementById("data").style.display = "none";
        /*本地存储有值时，隐藏无数据图标 */

        let slength = staff.length;
        if (slength <= 10) {
            $("#page").css("visibility", "hidden");

            // document.getElementById("page").style.visibility = "hidden";
            /*小于十条信息隐藏页码 */
        }
        let num;
        if (slength > 10) {
            $("#page").css("visibility", "visible");

            // document.getElementById("page").style.visibility = "visible";
            /*大于十条信息显示页码 */
            let pagelength = parseInt(slength / 10);
            /*计算几页 */
            for (let i = 1; i <= pagelength; i++) {
                num = i + 1;
                $("#page")[0].innerHTML += `<span class='pageItem' onclick='jump(${num})'>${num}</span>`;

            }
            $("#page")[0].innerHTML += "<span class='pageItem'>下一页</span>";


        }
        color();
    }
    else {
        $("#data").css("display", "block");
        // document.getElementById("data").style.display = "block";
        /*本地存储没有值时，显示无数据图标 */
        $("#page").css("visibility", "hidden");
        // document.getElementById("page").style.visibility = "hidden";
        /*本地存储没有值时，显示页码 */
    }
}

let jump = (num) => {
    // 跳转页面
    let pageItem = $(".pageItem");
    for (let index = 0; index <= pageItem.length - 1; index++) {
        pageItem.eq(index).attr("class", "pageItem");
    }
    pageItem.eq(num).attr("class", "pageItem current");
    cleartable();
    if (tabnum==1){
        Object.values(staff).forEach((item, index) => { /*遍历json数组 */

            if (index >= (num * 10)) {    /*如果大于页数*10则不再添加信息 */
                return;
            }

            if (index >= ((num - 1) * 10)) {
                let table = $(".table-main")[0];
                table.innerHTML += `<tr  onclick="details(${index})">
                                    <td><span class="checkBox" onclick="checkbox(${index})"></span></td>
                                    <td>${item.name}</td>
                                    <td>${item.tel}</td>
                                    <td>${item.man}</td>
                                    <td>${item.personnelStatus}</td>
                                    <td>${item.remarks}</td>
                                    <td><span class='editText' onclick='editText(${index})'>编辑</span><span class='delText' onclick='delText(${index})'>删除</span></td>
                                </tr>`
            }

        });
    }
    if (tabnum==2){
        Object.values(externalStaff).forEach((item, index) => { /*遍历json数组 */

            if (index >= (num * 10)) {    /*如果大于页数*10则不再添加信息 */
                return;
            }

            if (index >= ((num - 1) * 10)) {
                let table = $(".table-main")[0];
                table.innerHTML += `<tr  onclick="details(${index})">
                                    <td><span class="checkBox" onclick="checkbox(${index})"></span></td>
                                    <td>${item.name}</td>
                                    <td>${item.tel}</td>
                                    <td>${item.man}</td>
                                    <td>${item.personnelStatus}</td>
                                    <td>${item.remarks}</td>
                                    <td><span class='editText' onclick='editText(${index})'>编辑</span><span class='delText' onclick='delText(${index})'>删除</span></td>
                                </tr>`
            }

        });
    }
    color();
}

let toNew = () => {  /*新建员工跳转 */
    $("#new .bar-font").html("当前位置>新建")
    $(".cc").html("<button class=\"button\" onclick=\"submit(" + tabnum + ")\">\n" +
        "                        <span class=\"bt-font\">提交</span>\n" +
        "                    </button>");
    $("#list,#list-main").css({display: "none"});
    $("#new,#new-main").css({display: "block"});
}

let delText = (index) => {/*删除数据 */
    $("#popup").css("visibility", "visible");
    In = index;
}
let editText = (index) => {  /* 编辑数据 */

    $("#new .bar-font").html("当前位置>编辑")
    $(".cc").html("<button class=\"button\" onclick=\"submit(" + tabnum + "," + index + ")\">\n" +
        "                        <span class=\"bt-font\">提交</span>\n" +
        "                    </button>");
    if (tabnum == 1) {
        // 回填数据
        $("#name").val(staff[index].name);
        $("#tel").val(staff[index].tel);
        $("#gender").val(staff[index].man);
        $("#personnelStatus").val(staff[index].personnelStatus);
        $("#remarks").val(staff[index].remarks);
    }
    if (tabnum == 2) {
        $("#name").val(externalStaff[index].name);
        $("#tel").val(externalStaff[index].tel);
        $("#gender").val(externalStaff[index].man);
        $("#personnelStatus").val(externalStaff[index].personnelStatus);
        $("#remarks").val(externalStaff[index].remarks);
    }

    $("#list,#list-main").hide();
    $("#new,#new-main").show();

}
let details = (index) => {
    // 查看详情
    $("#details,#details-main").show();
    $("#list,#list-main").hide();
    $("#details-main .inp").eq(0).text(staff[index].name);
    $("#details-main .inp").eq(1).text(staff[index].tel);
    $("#details-main .inp").eq(2).text(staff[index].man);
    $("#details-main .inp").eq(3).text(staff[index].personnelStatus);
    $("#details-main .inp").eq(4).text(staff[index].remarks);

}

let promise = (index) => {
    new Promise((res, rej) => {
        setInterval(() => { /*等待函数 isdel=1删除操作 isdel=0 返回 */
            if (isdel === 1) {
                res();
            }
            if (isdel === 0) {
                rej();
            }
        }, 100)
    }).then(() => {

        if (tabnum == 1) {
            staff.splice(index, 1);
            localStorage.setItem("staff", JSON.stringify(staff));
        }

        if (tabnum == 2) {
            externalStaff.splice(index, 1);
            localStorage.setItem("externalStaff", JSON.stringify(externalStaff));
        }
        $("#popup").css("visibility", "hidden");
        location.reload();
    }).catch(() => {
        $("#popup").css("visibility", "hidden");
        // document.getElementById("popup").style.visibility = "hidden";
    });
}

let confirm = () => {
    isdel = 1;
    promise(In);
}

let cancel = () => {
    isdel = 0;
    promise(In);
}

let search = () => {

    let searchfield = $("#search").val();
    let result = [];
    if (staff) {
        staff.forEach((item) => { /* 符合查询条件的信息添加到result数组中 */
            if (item.name.includes(searchfield)) {
                result.push(item);
            }
        })
    }

    cleartable();
    myloadd(result);
}

let cleartable = () => {    /* 清空数据 */
    let table = $("#table-main")[0];

    table.innerHTML = "<tr><th><span class=\"checkBox\" onclick=\"checkbox()\"></span></th><th>姓名</th><th>手机号</th><th>性别</th><th>人事状态</th><th>备注</th><th>操作</th></tr>"
}

let clearpage=()=>{ /* 清空页码 */
    $("#page")[0].innerHTML=`<span class="pageItem disabled">上一页</span><span id="pageItem-1" class="pageItem current " onclick="jump(1)">1</span>`
}

let checkbox = (index = "a") => { /* 复选框 */
    event.stopPropagation();

    if (index === "a") {
        $("th .checkBox").toggleClass("boxbg");
        $("td .checkBox").toggleClass("boxbg");

    }
    else {  /* 这里真是太复杂了 查询到td下所有的第一个span 却不能对查询结果的第一个节点进行操作 只能写这么一大串 查询结果只有inHTML方法*/
        console.log(index)
        let pageindex = index;
        while (pageindex >= 10) {
            pageindex = pageindex - 10;
        }
        let checkbox = $("tr ").get(pageindex + 1).firstElementChild;

        let isbg = `<span class="checkBox boxbg" onclick="checkbox(${index})"></span>`
        let nobg = `<span class="checkBox" onclick="checkbox(${index})"></span>`
        if (checkbox.innerHTML == nobg) {
            checkbox.innerHTML = `<span class="checkBox boxbg" onclick="checkbox(${index})"></span>`
            console.log(checkbox)
            if (tabnum==1){
                deletelist.push(index);
            }
            if (tabnum==2){
                Bdeletelist.push(index);
            }
            return;
        }
        if (checkbox.innerHTML == isbg) {
            checkbox.innerHTML = `<span class="checkBox" onclick="checkbox(${index})"></span>`
            console.log(checkbox)
        }
    }
}

let deleteall = () => {     /* 批量删除 暂时没做跨页 有点麻烦  */
    $(".popup").css("visibility", "visible");
    if (tabnum==1){
        $(".popup-font").html("你确定删除选中的" + deletelist.length + "条数据吗？")
    }
    if (tabnum==2){
        $(".popup-font").html("你确定删除选中的" + Bdeletelist.length + "条数据吗？")
    }
    new Promise((res, rej) => {
        setInterval(() => { /*等待函数 isdel=1删除操作 isdel=0 返回 */
            if (isdel === 1) {
                res();
            }
            if (isdel === 0) {
                rej();
            }
        }, 100)
    }).then(() => {
        $("#popup").css("visibility", "hidden");
        clearAllData();
    }).catch(() => {
        $("#popup").css("visibility", "hidden");
    });


}

let clearAllData = () => {
    // 清楚数据
    if (tabnum == 1) {
        staff.forEach((item, index) => {    // 遍历数组1找到相同的数据存入数组2

            let f = (v) => {
                return v == index;
            }
            if (deletelist.find(f, index) != undefined) {
                let del = staff.slice(index, index + 1);
                deletelist2 = deletelist2.concat(del);
            }
        })
        let i = 1;
        let staff2 = [];
        Object.assign(staff2, staff);
        staff.forEach((item, index) => {


            deletelist2.forEach((item2, index2) => {

                if (item == item2) {
                    let j = index;
                    if (i > 1) {
                        j = j - i + 1;
                    }
                    staff2.splice(j, 1);
                    i++;
                }
            })

        })
        localStorage.setItem("staff", JSON.stringify(staff2));

        location.reload();
    }
    if (tabnum == 2) {
        externalStaff.forEach((item, index) => {
            let f = (v) => {
                return v == index;
            }
            if (Bdeletelist.find(f, index) != undefined) {
                let del = externalStaff.slice(index, index + 1);
                Bdeletelist2 = Bdeletelist2.concat(del);
            }
        })
        let i = 1;
        let externalStaff2 = [];
        Object.assign(externalStaff2, externalStaff);
        externalStaff.forEach((item, index) => {

            Bdeletelist2.forEach((item2, index2) => {

                if (item == item2) {
                    let j = index;
                    if (i > 1) {
                        j = j - i + 1;
                    }
                    externalStaff2.splice(j, 1);
                    i++;
                }
            })

        })
        localStorage.setItem("externalStaff", JSON.stringify(externalStaff2));

        location.reload();
    }


}

let tab = (a) => {
    // 切换Tab
    if (a == 1) {
        $(".tabA").css("background-color", "rgb(229,229,229)");
        $(".tabB").css("background-color", "#fff");
        tabnum = 1;
        cleartable();
        clearpage();
        myloadd(staff);
    }
    if (a == 2) {
        $(".tabB").css("background-color", "rgb(229,229,229)");
        $(".tabA").css("background-color", "#fff");
        cleartable();
        clearpage();
        myloadd(externalStaff)
        tabnum = 2;
    }
}

let color=()=>{
    // 加载表格背景
    let tr = $("#list-main tr");
    let trLength = tr.length;
    for (let i = 0; i < trLength; i++) {
        if (i % 2 == 1) {
            tr.eq(i).css("background", "#F8F8FF");
        }
    }
}


/* 模拟数据
aaa=[{name: "1", personnelStatus: "在职", tel: "1", man: "男", remarks: ""},
{name: "2", personnelStatus: "在职", tel: "1", man: "男", remarks: ""},
{name: "3", personnelStatus: "在职", tel: "1", man: "男", remarks: ""},
{name: "4", personnelStatus: "在职", tel: "1", man: "男", remarks: ""},
{name: "51", personnelStatus: "在职", tel: "1", man: "男", remarks: ""},
{name: "6", personnelStatus: "在职", tel: "1", man: "男", remarks: ""},
{name: "7", personnelStatus: "在职", tel: "1", man: "男", remarks: ""},
{name: "8", personnelStatus: "在职", tel: "1", man: "男", remarks: ""},
{name: "9", personnelStatus: "在职", tel: "1", man: "男", remarks: ""},
{name: "10", personnelStatus: "在职", tel: "1", man: "男", remarks: ""},
{name: "11", personnelStatus: "在职", tel: "1", man: "男", remarks: ""},
{name: "12", personnelStatus: "在职", tel: "1", man: "男", remarks: ""},
{name: "13", personnelStatus: "在职", tel: "1", man: "男", remarks: ""},
{name: "14", personnelStatus: "在职", tel: "1", man: "男", remarks: ""}]
 localStorage.setItem("staff",JSON.stringify(aaa) );
*/


if (staff == undefined || staff == "") {
    $(document).ready(myloadd());
}
else {
    let staff = JSON.parse(localStorage.getItem("staff"));
    // 重新获取
    let externalStaff = JSON.parse(localStorage.getItem("externalStaff"));

    $(document).ready(myloadd(staff));
    color();




}