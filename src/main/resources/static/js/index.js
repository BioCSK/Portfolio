const mainTxt = document.querySelector(".aboutMeTxt");
const topNav = document.querySelector(".topNavi-component");
const myProfileImg = document.getElementById("myProfilePic");
const skills = document.querySelector(".skills");
const frameworkSkills = document.querySelector(".framework");
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



window.addEventListener("scroll",(e)=>{
    
    console.log(this.scrollY);
    if(this.scrollY >= 450){
        topNav.children[0].classList.add("on");
    }else if(this.scrollY < 400 || this.scrollY >600){
        topNav.children[0].classList.remove("on");
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
    })
   
}

for (let i = 0 ; i < skills.children.length ; i++){
    fillSkillPercentage(skills.children[i].getAttribute("id"))
}
for (let i = 0 ; i < frameworkSkills.children.length ; i++){
    fillSkillPercentage(frameworkSkills.children[i].getAttribute("id"))
}



let requestPath= "/project"
window.addEventListener("scroll",(e)=>{
 
    if(this.scrollY>1300){
        let xhr = new XMLHttpRequest();
        xhr.open('GET',requestPath);
        xhr.send(null);
        // xhr.setRequestHeader('Content-Type',"application/json");
        // xhr.send(data);
        // xhr.addEventListener("load",function(){
        //     console.log(xhr);
        //     let result =  JSON.parse(xhr.responseText);
        //     if(result.result == "ok" ){
        //         document.querySelector(".result").innerHTML = JSON.parse(xhr.responseText);
        //     }else{
        //         return "ok";
        //     }
        // })
    }
  
})



const swiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
  });