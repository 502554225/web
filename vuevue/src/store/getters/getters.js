export default {
  toStaff(state){
    let staff = []
    // staff=this.staff.slice();
    state.staff.forEach((item, index) => {
      staff[index] = {
        id: item.id,
        name: item.name,
        personnelStatus: item.personnelStatus,
        tel: item.tel,
        man: item.man == '1' ? '男' : '女',
        remarks: item.remarks,
        isChecked: item.isChecked
      }
    })
    return staff
  },
  total(state){
    return state.staff.length
  },
  // 数据条数
  pageItem(state){
    return Math.ceil(state.total/10)
  },
  // 有几页
}
