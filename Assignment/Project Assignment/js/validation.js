// $(function(){
//     console.log($("#fnameError").is(":empty"));
// })

function validation(){
    if(document.getElementById("fname").value === ""){
        $("#fname").focus();
        if($("#fnameError").is(":empty")){
            $("#fnameError").append('Include your First Name');
        }
        return false;
    }else{
        $("#fnameError").css("display", "none");
    }

    if(document.getElementById("lname").value === ""){
        $("#lname").focus();
        if($("#lnameError").is(":empty")){
            $("#lnameError").append('Include your Last Name');
        }
        return false;
    }else{
        $("#lnameError").css("display", "none");
    }

    if(document.getElementById("email").value === ""){
        $("#email").focus();
        console.log(document.getElementById("emailError"));
        if($("#emailError").is(":empty")){
            $("#emailError").append('Include your Email!');
        }
        return false;
    }else{
        $("#emailError").css("display", "none");
    }

    if(document.getElementById("username").value === ""){
    $("#username").focus();
        console.log(document.getElementById("usernameError"));
        if($("#usernameError").is(":empty")){
            $("#usernameError").append('Include your Username!');
        }
        return false;
    }else{
        $("#usernameError").css("display", "none");
    }

    if(document.getElementById("password").value === ""){
        $("#password").focus();
        console.log(document.getElementById("passwordError"));
        if($("#passwordError").is(":empty")){
            $("#passwordError").append('Include your Password!');
        }
        return false;
    }else{
        $("#passwordError").css("display", "none");
    }
}