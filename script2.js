const button_play=document.getElementsByClassName("button_play");
const rere1=document.getElementsByClassName("result")[0].querySelectorAll("div");
const rere2=document.getElementsByClassName("result")[1].querySelectorAll("div");
const rere3=document.getElementsByClassName("result")[2].querySelectorAll("div");
const rere4=document.getElementsByClassName("result")[3].querySelectorAll("div");
let first=false;
let second=false;
let third=false;
let forth=false;

function playValue(){
  if(!first){
    var jbRandom = Math.random();
    console.log(1);
    const anyValue=Math.floor( jbRandom * 12830182318)*-1;
    rere1[0].innerText="포인터 kasumi의 값 : "+anyValue;
    rere1[1].innerText="personalNumber의 주소 값 : "+anyValue;
    first=true;
    button_play[0].innerHTML='<i class="fas fa-pause"></i>';
  }else{
    button_play[0].innerHTML='<i class="fas fa-play"></i>';
    first=false;
    rere1[0].innerText="버튼을 클릭해보세요.";
    rere1[1].innerText="";
  }
}
function showSwapNo(){
  if(!second){
    rere2[0].innerText="kasumi의 값 : "+20;
    rere2[1].innerText="Ai 값 : "+122;
    second=true;
    button_play[1].innerHTML='<i class="fas fa-pause"></i>';
  }else{
    button_play[1].innerHTML='<i class="fas fa-play"></i>';
    rere2[0].innerText="버튼을 클릭해보세요.";
    rere2[1].innerText="";
    second=false;
  }
  
}
function showSwapYes(){
  if(!third){
    rere3[0].innerText="kasumi의 값 : "+122;
    rere3[1].innerText="Ai 값 : "+20;
    third=true;
    button_play[2].innerHTML='<i class="fas fa-pause"></i>';
  }else{
    button_play[2].innerHTML='<i class="fas fa-play"></i>';
    rere3[0].innerText="버튼을 클릭해보세요.";
    rere3[1].innerText="";
    third=false;
  }
 
}
function whySomay(){
  if(!forth){
    rere4[0].style.color="red";
    rere4[0].innerText="에러!";
    forth=true;
    button_play[3].innerHTML='<i class="fas fa-pause"></i>';
  }else{
    button_play[3].innerHTML='<i class="fas fa-play"></i>';
    rere4[0].style.color="white";
    rere4[0].innerText="버튼을 클릭해보세요.";
    forth=false;
  }
  
}
button_play[0].addEventListener("click",playValue);
button_play[1].addEventListener("click",showSwapNo);
button_play[2].addEventListener("click",showSwapYes);
button_play[3].addEventListener("click",whySomay);
