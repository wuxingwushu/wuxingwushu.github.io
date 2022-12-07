var bool = 1;
var fubool = 0;
var ulid = "";
var leixing = ["p","a","h1","h2","h3","h4","h5"];

var lieshu = 0;
var baidu0 = "https://www.baidu.com/s?wd=";
var baidu1 = "&rsv_spt=1&rsv_iqid=0xff48a07f00019107&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_dl=tb&rsv_sug3=5&rsv_sug2=0&rsv_btype=i&inputT=1139&rsv_sug4=2271";
var TXTGithub = "https://wuxingwushu.github.io/";
var TXTGitee = "https://gitee.com/daosheng0/daosheng/raw/master/";


//音乐播放器
var audio = document.getElementById('yinyue');
var totalProgress = $('.totalProgress');
var currentProgress = $('.currentProgress');

var daohang_sf = 1;



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
    if (pos < -kuan*0.044) {
      pos = pos + 6; 
      if(bool==1)elem.style.left = pos + "px";
    }
    if (pos1 > kuan*0.154) {
      pos1 = pos1 - 16;   
      if(bool==1)elem1.style.left = pos1 + "px"; 
    }
    if (pos2 > -kuan*0.745) {
      pos2 = pos2 - 32; 
      if(bool==1)elem2.style.left = pos2 + "px"; 
    }
    if(pos >= -kuan*0.044 && pos1 <= kuan*0.154 && pos2 <= -kuan*0.745)
    {
      elem.style.left = -kuan*0.044 + "px";
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
  var pos1 = elem1.getBoundingClientRect().left-kuan*0.04;
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
      pos1 = pos1 - 2;   
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
  //document.getElementById("lan").style.display="none";//隐藏导航
  daohang_jin(0)
  document.getElementById("daohang").innerHTML="";//清空导航


  var elem = document.getElementById(IDshu);
  var elem1 = document.getElementById(IDshu+1);
  var elem2 = document.getElementById(IDshu+2);

  //alert(document.documentElement.scrollWidth); 
  var kuan = document.documentElement.scrollWidth;
  var pos = elem.getBoundingClientRect().left;
  var pos1 = elem1.getBoundingClientRect().left-kuan*0.1;
  var pos2 = elem2.getBoundingClientRect().left-kuan*0.645;

  var id = setInterval(frame, 5);

  fubool = 0;
  var degshu = 0;

  function frame() {
    if (pos < -kuan*0.043) {
      pos = pos + 6; 
      if(fubool==0)elem.style.left = pos + "px"; 
    }
    if (pos1 < kuan*0.155) {
      pos1 = pos1 + 2;   
      if(fubool==0){
        elem1.style.left = pos1 + "px";
        if(degshu >= -12){
          degshu = degshu - 0.1;
          elem1.style.transform = "skew(" + degshu + "deg)";
        }
      }
    }
    if (pos2 < -kuan*0.744) {
      pos2 = pos2 + 16; 
      if(fubool==0)elem2.style.left = pos2 + "px"; 
    }
    if(pos >= -kuan*0.043 && pos1 >= kuan*0.155 && pos2 >= -kuan*0.744)
    {
      elem.style.left = -kuan*0.043 + "px";
      elem1.style.left = kuan*0.155 + "px";
      elem2.style.left = -kuan*0.744 + "px";
      elem1.style.transform = "skew(-12deg)";
      clearInterval(id);
    }
  }
}



























//导航动画
function daohang_jin(kuan){
  var kuan_shu = document.getElementById("lan").getBoundingClientRect().width;
  var width = document.getElementById("lan");
  var id = setInterval(frame, 5);
  function frame() {
    if(kuan > kuan_shu){
      kuan_shu++;
      width.style.width = kuan_shu + "px"
    }
    if(kuan == kuan_shu){
      clearInterval(id);
    }
    if(kuan < kuan_shu){
      kuan_shu--;
      width.style.width = kuan_shu + "px"
    }
  }
}
function daohang_tuei(){
  
}
























