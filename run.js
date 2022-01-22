var bool = 1;
var fubool = 0;
var ulid = "";
var leixing = ["p","h1","h2","a"];
var daimaleixing_js = [
  //javascript
  "var","#569CD6"
,"case","#569CD6"
,"break","#569CD6"

,"for","#c586c0"
,"switch","#c586c0"
,"function","#569CD6"
,"if","#c586c0"
,"else","#c586c0"

,"style","#4fc1ff"
];
var daimaleixing_py = [
//python
"from","#cc7832"
,"import","#cc7832"
," as","#cc7832"
,"def","#cc7832"
,",","#cc7832"
,"elif","#cc7832"
,"if","#cc7832"
," in","#cc7832"
,"for","#cc7832"

," open","#5a77c5"
," str","#5a77c5"
];

var lieshu = 0;
var baidu0 = "https://www.baidu.com/s?wd=";
var baidu1 = "&rsv_spt=1&rsv_iqid=0xff48a07f00019107&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_dl=tb&rsv_sug3=5&rsv_sug2=0&rsv_btype=i&inputT=1139&rsv_sug4=2271";
var TXTGithub = "https://raw.githubusercontent.com/wuxingwushu/wuxingwushu.github.io/main/";
var TXTGitee = "https://gitee.com/daosheng0/daosheng/raw/master/";


