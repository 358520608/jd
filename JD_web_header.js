window.onload = function(){




//输入框样式
var inp = document.getElementsByTagName('input');
for(var i=0;i<inp.length;i++){
  inp[i].n = i;
  inp[i].onfocus=function(){
    inp[this.n].placeholder='';
  }
  inp[i].onblur=function(){
    inp[this.n].placeholder='领券狂减';
  }
}
//结束


//选项卡1
var choice = document.getElementsByClassName('rig_l');
var mydiv = document.getElementsByClassName('rigall')[0].children; 
var scol = document.getElementsByClassName('red1')[0];
for(var i=0;i<choice.length;i++){
  choice[i].n = i;//自定义属性
  choice[i].onmouseover = function(){
    for(var i=0;i<mydiv.length;i++){
      mydiv[i].className = '';
    }
    mydiv[this.n].className = 'rig3_a';
    if(this.n==0){
      scol.style.transform = 'translateX(0px)';
    }
    if(this.n==1){
      scol.style.transform = 'translateX(52px)';
    }
  }
}
//结束



//秒杀倒计时
var hour = document.getElementsByClassName('hour')[0];
var minu = document.getElementsByClassName('minu')[0];
var sec = document.getElementsByClassName('sec')[0];
function GetRTime(){
    var EndTime= Date.parse(new Date("2017-07-28 12:20:00"));
    var NowTime = Date.parse(new Date());
    var t =EndTime - NowTime;
    var h=0;
    var m=0;
    var s=0;
    if(t>=0){
      h=Math.floor(t/1000/60/60%24);
      m=Math.floor(t/1000/60%60);
      s=Math.floor(t/1000%60);
     } 
     if(h<10){
      h = '0'+h;
     }
     if(m<10){
      m = '0'+m;
     }
     if(s<10){
      s = '0'+s;
     }
   hour.innerHTML = h;
   minu.innerHTML = m;
   sec.innerHTML = s;
}
setInterval(GetRTime,0);
//结束

//秒杀图片滚动
var left1 = document.getElementsByClassName('toword_l')[0];
var right1 = document.getElementsByClassName('toword_r')[0];
var myul = document.getElementsByClassName('time1')[0];
var linum = myul.children.length;
//console.log(linum);
var n = 0;
left1.onclick = function(){    
    if(n>=linum/5-1){
      n = -1;
    }
    n++;
    m = n*1000;
    myul.style.transform = 'translateX('+-m+'px)';
}
right1.onclick = function(){
    if(n<=0){
      n = linum/5;
    } 
    n--;
    m = n*1000;
    myul.style.transform = 'translateX('+-m+'px)';
}
//结束

//轮播图
lunbo("run_con",true,2);
lunbo("runImg",true,0);//不能用字母，字母不是参数；
lunbo("right_l",false,1);
lunbo("all_r_b",true,2);
lunbo("right_lunbo",true,0);
//封装函数
function lunbo(id,x,c){
var myimg = document.getElementById(id);
var start = myimg.getElementsByClassName('startimg')[0].children;
var n = 1;
var on = myimg.getElementsByClassName('white_point')[0].children;
var mytime = setInterval(run,2000);
if(x==true){
  var left = myimg.getElementsByClassName('left')[0];
  var right = myimg.getElementsByClassName('right')[0];
  left.onclick = function(){
   n -= 2;//若是减减，则除第一次外相当于runImg中n++后又n--。图片不会跳转。
   run();//给n赋值后，调用函数运行一次
}
  right.onclick = function(){
   run();//调用函数运行一次
}
}
myimg.onmouseover=function(){
   clearInterval(mytime);
}
myimg.onmouseleave=function(){
   mytime = setInterval(run,2000);//调用函数并设置跳转时间
}
function run(){
  for(var i=0;i<start.length;i++){
  start[i].style.opacity=0;
  if(c==1){
  on[i].style.backgroundColor = '#342a2d';
  }
  if(c==0){
  on[i].style.backgroundColor = '#fff';  
  }
  if(c==2){
  on[i].style.backgroundColor = '#c8c8c8';  
  }
  }
  if(n>=start.length){
    n=0;
  }
  if(n<0){
    n = start.length-1;
  }
  start[n].style.opacity=1;
  on[n].style.backgroundColor = '#f10125';
  n++;
}
  for(var i=0;i<on.length;i++){
    on[i].index = i;//自定义属性
    on[i].onmouseover = function(){
    n = this.index;
    run();//调用函数
  }
}
}
//结束
//选项卡2
var nav = document.getElementsByClassName('rig_nav')[0].getElementsByTagName('a');
var ka = document.getElementsByClassName('right_c')[0].children;
var scol2 = document.getElementsByClassName('red2')[0];
for(var i=0;i<nav.length;i++){
  nav[i].m = i;//自定义属性
  nav[i].onmouseover = function(){
    for(var k=0;k<ka.length;k++){
      ka[k].style.opacity = 0;
    }
    p = 75*[this.m];
    console.log(p);
    ka[this.m].style.opacity = 1;
    scol2.style.transform = 'translateX('+p+'px)';
  }
}
//结束

//小图片滚动
gund("fashion_f1",1) 
gund("fashion_f2",1) 
gund("fashion_f3",1) 
gund("fashion_f4",1)
gund("fashion_f0",0)
function gund(id,x){
var mydiv1 = document.getElementById(id);
var myul2 = mydiv1.getElementsByClassName('fashion_ul')[0];
if(x==1){
var left2 = mydiv1.getElementsByClassName('fashion_a1')[0];
var right2 = mydiv1.getElementsByClassName('fashion_a2')[0];
}
if(x==0){
var left2 = mydiv1.getElementsByClassName('fashion_a3')[0];
var right2 = mydiv1.getElementsByClassName('fashion_a4')[0];  
}
var n = 0;
var linum1 = myul2.children.length;
left2.onclick = function(){
  if(x==1){
  if(n>=linum1/6-1){
    n = -1;
  }
  n++;
   m = n*570; 
  }
  if(x==0){
   if(n>=linum1/12-1){
    n = -1;
  }
  n++; 
   m = n*1170; 
  }
  myul2.style.transform = 'translateX('+-m+'px)';
}
right2.onclick = function(){
  if(x==1){
    if(n<=0){
      n = linum1/6;
    } 
    n--;
     m = n*570; 
    }
  if(x==0){
    if(n<=0){
      n = linum1/12;
    } 
    n--;
     m = n*1170; 
    }
    myul2.style.transform = 'translateX('+-m+'px)';
}
}
//结束

//滚动事件1
window.onscroll = function(){
   var inplist = document.getElementsByClassName('input_top')[0];
   var navl = document.getElementsByClassName('left_nav')[0];
   var li = document.getElementsByClassName('nav_list')[0].children;
   var end = window.scrollY;
   var end2 = window.scrollX;
   var navl = document.getElementsByClassName('left_nav')[0];
   var scroll = document.getElementsByClassName('scroll1')[0];
   var fixed = scroll.offsetLeft;
   navl.style.left = fixed-80+'px';
   //console.log(end);
   if(end>680){inplist.style.transform = 'translateY(50px)';}else{inplist.style.transform = 'translateY(0px)';}
   if(end>1600){navl.style.display = 'block';}else{navl.style.display = 'none';}
   if(end>=1740&&end<=2470){li[0].style.backgroundColor = '#f10125';}else{li[0].style.backgroundColor = 'transparent';}
   if(end>=2471&&end<=3030){li[1].style.backgroundColor = '#f10125';}else{li[1].style.backgroundColor = 'transparent';}
   if(end>=3031&&end<=3533){li[2].style.backgroundColor = '#f10125';}else{li[2].style.backgroundColor = 'transparent';}
   if(end>=3534&&end<=4010){li[3].style.backgroundColor = '#f10125';}else{li[3].style.backgroundColor = 'transparent';}
   if(end>=4270&&end<=5000){li[4].style.backgroundColor = '#f10125';}else{li[4].style.backgroundColor = 'transparent';}
}
//结束


//页面锚点滚动
var scroll = document.getElementsByClassName('scroll1');
var link = document.getElementsByClassName('nav_alin');
for(var i=0;i<link.length;i++){
    link[i].n = i;
 link[i].onclick = function(){
   var y = window.scrollY;
   set = scroll[this.n].offsetTop-80;
   end = set - y;
   var mytime = setInterval(function(){
           window.scrollTo(0,y);
           end>0?y+=20:y-=20;
           if(y>=set-20&&y<=set){
            y =window.scrollY;
            clearInterval(mytime);
           }

    },10);
 }
}

//窗口触发事件
window.onresize = function(){
  var navl = document.getElementsByClassName('left_nav')[0];
  var scroll = document.getElementsByClassName('scroll1')[0];
  var fixed = scroll.offsetLeft;
  
  if(fixed==0){
    navl.style.left = fixed+70+'px';
  }else{
    navl.style.left = fixed-80+'px';
  }
}




}