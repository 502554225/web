let staff = JSON.parse(localStorage.getItem("staff"));
/*去除本地存储的值并转换为JSON数组 */

let isdel;
let In;
let deletelist = [];
/* 待删除数组下标*/
let deletelist2 = [];
/* 待删除数组内容*/
let myloadd = (staff = [{
    name: "!",
    personnelStatus: "!",
    department: "!",
    tel: "!",
    position: "!",
    idNo: "!",
    hiredate: "!"
}]) => {
    if (staff) {
        let i = 0;
        Object.values(staff).forEach((item, index) => { /*遍历json数组 */
            if (index >= 10) {
                return;
            }
            let table = document.getElementById("table-main");
            table.innerHTML += `<tr>
                                    <td><span class="checkBox" onclick="checkbox(${index})"></span></td>
                                    <td>${item.name}</td>
                                    <td>${item.tel}</td>
                                    <td>${item.department}</td>
                                    <td>${item.hiredate}</td>
                                    <td>${item.idNo}</td>
                                    <td>${item.personnelStatus}</td>
                                    <td>${item.position}</td>
                                    <td><span class='editText' onclick='editText(${index})'>编辑</span><span class='delText' onclick='delText(${index})'>删除</span></td>
                                </tr>`
        });
        /*动态添加表节点 */
        document.getElementById("data").style.display = "none";
        /*本地存储有值时，隐藏无数据图标 */

        let slength = staff.length;
        if (slength <= 10) {
            document.getElementById("page").style.visibility = "hidden";
            /*小于十条信息隐藏页码 */
        }
        let num;
            if (slength > 10) {

            document.getElementById("page").style.visibility = "visible";
            /*大于十条信息显示页码 */
            let pagelength = parseInt(slength / 10);
            /*计算几页 */
            for (let i = 1; i <= pagelength; i++) {
                num = i + 1;
                document.getElementById("page").innerHTML += `<span class='pageItem' onclick='jump(${num})'>${num}</span>`;

            }
            document.getElementById("page").innerHTML += "<span class='pageItem'>下一页</span>";



        }
    }
    else {
        document.getElementById("data").style.display = "block";
        /*本地存储没有值时，显示无数据图标 */
        document.getElementById("page").style.visibility = "hidden";
        /*本地存储没有值时，显示页码 */
    }
}

if (staff == undefined || staff == "") {
    window.onload = myloadd();
}
else {
    window.onload = myloadd(staff);
}


let jump = (num) => {
    let pageItem = document.getElementsByClassName("pageItem");
    for (let index = 0; index <= pageItem.length - 1; index++) {
        pageItem[index].className = "pageItem";
    }
    pageItem[num].className = "pageItem current";
    if ($(".pageItem").get(1) == `<span class='pageItem current' onclick='jump(${num})'>${num}</span>`){
        console.log("ahhaha")
        $(".pageItem").get(0).innerHTML =`<span class='pageItem disabled'>上一页</span>`
    }
    cleartable();
    Object.values(staff).forEach((item, index) => { /*遍历json数组 */

        if (index >= (num * 10)) {    /*如果大于页数*10则不再添加信息 */
            return;
        }

        if (index >= ((num - 1) * 10)) {
            let table = document.getElementById("table-main");
            table.innerHTML += `<tr>
                                    <td><span class="checkBox" onclick="checkbox(${index})"></span></td>
                                    <td>${item.name}</td>
                                    <td>${item.tel}</td>
                                    <td>${item.department}</td>
                                    <td>${item.hiredate}</td>
                                    <td>${item.idNo}</td>
                                    <td>${item.personnelStatus}</td>
                                    <td>${item.position}</td>
                                    <td><span class='editText' onclick='editText(${index})'>编辑</span><span class='delText' onclick='delText(${index})'>删除</span></td>
                                </tr>`
        }

    });
}


let toNew = () => {  /*新建员工跳转 */
    location.href = "table-edited.html";
}

