const button_play=document.getElementsByClassName("button_play");
const rere1=document.getElementsByClassName("result")[0].querySelectorAll("div");
const rere2=document.getElementsByClassName("result")[1].querySelectorAll("div");
const rere3=document.getElementsByClassName("result")[2].querySelectorAll("div");
const rere4=document.getElementsByClassName("result")[3].querySelectorAll("div");
function playValue(){
  var jbRandom = Math.random();
  console.log(1);
  const anyValue=Math.floor( jbRandom * 12830182318)*-1;
  rere1[0].innerText="포인터 kasumi의 값 : "+anyValue;
  rere1[1].innerText="personalNumber의 주소 값 : "+anyValue;
}
function showSwapNo(){
  rere2[0].innerText="kasumi의 값 : "+20;
  rere2[1].innerText="Ai 값 : "+122;
}
function showSwapYes(){
  rere3[0].innerText="kasumi의 값 : "+122;
  rere3[1].innerText="Ai 값 : "+20;
}
function whySomay(){
  rere4[0].style.color="red";
  rere4[0].innerText="에러!";
}
button_play[0].addEventListener("click",playValue);
button_play[1].addEventListener("click",showSwapNo);
button_play[2].addEventListener("click",showSwapYes);
button_play[3].addEventListener("click",whySomay);
