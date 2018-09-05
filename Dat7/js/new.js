

let back = () => {
    // location.href="student-management.html"
    $("#list,#list-main").css({display: "block"});
    $("#new,#new-main").css({display: "none"});
}

let submit = (tabnum,index) => {
    if (tabnum==1) {
        let astaff = {};
        if (!$("#name").val()) {
            $("#noName").show();
            return;
        }
        if (!$("#tel").val()) {
            $("#noTel").show();
            return;
        }
        if ($("#tel").val().match(/^(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[5678]|166|19[89])[0-9]{8}$/) == null) {
            $("#errorTel").show();
            return;
        }
        astaff.name = $("#name").val();
        astaff.personnelStatus = $("#personnelStatus").val();
        astaff.tel = $("#tel").val();
        astaff.remarks = $("#remarks").val();

        if ($("#man:checked").val() == null) {
            astaff.man = "女";
        }
        else {
            astaff.man = "男";
        }


        let staff = JSON.parse(localStorage.getItem("staff") || "[]");
        if (index>=0) {
            staff[index]=astaff;
        }
        else {

            staff.push(astaff);
        }
        localStorage.setItem("staff", JSON.stringify(staff));
        $("#list,#list-main").css({display: "block"});
        $("#new,#new-main").css({display: "none"});
        location.reload();
        tab(2);
    }
    if (tabnum==2){
        let astaff = {};
        if (!$("#name").val()) {
            $("#noName").show();
            return;
        }
        if (!$("#tel").val()) {
            $("#noTel").show();
            return;
        }
        if ($("#tel").val().match(/^(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[5678]|166|19[89])[0-9]{8}$/) == null) {
            $("#errorTel").show();
            return;
        }
        astaff.name = $("#name").val();
        astaff.personnelStatus = $("#personnelStatus").val();
        astaff.tel = $("#tel").val();
        astaff.remarks = $("#remarks").val();

        if ($("#man:checked").val() == null) {
            astaff.man = "女";
        }
        else {
            astaff.man = "男";
        }


        let externalStaff = JSON.parse(localStorage.getItem("externalStaff") || "[]");
        if (index>=0) {
            externalStaff[index]=astaff;

        }
        else {
            externalStaff.push(astaff);
        }
        localStorage.setItem("externalStaff", JSON.stringify(externalStaff));
        $("#list,#list-main").css({display: "block"});
        $("#new,#new-main").css({display: "none"});
        location.reload();
        tab(2);
    }



}