let delText = (index) => {/*删除数据 */
    document.getElementById("popup").style.visibility = "visible";
    In = index;
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
        document.getElementById("popup").style.visibility = "hidden";
        staff.splice(index, 1);

        localStorage.setItem("staff", JSON.stringify(staff));

        location.reload();
    }).catch(() => {
        document.getElementById("popup").style.visibility = "hidden";
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

    let searchfield = document.getElementById("search").value;
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
    let table = document.getElementById("table-main");
    table.innerHTML = "<tr><th><span class=\"checkBox\" onclick=\"checkbox()\"></span></th><th>姓名</th><th>手机号</th><th>所属部门</th><th>入职时间</th><th>人事状态</th><th>职位</th><th>身份证号码</th><th>操作</th></tr>"
}

let editText = (index) => {


}

let checkbox = (index = "a") => { /* 复选框 */
    if (index === "a") {
        $("th .checkBox").toggleClass("boxbg");
        if ($("th .checkBox").attr("class").includes("boxbg")) {
            $("td .checkBox").attr({class: "checkBox boxbg"});
        }
        else {
            $("td .checkBox").attr({class: "checkBox"});
        }
    }
    else {  /* 这里真是太复杂了 查询到td下所有的第一个span 却不能对查询结果的第一个节点进行操作 只能写这么一大串 查询结果只有inHTML方法*/
        console.log(index)
        let pageindex = index;
        while (pageindex >= 10) {
            pageindex = pageindex - 10;
        }
        let checkbox = $("tr ").get(pageindex + 1).firstElementChild;

        // checkbox.toggleClass("boxbg");
        let isbg = `<span class="checkBox boxbg" onclick="checkbox(${index})"></span>`
        let nobg = `<span class="checkBox" onclick="checkbox(${index})"></span>`
        if (checkbox.innerHTML == nobg) {
            checkbox.innerHTML = `<span class="checkBox boxbg" onclick="checkbox(${index})"></span>`
            console.log(checkbox)
            deletelist.push(index);
            console.info(deletelist)
            return;
        }
        if (checkbox.innerHTML == isbg) {
            checkbox.innerHTML = `<span class="checkBox" onclick="checkbox(${index})"></span>`
            console.log(checkbox)
        }
    }
}

let deleteall = () => {     /* 批量删除 暂时没做跨页 有点麻烦  */
    if ($("th .boxbg").length == 0) {
        staff.forEach((item, index) => {
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
    else {
        localStorage.clear();
        location.reload();
    }

}

/* 模拟数据
aaa=[{"name":"1","personnelStatus":"1","tel":"1","position":"1","idNo":"1","department":"1","hiredate":"1"},
{"name":"2","personnelStatus":"2","tel":"2","position":"2","idNo":"2","department":"2","hiredate":"2"},
{"name":"3","personnelStatus":"3","tel":"3","position":"3","idNo":"3","department":"3","hiredate":"3"},
{"name":"4","personnelStatus":"2","tel":"2","position":"2","idNo":"2","department":"2","hiredate":"2"},
{"name":"5","personnelStatus":"3","tel":"3","position":"3","idNo":"3","department":"3","hiredate":"3"},
{"name":"6","personnelStatus":"2","tel":"2","position":"2","idNo":"2","department":"2","hiredate":"2"},
{"name":"7","personnelStatus":"3","tel":"3","position":"3","idNo":"3","department":"3","hiredate":"3"},
{"name":"8","personnelStatus":"2","tel":"2","position":"2","idNo":"2","department":"2","hiredate":"2"},
{"name":"9","personnelStatus":"3","tel":"3","position":"3","idNo":"3","department":"3","hiredate":"3"},
{"name":"10","personnelStatus":"2","tel":"2","position":"2","idNo":"2","department":"2","hiredate":"2"},
{"name":"11","personnelStatus":"3","tel":"3","position":"3","idNo":"3","department":"3","hiredate":"3"},
{"name":"12","personnelStatus":"2","tel":"2","position":"2","idNo":"2","department":"2","hiredate":"2"},
{"name":"12","personnelStatus":"3","tel":"3","position":"3","idNo":"3","department":"3","hiredate":"3"},
{"name":"14","personnelStatus":"2","tel":"2","position":"2","idNo":"2","department":"2","hiredate":"2"},
{"name":"15","personnelStatus":"3","tel":"3","position":"3","idNo":"3","department":"3","hiredate":"3"},
{"name":"16","personnelStatus":"2","tel":"2","position":"2","idNo":"2","department":"2","hiredate":"2"},
{"name":"17","personnelStatus":"3","tel":"3","position":"3","idNo":"3","department":"3","hiredate":"3"},
{"name":"18","personnelStatus":"2","tel":"2","position":"2","idNo":"2","department":"2","hiredate":"2"},
{"name":"19","personnelStatus":"3","tel":"3","position":"3","idNo":"3","department":"3","hiredate":"3"},
{"name":"20","personnelStatus":"2","tel":"2","position":"2","idNo":"2","department":"2","hiredate":"2"},
{"name":"21","personnelStatus":"3","tel":"3","position":"3","idNo":"3","department":"3","hiredate":"3"}]
 localStorage.setItem("staff",JSON.stringify(aaa) );
*/
