/////////// Sign Up
let username = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")
let registerbtn=document.getElementById("sign-up")

registerbtn.addEventListener ("click" , function(e){
    e.preventDefault()
    if (username.value==="" || email.value==="" || password.value ===""){
        alert("Please Fill Data")
    } else {
        localStorage.setItem("username" , username.value);
        localStorage.setItem("email" , email.value);
        localStorage.setItem("password" , password.value); 

        setTimeout ( () => {
            window.location = "login.html"
        } , 1500)
    }
})