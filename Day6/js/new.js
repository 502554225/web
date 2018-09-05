let back=()=>{
    location.href="student-management.html"
}

let submit=()=>{
    let staff = {};
    staff.name =document.getElementById("name").value;
    staff.personnelStatus =document.getElementById("personnelStatus").value;
    staff.tel =document.getElementById("tel").value;
    staff.position =document.getElementById("position").value
    staff.idNo =document.getElementById("idNo").value;
    staff.department =document.getElementById("department").value;
    staff.hiredate =document.getElementById("hiredate").value;
    // staff=JSON.parse(staff);

    console.log(JSON.stringify(staff));
    let checkOk =Object.values(staff).every(item=>{
        if(!item){
            alert("*项信息不能为空！");
            return false;
        }
        return true;
    });

    console.log(checkOk);
    if(checkOk){
        let staffs = JSON.parse(localStorage.getItem("staff") || "[]") ;
        console.log(staffs);
        staffs.push(staff);
        localStorage.setItem("staff",JSON.stringify(staffs));
        location.href="student-management.html";
    }

}