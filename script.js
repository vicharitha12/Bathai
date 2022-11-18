var index=0;
function slideShow(){
    let arr=["./images/slide1.jpg", "./images/slide2.jpg", "./images/slide3.jpg","./images/slide4.jpg"]
    if(index<arr.length)
  {
    document.getElementById("ph").src=arr[index];
  }
  if(index==arr.length-1)
  {
    index=-1;
  }
  index++;
  setTimeout(slideShow, 4000);
}
var min=10;
var time=min*60;
var text=document.getElementById('tim');
var inter=setInterval(count,1000);
function count(){
  let mins=Math.floor(time/60);
  let sec=(time%60);
  if(mins==0 && sec==0)
  {
    clearInterval(inter);
  }
  sec=sec>=10?sec : '0'+sec;
  text.innerHTML=`${mins}:${sec}`;
  time--;
  // setInterval(count,1000);
}
function change(){
  var b=document.getElementById("register");
  var a=document.getElementById("Login");
  a.style.backgroundColor="lightcyan";
  b.style.backgroundColor="lightgreen";
}
function change1(){
  var b=document.getElementById("register");
  var a=document.getElementById("Login");
  a.style.backgroundColor="lightgreen";
  b.style.backgroundColor="lightcyan";
}
        



