///// hidding of Sign In and Sign Up - activate of Sign Out 
let userinfo = document.getElementById("user-info");
let user = document.getElementById("user");
let linkloginregister = document.getElementById("linkloginregister");
let divinfo = document.querySelector(".div-info");

if (localStorage.getItem("username")){
    linkloginregister.remove()
    divinfo.style.visibility ="visible"
    user.innerHTML = localStorage.getItem("username")
}


/// Processing Sign Out
signout=document.getElementById("sign-out")

signout.addEventListener("click",function()
{
    localStorage.clear();
    setTimeout(() => {
    window.location = "login.html";
},1500)
})