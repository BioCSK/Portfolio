const mainTxt = document.querySelector(".aboutMeTxt");
const topNav = document.querySelector(".topNavi-component");
const myProfileImg = document.getElementById("myProfilePic");


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

    console.log(topNav)
    if(this.scrollY >= 450){
        topNav.children[0].classList.add("on");
    }else if(this.scrollY < 400 || this.scrollY >600){
        topNav.children[0].classList.remove("on");
    }
})


google.charts.load('current', {'packages':['timeline']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var container = document.getElementById('educationTimeline');
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();

  dataTable.addColumn({ type: 'string', id: 'education' });
  dataTable.addColumn({ type: 'date', id: 'Start' });
  dataTable.addColumn({ type: 'date', id: 'End' });
  dataTable.addRows([
    [ '가천대학교 생명과학과 ', new Date(2015, 03, 01), new Date(2019, 08, 22) ],
    [ '서울대학교 ' ,new Date(2019,08,20), new Date(2020,05,01)],
    [ '서강대학교 소프트웨어' ,new Date(2021,03,01),new Date(2021,03,01)]
  ])

  chart.draw(dataTable);
}