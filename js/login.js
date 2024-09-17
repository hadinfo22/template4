////////// Sign In
let username = document.getElementById("username")
let password = document.getElementById("password")
let loginbtn = document.getElementById("sign-in")
let getuser = localStorage.getItem("username")
let getpassword = localStorage.getItem("password")

loginbtn.addEventListener ("click" , function(event){
    event.preventDefault()
    if (username.value==="" || password.value===""){
        alert("Please Fill Data ")
    } else {
        if ( (getuser && getuser.trim() === username.value.trim() && getpassword && getpassword === password.value))
        {
            setTimeout ( () => {
                window.location = "index.html"
            } , 1500)
        } else {
            alert("Email or Password is wrong ")
        }
    }
})