//音效播放器
function playSound(){
  document.getElementById('audio').play();
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
  ele.classList.add("li_zhu");
  ele.onmouseover = function() {yulan(TXT1,shu1);}

  var ul = ""
  switch(shu){
    case "3":ul ="Game/" + TXT + ".md";break;
    case "7":ul ="Dentury/" + TXT + ".md";break;
    case "11":ul ="Skill/" + TXT + ".md";break;
    case "15":ul ="Files/" + TXT + ".md";break;
  }


  ele.onclick = function() {fudonghuakai((shu-3));duqutxtneirong(ul);playSound()}
  document.getElementById(shu).appendChild(ele);//把LI放到ID="zhu"的lu里面
}
//添加空建
function addlifu(type,shu)
{
  var ele = document.createElement(type);//创建一个LI
  ele.classList.add("li_zhu");
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
  let file_url = TXTGithub + URss;
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
          console.log(reader.result.split("\n")[index]);
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
  if(daohang_sf == 1){
    document.getElementById(ulid).scrollTop=document.getElementById(ulid).scrollTop+shu;
  }else{
    document.getElementById("daohang").scrollTop=document.getElementById("daohang").scrollTop+shu;
  }
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
urlToBlob('Files/档案馆.txt',"15","li","xtxt15");
























//添加文字主键
function add(type,TXT,shu)
{
  //对书名加上百度链接
  if(TXT.search("《") != -1){
    TXT = TXT.substr(0,TXT.search("《")+1) + "<a target='view_window' style='color:#00c6ff' href='" + baidu0 + TXT.substr((TXT.search("《")+1),(TXT.search("》")-TXT.search("《")-1)) + baidu1 + "'>" + TXT.substr((TXT.search("《")+1),(TXT.search("》")-TXT.search("《")-1)) + "</a>" + TXT.substr((TXT.search("》")),10000);
  }

  var ele = document.createElement(type);//创建一个LI
  ele.classList.add("neirong_txt");
  ele.classList.add("neirong_div");
  ele.innerHTML = TXT.substr(type.length,10000);//修改里面的属性s
  document.getElementById(shu).appendChild(ele);//把LI放到ID="zhu"的lu里面
}


//表格
function addbiaoge(type,TXT,shu){
  var divs = "div" + lieshu;
  var divt = document.createElement("div");//创建一个LI
  divt.id = divs;
  divt.classList.add("neirong_div_fen");
  document.getElementById(shu).appendChild(divt);



  var zfc = [-3]
  var i = 1;
  var to = 0;
  while(i){
    if(TXT.substr(to,10000).search("<分>") != -1){
      to = to + TXT.substr(to,10000).search("<分>");
      zfc.push(to);
      to++;
    }
    else{
      i = 0;
    }
  }
  var kuan_fen = 100 / zfc.length;
  zfc.push(10000);

  for (let index = 0; index < zfc.length - 1; index++) {
    var ele = document.createElement(type);//创建一个LI
    ele.style.float = "left";
    //if(zfc.length - 1 == index){ele.style.float = "right";}
    ele.style.width = kuan_fen + "%"
    ele.classList.add("neirong_txt_fen");
    ele.innerHTML = TXT.substr(zfc[index]+3,(zfc[index+1] - zfc[index] - 3));
    document.getElementById(divs).appendChild(ele);
  }

  lieshu++;
}


//添加图片
function addtu(lu,shu)
{
  var ele = document.createElement("img");//创建一个LI
  ele.src = "https://images.weserv.nl/?url=" + lu;//设置图片的链接
  ele.style.top = "20px";
  ele.classList.add("neirong_div");
  document.getElementById(shu).appendChild(ele);//把LI放到ID="zhu"的lu里面
}


//添加自定义内容
function addzidinyi(lu,shu)
{
  var divt = document.createElement("div");//创建一个LI
  divt.classList.add("neirong_div");
  divt.innerHTML = lu;//你定义的内容直接放在<div>里面
  document.getElementById(shu).appendChild(divt);
}


//添加导航
function adddaohang(nr)
{
  daohang_jin(150);
  var ele = document.createElement("li");//创建一个LI
  ele.classList.add("daohang_li");
  ele.classList.add("li_zhu");
  ele.innerHTML = nr;//修改里面的属性

  ele.onclick = function() {
    var index = $(this).index();//获取点的是第几个li
    var top = $(".daohang_biao").eq(index).offset().top;//获得第几个".daohang_biao"的位置高度
    document.getElementById(ulid).scrollTop=document.getElementById(ulid).scrollTop+top;//调整页面位置
  }
  ele.onmouseover = function(){
    //daohang_jin(200);
    daohang_sf = 0;
  }
  ele.onmouseout = function(){
    daohang_sf = 1;
  }

  document.getElementById("daohang").appendChild(ele);//把LI放到ID="zhu"的lu里面
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
  let file_url = TXTGithub + URss;
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
        var hang = reader.result.split("\n");

        //读取每一行，并根据开头信息，做出不同判断
        for (let index = 0; index < hang.length; index++) {
            var biaoqian = hang[index].substr(0,3);
            switch(biaoqian){
              case"```":
                      var xz = hang[index].substr(3,20);
                      index++;
          
                      var divs = "div" + lieshu;
                      var divt = document.createElement("div");//创建一个LI
                      divt.id = divs;
                      divt.classList.add("daima_div");
                      document.getElementById(idming).appendChild(divt);
  
                      lieshu++;
                      var strings;
                      while(hang[index].search("```") != 0){
                        strings += hang[index] + "\n";
                        index++;
                      }

                      strings = "<pre><code class=" + xz + ">" + strings + "</code></pre>"

                      var ele = document.createElement("div");//创建一个LI
                      //ele.classList.add("daima_div");
                      ele.innerHTML = strings;//修改里面的属性
                      document.getElementById(divs).appendChild(ele);//把LI放到ID="zhu"的lu里面
                      break;

              //case"<导航>":adddaohang(hang[index].substr(4,10000),idming);break;

              //case"<分>":addbiaoge("p",hang[index].substr(3,10000),idming);break;

              default:
                      var ele = document.createElement("div");//创建一个LI
                      if(hang[index].substr(0,3) == "## "){//如果是h2就添加导航
                        adddaohang(hang[index].substr(3,10000));
                        ele.classList.add("daohang_biao");
                      }
                      ele.classList.add("neirong_div");
                      ele.innerHTML = marked.parse(hang[index]);//修改里面的属性
                      document.getElementById(idming).appendChild(ele);
                      break;
            }
            hljs.initHighlightingOnLoad();
        }
      }
      reader.readAsText(this.response);
    }
  };
  xhr.send();
}


























