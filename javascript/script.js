var success = document.getElementById("success")
var error = document.getElementById("error")

success.style.color = "Green"
error.style.color = "Red"

document.getElementById("register").addEventListener("click",() => {
    let fn = document.getElementById("fullname")
    let email = document.getElementById("e-mail")
    let pw = document.getElementById("password")
    let cpw = document.getElementById("cpassword")
    let g = document.getElementById("gender")

    success.innerHTML = ""
    error.innerHTML = ""


    if (fn.value == ""){
        alert("Name can't be empty")
    }else if(fn.value.length <5 || fn.value.length > 25){
        alert("The length of name must between 5 untill 25 characters") 
    }else if (email.value === ""){
        alert("E-mail can't be empty")
    }else if (pw.value === ""){
        alert("Password can't be empty")
    }else if(pw.value.length < 8 ){
        alert("The length of password must be more than 8 characters")
    }else if (cpw.value === ""){
        alert("Must fill your Confirm Password")
    }else if (cpw.value != pw.value){
        alert("Password and Password does not match") 
    }else if (g.value == ""){
        alert("Please Input your Gender") 
    }else{
        alert("Register Succesfully")
    }
})