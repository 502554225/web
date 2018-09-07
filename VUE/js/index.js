var page = {

    /**
     * props:外部传参， 通过v-bind
     * computed内部转换数据，自带缓存
     */

    data: function () {
        return {
            total: 100,// 数据总条数
            display: 10,// 每页显示条数
            currentPage: 1,// 当前页码
            pagegroup: 10// 分页条数
        }
    },
    computed: {
        test2() {
            return this.btnText + 'xxx';
        }
    },
    methods: {
        onClick() {

            this.$emit('on-my-click', 1231) // 内部事件抛出
        }
    },
    template: '#mypage', // 这种方式需要在html中增加 <script type="text/template" id="myButton"> ... </script>
    // template: '<span v-on:click="onClick">{{btnText}} -- {{test}} -- {{test2}}</span>' // 原生写法
}


var app = new Vue({
    el: '#app',
    data: {
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
    },
    computed: {
        toStaff(){
            let staff=[];
            // staff=this.staff.slice();
            this.staff.forEach((item,index)=>{
                staff[index]= {
                    id: item.id,
                    name: item.name,
                    personnelStatus: item.personnelStatus,
                    tel: item.tel,
                    man: item.man == "1" ? "男" : "女",
                    remarks: item.remarks,
                    isChecked: item.isChecked,
                }
            })
            return staff;



        },
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
            if (this.aStaff.name) {
                this.isname=false;
            }

            else {
                this.isname=true;
                return
            }
            if (this.aStaff.tel) {
                this.istel=false;
            }
            else{
                this.istel=true;
                return
            }
            let astaff={};
            Object.assign(astaff,this.aStaff);
            this.staff.push(astaff);
            this.staff.id++;
            this.gotolist();
            this.clear();
        },
        clear: function () {
            this.aStaff.name = "";
            this.aStaff.personnelStatus = "在职";
            this.aStaff.tel = "";
            this.aStaff.man = "1";
            this.aStaff.remarks = "";
        },
        delText: function (index) {
            this.staff.splice(index, 1);
        },
        checkbox: function (index) {
            if (index<0){

                this.isCheckedAll=!this.isCheckedAll;
                this.staff.forEach((item)=>{
                    item.isChecked=this.isCheckedAll;
                })
                return
            }
            this.staff[index].isChecked=!this.staff[index].isChecked;

            let isTrue=1;
            this.staff.forEach((item)=>{
                if ( item.isChecked==false){
                    this.isCheckedAll=false;
                    isTrue=0;
                }

            })
            if (isTrue) {
                this.isCheckedAll=true;
            }
                },
        deleteall: function () {
            let staff=[];
            this.staff.forEach((item)=>{
                if (!item.isChecked){
                    staff.push(item);
                }
            })
            this.staff=staff;
        }
    },

    created: function () {

    },
    components: {
        'my-page': page
    }

})