var shijian_T = 0;//歌曲暂停的位置
var ge_Tion;//歌曲的总时长
var geid = 0;//播放那一首歌
var gemulu = []//歌曲的目录


function duqutxtgemulu(){
  let file_url = TXTGithub + "Music/音乐.txt";
  let xhr = new XMLHttpRequest();
  xhr.open("get", file_url, true);
  xhr.responseType = "blob";
  xhr.onload = function () {
    if (this.status == 200) {
      //console.log(this.response)
      const reader = new FileReader()
      reader.onload = function () {

        //读取每一行歌名并将其处理成SRC链接存储到gemulu[]当中
        for (let index = 0; index < reader.result.split("\n").length-1; index++) {
          gemulu.push("https://cdn.jsdelivr.net/gh/wuxingwushu/wuxingwushu.github.io/Music/" + reader.result.split("\n")[index]);//获取歌的目录
        }

      }
      reader.readAsText(this.response);
    }
  };
  xhr.send();
}



function bofang()
{
  //切换图案
  document.getElementById("bofang").style.display="none";
  document.getElementById("zhanting").style.display="block";

  audio.src = gemulu[geid];//获取歌的链接
  audio.currentTime = shijian_T;//从哪里开始播放
  audio.play();//播放


  timer = setInterval(function () {
    if (audio.ended) {
        //如果音频播放结束
        shijian_T=0;//从头开始
        geid++;//下一首歌
        if(geid==gemulu.length)//列表循环
        {
          geid=0;
        }
        audio.src = gemulu[geid];//拿到下一首歌的SRC
        audio.play();//播放
    } else {
        //更改进度条
        var ratio = audio.currentTime / audio.duration;
        currentProgress.css({'width': ratio * 100 + '%'});
    }
  }, 100)
}

function zhanting()
{
  //切换图案
  document.getElementById("zhanting").style.display="none";
  document.getElementById("bofang").style.display="block";

  audio.pause();//暂停

  shijian_T = audio.currentTime;//获取暂停播放位置
}

