const mainTxt = document.querySelector(".aboutMeTxt");
const topNav = document.querySelector(".topNavi-component");
console.log(mainTxt.innerHTML);

let mainTxtsep='';
for (let i = 0; i < mainTxt.innerHTML.length ; i ++){
    // if(mainTxt.innerHTML.charAt(i)!==" "){
        mainTxtsep+= "<span>" + mainTxt.innerHTML.charAt(i) + "</span>";
    // }
}

mainTxt.innerHTML = mainTxtsep;

let mainEvent = gsap.timeline();

mainEvent.from(".aboutMeTxt span",{
    duration:1,
    opacity:0,
    y:100,
    stagger:0.1
});



window.addEventListener("scroll",(e)=>{
    
    console.log(this.scrollY);

    console.log(topNav)
    if(this.scrollY >= 450){
        topNav.children[0].classList.add("on");
    }else if(this.scrollY < 400 || this.scrollY >600){
        topNav.children[0].classList.remove("on");
    }
})