$(function(){
    $("#leadRegistration").submit(function(){
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
    
        if($("#phoneNumber").val().length < 12){
        $("#username").focus();
            console.log(document.getElementById("phoneNumberError"));
            if($("#phoneNumberError").is(":empty")){
                $("#phoneNumberError").append('Phone number should be at least 12 character');
            }
            return false;
        }else{
            $("#phoneNumberError").css("display", "none");
        }
    
        if(document.getElementById("address").value === ""){
            $("#address").focus();
            console.log(document.getElementById("addressError"));
            if($("#addressError").is(":empty")){
                $("#addressError").append('Include your Address!');
            }
            return false;
        }else{
            $("#addressError").css("display", "none");
        }
        store();
    });
})