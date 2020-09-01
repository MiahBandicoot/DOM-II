// Your code goes here
const name = document.querySelector(".main-navigation h1")
name.addEventListener("mouseover", function(event){
    event.target.style.color = "red";

    setTimeout(function(){
event.target.style.color = "";
    },300)
},false);

const navi = document.querySelector(".main-navigation nav")
navi.addEventListener("mouseover", function(event){
    event.target.style.color = "orange";

    setTimeout(function(){
        event.target.style.color = "";
            },300)
        },false);
