const Btn=document.querySelector(".Btn-switch");
const Video=document.querySelector(".video-container");
const Pre=document.querySelector(".preloader");

Btn.addEventListener("click",function(){
 if(Btn.classList.contains("toggle"))
 {
    Btn.classList.remove("toggle");
    Video.play();
 }
 else
 {
    Btn.classList.add("toggle");
    Video.pause();
 }
    //Btn.classList.toggle("toggle");
})
window.addEventListener("load",function(){
    Pre.classList.add("hide-preloader");
})

