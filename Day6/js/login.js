let login=()=>{
    let checkOk = document.getElementsByClassName("inputStyle")[0].value&&document.getElementsByClassName("inputStyle")[1].value;
    console.log(checkOk);
    if(!checkOk){
        alert("账号或密码不能为空！");
        return;
    }
    location.href="student-management.html";
}

