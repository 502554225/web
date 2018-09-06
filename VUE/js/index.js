var app = new Vue({
    el: '#app',
    data: {
        staff: [],
        externalStaff: [{name: "1", personnelStatus: "在职", tel: "1", man: "男", remarks: ""},
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
            {name: "14", personnelStatus: "在职", tel: "1", man: "男", remarks: ""}],
        tonew: false,
        tolist: true,
        todetail: false,
        id: 1, name: "", personnelStatus: "", tel: "", man: "", remarks: "",
        searchName: "",
        isChecked: "checkBox",
        deletelist: [],
        deletelist2: [],
    },
    methods: {
        gotonew: function () {
            this.tonew = true;
            this.tolist = false;
            this.todetail = false;
        },
        gotodetail: function () {
            this.tonew = false;
            this.tolist = false;
            this.todetail = true;
        },
        gotolist: function () {
            this.tonew = false;
            this.tolist = true;
            this.todetail = false;
        },
        submit: function () {
            let astaff = {
                id: this.id,
                name: this.name,
                personnelStatus: this.personnelStatus,
                tel: this.tel,
                man: this.man,
                remarks: this.remarks,
            }
            this.staff.push(astaff);
            this.id++;
            this.gotolist();

        },
        clear: function () {
            this.name = "";
            this.personnelStatus = "";
            this.tel = "";
            this.man = "";
            this.remarks = "";
        },
        delText: function (index) {
            this.staff.splice(index, 1);
        },
        checkbox: function (index) {
            let l=$(".checkBox").length;
            let classname = $("tr ").get(index + 1).firstElementChild.firstElementChild.className;
            if (classname == "checkBox boxbg") {
                $("tr ").get(index + 1).firstElementChild.firstElementChild.className = "checkBox"
                this.isChecked="checkBox";
                for(let i=0;i<l;i++){
                    if ($(".checkBox")[i+1].className=="checkBox boxbg") {
                        $("#list-main tr").eq(i+1).css("background","#eee");
                    }
                    else{
                        $("#list-main tr").eq(i+1).css("background","#fff");
                    }

                }
                    return;
            }
            else {
                $("tr ").get(index + 1).firstElementChild.firstElementChild.className = "checkBox boxbg"
                this.isChecked="checkBox boxbg";
                for(let i=0;i<l;i++){
                    if ($(".checkBox")[i+1].className=="checkBox boxbg") {
                        $("#list-main tr").eq(i+1).css("background","#eee");
                    }
                    else{
                        $("#list-main tr").eq(i+1).css("background","#fff");
                    }

                }
                return;
            }

            if (index < 0) {
                $(".checkBox").toggleClass("boxbg");
            }



            for(let i=0;i<l;i++){
                if ($(".checkBox")[i+1].className=="checkBox boxbg") {
                    $("#list-main tr").eq(i+1).css("background","#eee");
                }
                else{
                    $("#list-main tr").eq(i+1).css("background","#fff");
                }

            }

        },
        deleteall: function () {
            this.deletelist=[];
            let boxbg=$("td .checkBox");

            for (let i=0,l=boxbg.length;i<l;i++) {
                if (boxbg[i].className.includes("boxbg")) {
                    this.deletelist.push(i);
                }

            }
            if (this.deletelist.length==0){
                alert("请选择以为员工!")
                return
            }

            this.staff.forEach((item, index) => {    // 遍历数组1找到相同的数据存入数组2

                let f = (v) => {
                    return v == index;
                }
                if (this.deletelist.find(f, index) != undefined) {
                    let del = this.staff.slice(index, index + 1);
                    this.deletelist2 = this.deletelist2.concat(del);
                }
            })
            let i = 1;
            let staff2 = [];
            Object.assign(staff2, this.staff);
            this.staff.forEach((item, index) => {


                this.deletelist2.forEach((item2, index2) => {

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
            this.staff=staff2;
            boxbg=$("td .checkBox").attr("class","checkBox");
        }
    },
    computed: {

        isdata() {
            // 判断有无数据
            if (this.staff) {
                return false;
            }
            else return true;
        },
        bitdata() {
            // 判断是否需要分页
            let length = this.staff.length;
            console.log(length)
            if (length > 10) {
                return true;
            }
            else {

                return false;
            }
        },
        // sLength2(){
        //     this.sLength=this.staff.length;
        //     return this.sLength;
        // },
        // pageItem2(){
        //     this.pageItem=parseInt(this.sLength/10)+1
        //     return this.pageItem;
        // },
        // pageItemlist2(){
        //     for(let i=0;i<this.sLength;i++){
        //         this.pageItemlist.push(1);
        //     }
        // }
    },
    created: function () {

    }

})