var bool = 1;
var ulid = "";

function donghuakai(IDshu){

  ulid=IDshu+3;
  shubiaogundong();


  var elem = document.getElementById(IDshu);
  var elem1 = document.getElementById(IDshu+1);
  var elem2 = document.getElementById(IDshu+2);

  var reactObj = elem.getBoundingClientRect();
  var reactObj1 = elem1.getBoundingClientRect();
  var reactObj2 = elem2.getBoundingClientRect();

  //alert(document.documentElement.scrollWidth); 

  var pos = reactObj.left;
  var pos1 = reactObj1.left;
  var pos2 = reactObj2.left;

  var id = setInterval(frame, 5);

  bool=1;
  var kuan = document.documentElement.scrollWidth;

  function frame() {
    if (pos < -kuan*0.045) {
      pos = pos + 6; 
      if(bool==1)elem.style.left = pos + "px"; 
    }
    if (pos1 > kuan*0.255) {
      pos1 = pos1 - 16;   
      if(bool==1)elem1.style.left = pos1 + "px"; 
    }
    if (pos2 > -kuan*0.645) {
      pos2 = pos2 - 32; 
      if(bool==1)elem2.style.left = pos2 + "px"; 
    }
    if(pos >= -kuan*0.045 && pos1 <= kuan*0.255 && pos2 <= -kuan*0.645)
    {
      elem.style.left = -kuan*0.045 + "px";
      elem1.style.left = kuan*0.255 + "px";
      elem2.style.left = -kuan*0.645 + "px";
      clearInterval(id);
    }
  }
}

function donghuatuen(IDshu){


  shubiaogundong0();


  var elem = document.getElementById(IDshu);
  var elem1 = document.getElementById(IDshu+1);
  var elem2 = document.getElementById(IDshu+2);

  var reactObj = elem.getBoundingClientRect();
  var reactObj1 = elem1.getBoundingClientRect();
  var reactObj2 = elem2.getBoundingClientRect();

  //alert(document.documentElement.scrollWidth); 
  var kuan = document.documentElement.scrollWidth;
  var pos = reactObj.left;
  var pos1 = reactObj1.left;
  var pos2 = reactObj2.left-kuan*0.645;

  var id = setInterval(frame, 5);

  bool=0;
  

  function frame() {
    if (pos > -kuan*0.2) {
      pos = pos - 6; 
      if(bool==0)elem.style.left = pos + "px"; 
    }
    if (pos1 < kuan) {
      pos1 = pos1 + 16;   
      if(bool==0)elem1.style.left = pos1 + "px"; 
    }
    if (pos2 < kuan*0.4) {
      pos2 = pos2 + 32; 
      if(bool==0)elem2.style.left = pos2 + "px"; 
    }
    if(pos <= -kuan*0.2 && pos1 >= kuan && pos2 >= kuan*0.4)
    {
      elem.style.left = -kuan*0.2 + "px";
      elem1.style.left = kuan* + "px";
      elem2.style.left = kuan*0.4 + "px";
      clearInterval(id);
    }
  }
}






//添加主键
function addli(type,TXT,shu,TXT1,shu1)
{
  var ele = document.createElement(type);//创建一个LI
  ele.innerHTML = TXT;//修改里面的属性
  ele.id = TXT;
  ele.onmouseover = function() {yulan(TXT1,shu1);}
  document.getElementById(shu).appendChild(ele);//把LI放到ID="zhu"的lu里面
}

function yulan(TXT,id)
{
  var child=document.getElementById(id);
  child.innerHTML=TXT;
}

function addlifu(type,shu)
{
  var ele = document.createElement(type);//创建一个LI
  document.getElementById(shu).appendChild(ele);//把LI放到ID="zhu"的lu里面
}





//删除主键
function shanchu(neirong)
{
  var child=document.getElementById(neirong);
child.parentNode.removeChild(child);
}

/*
function readFiles(){
  const fs = require('fs');
  fs.readdir('./images',(err,result)=>{
    console.log(result);  
  })
}

var str = "Visit Ruoob!Runobw Rnoob"; 
    var n = str.search("Runoob"); */


//读取TXT（链接）
function urlToBlob(URss,id,zhujian,id1) {
  let file_url = "https://raw.githubusercontent.com/wuxingwushu/wuxingwushu.github.io/main/" + URss;
  let xhr = new XMLHttpRequest();
  xhr.open("get", file_url, true);
  xhr.responseType = "blob";
  xhr.onload = function () {
    if (this.status == 200) {
      console.log(this.response)
      const reader = new FileReader()
      reader.onload = function () {
        //console.log('reader.result', reader.result)
        

        for (let index = 0; index < reader.result.split("\n").length-1; index=index+2) {
          addli(zhujian,reader.result.split("\n")[index],id,reader.result.split("\n")[index+1],id1);
        }
        for (let index1 = 0; index1 < 10; index1++) {
          addlifu("li",id);
        }

      }
      reader.readAsText(this.response);
    }
  };
  xhr.send();
}


function chushihua(TXT,id,id1){ 
  for (let index = 0; index < 4; index++){
    addlifu("li",id);
  }
  urlToBlob(TXT,id,"li",id1);
}


chushihua('Game/游戏日志.txt',"3","xtxt0");
chushihua('Dentury/事记.txt',"7","xtxt1");
//alert("如果无法正常链接Github的数据！\n可以使用Steam++后再次尝试！");






var scrollFunction = function(e) {
  e = e || window.event;
  e.preventDefault && e.preventDefault(); //禁止浏览器默认事件
  if (e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件
      if (e.wheelDelta > 0) { //当滑轮向上滚动时
        ulyidong(100);
      }
      if (e.wheelDelta < 0) { //当滑轮向下滚动时
        ulyidong(-100);
      }

  } else if (e.detail) { //Firefox滑轮事件
      if (e.detail > 0) { //当滑轮向上滚动时
        ulyidong(100);
      }
      if (e.detail < 0) { //当滑轮向下滚动时
        ulyidong(-100);
      }
  }
}

function ulyidong(shu){
  document.getElementById(ulid).scrollTop=document.getElementById(ulid).scrollTop+shu;
}


//禁止浏览器默认事件
function shubiaogundong(){
    //给页面绑定滑轮滚动事件
  if (document.addEventListener) { //firefox
    document.addEventListener('DOMMouseScroll', scrollFunction, false);
  }
  //滚动滑轮触发scrollFunction方法  //ie 谷歌
  window.addEventListener('mousewheel', scrollFunction, {passive: false});
}


//开启浏览器默认事件
function shubiaogundong0(){
  //给页面解绑滑轮滚动事件
  if (document.removeEventListener) { //firefox
    document.removeEventListener('DOMMouseScroll', scrollFunction);
  }
  //滚动滑轮触发scrollFunction方法  //ie 谷歌
  window.removeEventListener('mousewheel', scrollFunction);
}
