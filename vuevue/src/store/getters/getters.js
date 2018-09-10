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
        // man: item.man == '1' ? '男' : '女',
        startDate:item.startDate,
        bu: item.bu,
        position:item.position,
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
  isCheckedList(state){
    let staff = []
    state.staff.forEach((item) => {
      if (!item.isChecked) {
        staff.push(item)
      }
    })
    if (staff.length===state.staff.length){

      return false
    }
    return staff
  },
}