//主界面的菜单出现动画
function donghuakai(IDshu){

  if(fubool == 1){

    if((IDshu + 3) != ulid){
      shanchu(ulid);
      addp(IDshu);
      ulid=IDshu+3;
    }
    
    fudonghuatuen(IDshu);
    return;
  }
   
  ulid=IDshu+3;
  shubiaogundong();


  var elem = document.getElementById(IDshu);
  var elem1 = document.getElementById(IDshu+1);
  var elem2 = document.getElementById(IDshu+2);

  //alert(document.documentElement.scrollWidth); 

  var pos = elem.getBoundingClientRect().left;
  var pos1 = elem1.getBoundingClientRect().left;
  var pos2 = elem2.getBoundingClientRect().left;

  var id = setInterval(frame, 5);

  bool=1;
  var kuan = document.documentElement.scrollWidth;

  function frame() {
    if (pos < -kuan*0.045) {
      pos = pos + 6; 
      if(bool==1)elem.style.left = pos + "px"; 
    }
    if (pos1 > kuan*0.155) {
      pos1 = pos1 - 16;   
      if(bool==1)elem1.style.left = pos1 + "px"; 
    }
    if (pos2 > -kuan*0.745) {
      pos2 = pos2 - 32; 
      if(bool==1)elem2.style.left = pos2 + "px"; 
    }
    if(pos >= -kuan*0.045 && pos1 <= kuan*0.155 && pos2 <= -kuan*0.745)
    {
      elem.style.left = -kuan*0.045 + "px";
      elem1.style.left = kuan*0.154 + "px";
      elem2.style.left = -kuan*0.745 + "px";
      clearInterval(id);
    }
  }
}
//主界面的菜单退出动画
function donghuatuen(IDshu){

  if(fubool == 1){
    return;
  }

  
  shubiaogundong0();


  var elem = document.getElementById(IDshu);
  var elem1 = document.getElementById(IDshu+1);
  var elem2 = document.getElementById(IDshu+2);

  //alert(document.documentElement.scrollWidth); 
  var kuan = document.documentElement.scrollWidth;
  var pos = elem.getBoundingClientRect().left;
  var pos1 = elem1.getBoundingClientRect().left;
  var pos2 = elem2.getBoundingClientRect().left-kuan*0.645;

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

//主界面的菜单内容显示动画
function fudonghuakai(IDshu){

  var elem = document.getElementById(IDshu);
  var elem1 = document.getElementById(IDshu+1);
  var elem2 = document.getElementById(IDshu+2);

  //alert(document.documentElement.scrollWidth); 
  var kuan = document.documentElement.scrollWidth;
  var pos = elem.getBoundingClientRect().left;
  var pos1 = elem1.getBoundingClientRect().left;
  var pos2 = elem2.getBoundingClientRect().left-kuan*0.645;

  var id = setInterval(frame, 5);

  fubool = 1;
  var degshu = -12;

  function frame() {
    if (pos > -kuan*0.2) {
      pos = pos - 6; 
      if(fubool==1)elem.style.left = pos + "px"; 
    }
    if (pos1 > kuan*0.05) {
      pos1 = pos1 - 1;   
      if(fubool==1){
        elem1.style.left = pos1 + "px";
        if(degshu <= 0){
          degshu = degshu + 0.1;
          elem1.style.transform = "skew(" + degshu + "deg)";
        }
      }
    }
    if (pos2 > -kuan*1.1) {
      pos2 = pos2 - 16; 
      if(fubool==1)elem2.style.left = pos2 + "px"; 
    }
    if(pos <= -kuan*0.2 && pos1 <= kuan*0.05 && pos2 <= -kuan*1.1)
    {
      elem.style.left = -kuan*0.2 + "px";
      elem1.style.left = kuan*0.05 + "px";
      elem2.style.left = -kuan*1.1 + "px";
      elem1.style.transform = "skew(0deg)";
      clearInterval(id);
    }
  }
}
//主界面的菜单内容退出动画
function fudonghuatuen(IDshu){

  var elem = document.getElementById(IDshu);
  var elem1 = document.getElementById(IDshu+1);
  var elem2 = document.getElementById(IDshu+2);

  //alert(document.documentElement.scrollWidth); 
  var kuan = document.documentElement.scrollWidth;
  var pos = elem.getBoundingClientRect().left;
  var pos1 = elem1.getBoundingClientRect().left;
  var pos2 = elem2.getBoundingClientRect().left-kuan*0.645;

  var id = setInterval(frame, 5);

  fubool = 0;
  var degshu = 0;

  function frame() {
    if (pos < -kuan*0.045) {
      pos = pos + 6; 
      if(fubool==0)elem.style.left = pos + "px"; 
    }
    if (pos1 < kuan*0.155) {
      pos1 = pos1 + 1;   
      if(fubool==0){
        elem1.style.left = pos1 + "px";
        if(degshu >= -12){
          degshu = degshu - 2;
          elem1.style.transform = "skew(" + degshu + "deg)";
        }
      }
    }
    if (pos2 < -kuan*0.745) {
      pos2 = pos2 + 16; 
      if(fubool==0)elem2.style.left = pos2 + "px"; 
    }
    if(pos >= -kuan*0.045 && pos1 >= kuan*0.155 && pos2 >= -kuan*0.745)
    {
      elem.style.left = -kuan*0.045 + "px";
      elem1.style.left = kuan*0.155 + "px";
      elem2.style.left = -kuan*0.745 + "px";
      elem1.style.transform = "skew(-12deg)";
      clearInterval(id);
    }
  }
}





































//删除主键
function shanchu(neirong)
{
  var child=document.getElementById(neirong);
  child.parentNode.removeChild(child);
}





//添加小标题主键
function addp(shu)
{
  var ele = document.createElement("p");//创建一个LI
  ele.id = "xtxt" + (shu + 3);
  ele.style.className = "xiaoTXT";
  document.getElementById((shu + 1)).appendChild(ele);//把LI放到ID="zhu"的lu里面
}
//添加主键
function addli(type,TXT,shu,TXT1,shu1)
{
  var ele = document.createElement(type);//创建一个LI
  ele.innerHTML = TXT;//修改里面的属性s
  //ele.id = TXT;
  ele.onmouseover = function() {yulan(TXT1,shu1);}

  var ul = ""
  switch(shu){
    case "3":ul ="Game/" + TXT + ".txt";break;
    case "7":ul ="Dentury/" + TXT + ".txt";break;
    case "11":ul ="Skill/" + TXT + ".txt";break;
  }

  ele.onclick = function() {fudonghuakai((shu-3));duqutxtneirong(ul);}
  document.getElementById(shu).appendChild(ele);//把LI放到ID="zhu"的lu里面
}
//添加空建
function addlifu(type,shu)
{
  var ele = document.createElement(type);//创建一个LI
  document.getElementById(shu).appendChild(ele);//把LI放到ID="zhu"的lu里面
}
//显示简介
function yulan(TXT,id)
{
  var child=document.getElementById(id);
  child.innerHTML=TXT;
}
//读取TXT（链接）
function urlToBlob(URss,id,zhujian,id1) {
  let file_url = "https://raw.githubusercontent.com/wuxingwushu/wuxingwushu.github.io/main/" + URss;
  let xhr = new XMLHttpRequest();
  xhr.open("get", file_url, true);
  xhr.responseType = "blob";
  xhr.onload = function () {
    if (this.status == 200) {
      //console.log(this.response)
      const reader = new FileReader()
      reader.onload = function () {
        //console.log('reader.result', reader.result)
        
        for (let index = 0; index < 4; index++){
          addlifu("li",id);
        }
        for (let index = 0; index < reader.result.split("\n").length-1; index=index+2) {
          addli(zhujian,reader.result.split("\n")[index],id,reader.result.split("\n")[index+1],id1);
        }
        for (let index1 = 0; index1 < 5; index1++) {
          addlifu("li",id);
        }

      }
      reader.readAsText(this.response);
    }
  };
  xhr.send();
}






var scrollFunction = function(e) {
  e = e || window.event;
  e.preventDefault && e.preventDefault(); //禁止浏览器默认事件
  if (e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件
      if (e.wheelDelta > 0) { //当滑轮向上滚动时
        ulyidong(-100);
      }
      if (e.wheelDelta < 0) { //当滑轮向下滚动时
        ulyidong(100);
      }

  } else if (e.detail) { //Firefox滑轮事件
      if (e.detail > 0) { //当滑轮向上滚动时
        ulyidong(-100);
      }
      if (e.detail < 0) { //当滑轮向下滚动时
        ulyidong(100);
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







urlToBlob('Game/游戏日志.txt',"3","li","xtxt3");
urlToBlob('Dentury/事记.txt',"7","li","xtxt7");
urlToBlob('Skill/技束.txt',"11","li","xtxt11");






































//添加代码主键
function addma(type,TXT,shu,yangshi)
{
  var divs = "div" + lieshu;
  var divt = document.createElement("div");//创建一个LI
  divt.id = divs;
  divt.style.borderStyle = "solid";
  divt.style.borderWidth = "5px";
  divt.style.borderColor = "#303030";
  divt.style.height = "auto";
  divt.style.width = "90%";
  divt.style.left = "5%";
  divt.style.position = "relative";
  divt.style.background = "#303030";
  //divt.style.transform = "skew(12deg)";
  document.getElementById(shu).appendChild(divt);

  var you = 1;


  var txtdata = [];
  for (let index = 0; index < yangshi.length; index=index+2) {
    var i = 1;
    var to = 0;
    while(i){
      if(TXT.substr(to,10000).search(yangshi[index]) != -1){
        you = 0;
        to = to + TXT.substr(to,10000).search(yangshi[index]);
        txtdata.push(to);
        txtdata.push(yangshi[index+1]);
        to = to + yangshi[index].length;
        txtdata.push(to);
      }
      else{
        i = 0;
      }
    }
  }
  var len = txtdata.length;
  var tmp1 = null;
  var tmp2 = null;
  var tmp3 = null;
  for(var j=0; j<len-3; j=j+3){
    for(var i=0; i<len-3-j; i=i+3){
      if(txtdata[i]>txtdata[i+3]){
        tmp1 = txtdata[i];
        tmp2 = txtdata[i+1];
        tmp3 = txtdata[i+2];


        txtdata[i] = txtdata[i+3];
        txtdata[i+1] = txtdata[i+4];
        txtdata[i+2] = txtdata[i+5];


        txtdata[i+3] = tmp1;
        txtdata[i+4] = tmp2;
        txtdata[i+5] = tmp3;
      }
    }
  }
  
  if(you){
    xinTXT=TXT;
  }
  else{
    var xinTXT = TXT.substr(0,txtdata[0]);
    xinTXT = xinTXT + "<span style='color:" + txtdata[1] + "'>" + TXT.substr(txtdata[0],(txtdata[2]-txtdata[0])) + "</span>";
    for (let index = 3; index < txtdata.length; index=index+3) {
    xinTXT = xinTXT + TXT.substr(txtdata[index-1],(txtdata[index]-txtdata[index-1]));
    xinTXT = xinTXT + "<span style='color:" + txtdata[index+1] + "'>" + TXT.substr(txtdata[index],(txtdata[index+2]-txtdata[index])) + "</span>";
    }
    xinTXT = xinTXT + TXT.substr(txtdata[txtdata.length-1],10000);
  }

  if(xinTXT.search("//") != -1){
    xinTXT = xinTXT.substr(0,xinTXT.search("//")) + "<span style='color:#6a9955'>" + xinTXT.substr(xinTXT.search("//"),10000) + "</span>";
  }
  if(xinTXT.search("# ") != -1){
    xinTXT = xinTXT.substr(0,xinTXT.search("#")) + "<span style='color:#6a9955'>" + xinTXT.substr(xinTXT.search("#"),10000) + "</span>";
  }


  //console.log(xinTXT);
  var ele = document.createElement("p");//创建一个LI
  ele.style ='white-space:pre;';
  ele.innerHTML = xinTXT;//修改里面的属性s
  //ele.style.width = "100%";
  ele.style.color = "#ffffff";
  ele.className = type;
  //ele.style.float = "left";
  document.getElementById(divs).appendChild(ele);//把LI放到ID="zhu"的lu里面


  lieshu++;
}
//添加文字主键
function add(type,TXT,shu)
{
  var divs = "div" + lieshu;
  var divt = document.createElement("div");//创建一个LI
  divt.id = divs;
  //divt.style.height = "20%";
  divt.style.width = "90%";
  divt.style.left = "5%";
  divt.style.position = "relative";
  //divt.style.transform = "skew(12deg)";
  document.getElementById(shu).appendChild(divt);


  var tiaoguo = "";
  switch(type){
    case "p":tiaoguo = 1; break;
    case "a":tiaoguo = 1; break;
    case "h1":tiaoguo = 2; break;
    case "h2":tiaoguo = 2; break;
  }

  

  if(TXT.search("《") != -1){
    TXT = TXT.substr(0,TXT.search("《")+1) + "<a target='view_window' style='color:#00c6ff' href='" + baidu0 + TXT.substr((TXT.search("《")+1),(TXT.search("》")-TXT.search("《")-1)) + baidu1 + "'>" + TXT.substr((TXT.search("《")+1),(TXT.search("》")-TXT.search("《")-1)) + "</a>" + TXT.substr((TXT.search("》")),10000);
  }


  var ele = document.createElement(type);//创建一个LI
  ele.innerHTML = TXT.substr(tiaoguo,10000);//修改里面的属性s
  //ele.style.width = "100%";
  ele.className = type;
  //ele.style.float = "left";
  document.getElementById(divs).appendChild(ele);//把LI放到ID="zhu"的lu里面


  lieshu++;
}
//添加主键
function adddiv(id)
{
  var ele = document.createElement("div");//创建一个LI
  ele.id = "xianshineirong" + id;
  ele.style.height = "100%";
  ele.style.width = "100%";
  ele.style.overflow = "auto";//多出来的内容可以滚动出来
  document.getElementById(id).appendChild(ele);//把LI放到ID="zhu"的lu里面
}

function duqutxtneirong(URss){
  let file_url = "https://raw.githubusercontent.com/wuxingwushu/wuxingwushu.github.io/main/" + URss;
  let xhr = new XMLHttpRequest();
  xhr.open("get", file_url, true);
  xhr.responseType = "blob";
  xhr.onload = function () {
    if (this.status == 200) {
      //console.log(this.response)
      const reader = new FileReader()
      reader.onload = function () {
        
        shanchu("xtxt"+ulid)
        adddiv(ulid-2);
        var idming = "xianshineirong" + (ulid-2);

        

        ulid = idming;

  

        for (let index = 0; index < reader.result.split("\n").length; index++) {
          for(let lei = 0; lei < leixing.length;lei++){
            if(reader.result.split("\n")[index].search(leixing[lei]) != -1){
              add(leixing[lei],reader.result.split("\n")[index],idming);
            }
            if(reader.result.split("\n")[index].search("<代码>") != -1){
              index++;
              var zfc = reader.result.split("\n")[index].substr(0,2);
              switch(zfc){
                case "js":var daimayingshi=daimaleixing_js; break;
                case "py":var daimayingshi=daimaleixing_py; break;
              }
              index++;
              while(reader.result.split("\n")[index].search("</代码>") == -1){
                addma(leixing[lei],reader.result.split("\n")[index],idming,daimayingshi);
                index++;
              }
            }
          }
        }


      }
      reader.readAsText(this.response);
    }
  };
  xhr.send();
}
