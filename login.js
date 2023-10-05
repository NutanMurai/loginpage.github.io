let signupbtn =document.getElementById("signupbtn");
let signinbtn =document.getElementById("signinbtn");
let namefield =document.getElementById("namefield");
let title =document.getElementById("title");


signinbtn.onclick=function(){
    namefield.style.maxHeight="0";
    title.innerHTML="signin";
    signupbtn.classList.add("disable");
    signinbtn.classList.remove("disable");
}
signupbtn.onclick=function(){
    namefield.style.maxHeight="60px";
    title.innerHTML="signup";
    signupbtn.classList.remove("disable");
    signinbtn.classList.add("disable");
}