function shangyishou(){
  geid--;
  if(geid==-1)//列表循环
  {
    geid=gemulu.length-1;
  }
  audio.src = gemulu[geid];//获取歌的链接
  audio.play();//播放
}

function xiayishou(){
  geid++;
  if(geid==gemulu.length)//列表循环
  {
    geid=0;
  }
  audio.src = gemulu[geid];//获取歌的链接
  audio.play();//播放
}

//显示歌曲进度条的控制范围
function xianshijindu(){
  document.getElementById("icon").style.width="264px";
  document.getElementById("jindu").style.display="block";
  document.getElementById("shangyishou").style.display="block";
  document.getElementById("xiayishou").style.display="block";
}
function xianshijinduf(){
  document.getElementById("icon").style.width="64px";
  document.getElementById("jindu").style.display="none";
  document.getElementById("shangyishou").style.display="none";
  document.getElementById("xiayishou").style.display="none";
}




/*单击进度条更改进度*/
totalProgress.on('click', function (ev) {
  //获取百分比
  var ratio = getRatio(ev);
  currentProgress.css({'width': ratio * 100 + '%'});
  //更改音频进度
  audio.currentTime = audio.duration * ratio;
});

function getRatio(ev) {
  //总进度条的实际宽度
  var totalWidth = totalProgress[0].offsetWidth;
  //总进度条的X坐标
  var totalX = totalProgress.offset().left;
  //鼠标的X坐标
  var mouseX = ev.clientX;
  //求出百分比
  var ratio = (mouseX - totalX) / totalWidth;
  return ratio;
}

//获取歌曲目录
duqutxtgemulu();



















//鼠标跟随小可爱


let img = document.querySelector('.xiaokeai_gif')
// 定义小图片的旋转角度
let deg = 0
// 定义小图片位于网页左侧的位置
let imgx = 0
// 定义小图片位于网页顶部的位置
let imgy = 0
// 定义小图片x轴的位置
let imgl = 0
// 定义小图片y轴的位置
let imgt = 0
// 定义小图片翻转的角度
let y = 0 
// 定义一个计数器
let index = 0

window.addEventListener('mousemove',function(xyz){
    // 获取网页左侧距离的图片位置
    imgx = xyz.x - img.offsetLeft - img.clientWidth /2
    // 多去网页顶部距离图片的位置
    imgy = xyz.y - img.offsetTop - img.clientHeight /2 - 40
    // 套入公式，定义图片的旋转角度
    deg = 360*Math.atan(imgy/imgx)/(2*Math.PI)
    // 每当鼠标移动的时候重置index
    index= 0
    // 定义当前鼠标的位置
    let x = event.clientX
    // 当鼠标的x轴大于图片的时候，提普安就要对着鼠标，所以需要将图片翻转过来
    // 否则就不用翻转
    if(img.offsetLeft<x){
        y=-180
    }else{
        y=0
    }
})
setInterval(()=>{
    // 设置小图片的旋转和翻转
    img.style.transform = "rotateZ("+deg+"deg) rotateY("+y+"deg)"
    index++
    // 在这里设置小图片的位置和速度，并判断小图片到达鼠标位置时停止移动
    if(index<50){
        imgl+=imgx/50
        imgt+=imgy/50
    }
    img.style.left = imgl + "px"
    img.style.top = imgt + "px"
},10)















//标题切换
document.addEventListener('visibilitychange',function(){
  if(document.hidden){
    document.title = "o(≧口≦)o你给我回来~~"
  }else{
    document.title = "(=￣ω￣=)吾行误述"
  }
},false);






















var postData = {
  "name1": "value1",
  "name2": "value2"};
postData = (function(obj){ // 转成post需要的字符串.
  var str = "";
  for(var prop in obj){
      str += prop + "=" + obj[prop] + "&"
  }
  return str;
})(postData);
var xhr = new XMLHttpRequest();
xhr.open("POST", "../module", true);
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhr.onreadystatechange = function(){
  var XMLHttpReq = xhr;
  if (XMLHttpReq.readyState == 4&&XMLHttpReq.status == 200) {
          var text = XMLHttpReq.responseText;
          console.log(text);
      }
};
//xhr.send(postData);




MIDIjs.play("https://wuxingwushu.github.io/Natural/1.mid");