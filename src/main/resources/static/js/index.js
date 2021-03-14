const mainTxt = document.querySelector(".aboutMeTxt");
const topNav = document.querySelector(".topNavi-component");
const myProfileImg = document.getElementById("myProfilePic");
const skills = document.querySelector(".skills");
const frameworkSkills = document.querySelector(".framework");
const educationLink = document.getElementById("referenceLink");
const root = document.getElementById("root");
const  additionalEducation = document.querySelector(".additionalEducation");
const closeBtn = document.getElementById("closeBtn");
const swiperPositionRound = document.getElementsByClassName("round");


educationLink.addEventListener("click",(e) =>{
    e.preventDefault();
    root.classList.add("educationLinkOn");
    additionalEducation.style.display="block";
    document.body.style.overflow="hidden";
 gsap.fromTo(".additionalEducation",
    {
        opacity:0,
        x:-100
    },{
        opacity:1,
        x:100,
        duration:0.3
    })
})
closeBtn.addEventListener("click",function(){
    gsap.fromTo(".additionalEducation",
    {
        opacity:1,
        x:100
    },{
        opacity:0,
        x:-100,
        duration:0.3
    })
    .eventCallback("onComplete",function(){
        additionalEducation.style.display="none";
        root.classList.remove("educationLinkOn");
        document.body.style.overflow="visible";
    })
})
myProfileImg.addEventListener("mouseenter",function(){
    myProfileImg.style.opacity = "1";
})

myProfileImg.addEventListener("mouseleave",function(){
    myProfileImg.style.opacity = "0.8";
})



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



function removeOnClassExcept(target,exceptClassName){
    topNav.children[target].classList.add("on");
    elements = Array.from(topNav.children);
    elements.map((dt)=>{
        if(dt.classList.contains(exceptClassName)) {
        }
        else{
            dt.classList.remove("on");
        } 
    });
}

window.addEventListener("scroll",(e)=>{
    
   
    if(this.scrollY < 280){
        topNav.children[0].classList.remove("on");
    }
    if(this.scrollY >= 280){
        removeOnClassExcept(0,"aboutMe_")
    }
    if(this.scrollY >= 1400){
        removeOnClassExcept(1,"myProjects")
    }
    if(this.scrollY >= 2000){
        removeOnClassExcept(2,"contactMe")
    }

});


function fillSkillPercentage(skillName){

    // const target =  
    let myProficiency = "#" + skillName + " .myProficiency";
    let maxProficiency = "#" + skillName + " .maximumBox";
    myProficiency = document.querySelector(myProficiency);
    maxProficiency = document.querySelector(maxProficiency);
    const maxWidth = maxProficiency.offsetWidth;
    let skillPer = myProficiency.getAttribute("data-num");

    window.addEventListener("scroll",(e)=>{
        if(this.scrollY>=800){
            for(let i = 0 ; i< maxWidth*0.01*skillPer; i++){
                myProficiency.style.width=i+"px";
                myProficiency.innerHTML = "<span>"+skillPer+"%"+"</span>";
            }
        }
        else if(this.scrollY<600){
            myProficiency.style.width="0px";
        }
        if(this.scrollY>=1600){
            myProficiency.style.width="0px";
        }
    })
   
}

for (let i = 0 ; i < skills.children.length ; i++){
    fillSkillPercentage(skills.children[i].getAttribute("id"))
}
for (let i = 0 ; i < frameworkSkills.children.length ; i++){
    fillSkillPercentage(frameworkSkills.children[i].getAttribute("id"))
}




swiperOption = {
    speed:1000,
    loop:true,  
    // autoplay:{
    //     delay:0,
    //     disableOnInteraction:false
    // }
}

const swiper = new Swiper('.swiper-container', swiperOption);
swiperPositionRound[swiper.activeIndex-1].classList.add("currentSwipePosition");
swiper.on("slideChange",function(){
    swiperPositionRound[swiper.activeIndex-1].classList.add("currentSwipePosition");
    restOfArray = Array.from(swiperPositionRound);
    restOfArray = restOfArray.filter((value,index)=> index !==swiper.activeIndex-1);
    console.log(restOfArray);
    for(let i = 0 ; i<restOfArray.length ; i++){
        restOfArray[i].classList.remove("currentSwipePosition");
    }
})


