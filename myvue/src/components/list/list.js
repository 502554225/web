export default {
  props:{
    staff: {
        type:Array,
    },
    isCheckedAll:{
      type:String,
    },
    isname:{
      type:Boolean,
    },
    istel:{
      type:Boolean,
    },
    aStaff: {
      type:Object,
    },
    searchName: {
      type:String,
    },
    deletelist: {
      type:Array,
    },
    deletelist2: {
      type:Array,
    },
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
}
