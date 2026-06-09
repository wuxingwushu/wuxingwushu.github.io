var bool = 1;
var fubool = 0;
var ulid = "";
var lieshu = 0;
var baidu0 = "https://www.baidu.com/s?wd=";
var baidu1 = "&rsv_spt=1&rsv_iqid=0xff48a07f00019107&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_dl=tb&rsv_sug3=5&rsv_sug2=0&rsv_btype=i&inputT=1139&rsv_sug4=2271";
var TXTGithub = "https://wuxingwushu.github.io/";
var TXTGitee = "https://gitee.com/daosheng0/daosheng/raw/master/";

// 音乐播放器
var audio = document.getElementById('yinyue');
var totalProgress = $('.totalProgress');
var currentProgress = $('.currentProgress');
var daohang_sf = 1;

// 主界面的菜单出现动画
function donghuakai(IDshu) {
    if (fubool == 1) {
        if ((IDshu + 3) != ulid) {
            shanchu(ulid);
            addp(IDshu);
            ulid = IDshu + 3;
        }
        fudonghuatuen(IDshu);
        return;
    }

    ulid = IDshu + 3;
    shubiaogundong();

    var elem = document.getElementById(IDshu);
    var elem1 = document.getElementById(IDshu + 1);
    var elem2 = document.getElementById(IDshu + 2);

    var pos = elem.getBoundingClientRect().left;
    var pos1 = elem1.getBoundingClientRect().left;
    var pos2 = elem2.getBoundingClientRect().left;

    var id = setInterval(frame, 5);
    bool = 1;
    var kuan = document.documentElement.scrollWidth;

    function frame() {
        if (pos < -kuan * 0.044) {
            pos = pos + 6;
            if (bool == 1) elem.style.left = pos + "px";
        }
        if (pos1 > kuan * 0.154) {
            pos1 = pos1 - 16;
            if (bool == 1) elem1.style.left = pos1 + "px";
        }
        if (pos2 > -kuan * 0.745) {
            pos2 = pos2 - 32;
            if (bool == 1) elem2.style.left = pos2 + "px";
        }
        if (pos >= -kuan * 0.044 && pos1 <= kuan * 0.154 && pos2 <= -kuan * 0.745) {
            elem.style.left = -kuan * 0.044 + "px";
            elem1.style.left = kuan * 0.154 + "px";
            elem2.style.left = -kuan * 0.745 + "px";
            clearInterval(id);
        }
    }
}

// 主界面的菜单退出动画
function donghuatuen(IDshu) {
    if (fubool == 1) {
        return;
    }

    shubiaogundong0();

    var elem = document.getElementById(IDshu);
    var elem1 = document.getElementById(IDshu + 1);
    var elem2 = document.getElementById(IDshu + 2);

    var kuan = document.documentElement.scrollWidth;
    var pos = elem.getBoundingClientRect().left;
    var pos1 = elem1.getBoundingClientRect().left;
    var pos2 = elem2.getBoundingClientRect().left - kuan * 0.645;

    var id = setInterval(frame, 5);
    bool = 0;

    function frame() {
        if (pos > -kuan * 0.2) {
            pos = pos - 6;
            if (bool == 0) elem.style.left = pos + "px";
        }
        if (pos1 < kuan) {
            pos1 = pos1 + 16;
            if (bool == 0) elem1.style.left = pos1 + "px";
        }
        if (pos2 < kuan * 0.4) {
            pos2 = pos2 + 32;
            if (bool == 0) elem2.style.left = pos2 + "px";
        }
        if (pos <= -kuan * 0.2 && pos1 >= kuan && pos2 >= kuan * 0.4) {
            elem.style.left = -kuan * 0.2 + "px";
            elem1.style.left = kuan * + "px";
            elem2.style.left = kuan * 0.4 + "px";
            clearInterval(id);
        }
    }
}

// 主界面的菜单内容显示动画
function fudonghuakai(IDshu) {
    var elem = document.getElementById(IDshu);
    var elem1 = document.getElementById(IDshu + 1);
    var elem2 = document.getElementById(IDshu + 2);

    var kuan = document.documentElement.scrollWidth;
    var pos = elem.getBoundingClientRect().left;
    var pos1 = elem1.getBoundingClientRect().left - kuan * 0.04;
    var pos2 = elem2.getBoundingClientRect().left - kuan * 0.645;

    var id = setInterval(frame, 5);
    fubool = 1;
    var degshu = -12;

    function frame() {
        if (pos > -kuan * 0.2) {
            pos = pos - 6;
            if (fubool == 1) elem.style.left = pos + "px";
        }
        if (pos1 > kuan * 0.05) {
            pos1 = pos1 - 2;
            if (fubool == 1) {
                elem1.style.left = pos1 + "px";
                if (degshu <= 0) {
                    degshu = degshu + 0.1;
                    elem1.style.transform = "skew(" + degshu + "deg)";
                }
            }
        }
        if (pos2 > -kuan * 1.1) {
            pos2 = pos2 - 16;
            if (fubool == 1) elem2.style.left = pos2 + "px";
        }
        if (pos <= -kuan * 0.2 && pos1 <= kuan * 0.05 && pos2 <= -kuan * 1.1) {
            elem.style.left = -kuan * 0.2 + "px";
            elem1.style.left = kuan * 0.05 + "px";
            elem2.style.left = -kuan * 1.1 + "px";
            elem1.style.transform = "skew(0deg)";
            clearInterval(id);
        }
    }
}

// 主界面的菜单内容退出动画
function fudonghuatuen(IDshu) {
    daohang_jin(0);
    document.getElementById("daohang").innerHTML = "";

    var elem = document.getElementById(IDshu);
    var elem1 = document.getElementById(IDshu + 1);
    var elem2 = document.getElementById(IDshu + 2);

    var kuan = document.documentElement.scrollWidth;
    var pos = elem.getBoundingClientRect().left;
    var pos1 = elem1.getBoundingClientRect().left - kuan * 0.1;
    var pos2 = elem2.getBoundingClientRect().left - kuan * 0.645;

    var id = setInterval(frame, 5);
    fubool = 0;
    var degshu = 0;

    function frame() {
        if (pos < -kuan * 0.043) {
            pos = pos + 6;
            if (fubool == 0) elem.style.left = pos + "px";
        }
        if (pos1 < kuan * 0.155) {
            pos1 = pos1 + 2;
            if (fubool == 0) {
                elem1.style.left = pos1 + "px";
                if (degshu >= -12) {
                    degshu = degshu - 0.1;
                    elem1.style.transform = "skew(" + degshu + "deg)";
                }
            }
        }
        if (pos2 < -kuan * 0.744) {
            pos2 = pos2 + 16;
            if (fubool == 0) elem2.style.left = pos2 + "px";
        }
        if (pos >= -kuan * 0.043 && pos1 >= kuan * 0.155 && pos2 >= -kuan * 0.744) {
            elem.style.left = -kuan * 0.043 + "px";
            elem1.style.left = kuan * 0.155 + "px";
            elem2.style.left = -kuan * 0.744 + "px";
            elem1.style.transform = "skew(-12deg)";
            clearInterval(id);
        }
    }
}

// 导航动画
function daohang_jin(kuan) {
    var kuan_shu = document.getElementById("lan").getBoundingClientRect().width;
    var width = document.getElementById("lan");
    var id = setInterval(frame, 5);
    function frame() {
        if (kuan > kuan_shu) {
            kuan_shu++;
            width.style.width = kuan_shu + "px";
        }
        if (kuan == kuan_shu) {
            clearInterval(id);
        }
        if (kuan < kuan_shu) {
            kuan_shu--;
            width.style.width = kuan_shu + "px";
        }
    }
}

// 音效播放器
function playSound() {
    document.getElementById('audio').play();
}

// 删除主键
function shanchu(neirong) {
    var child = document.getElementById(neirong);
    child.parentNode.removeChild(child);
}

// 添加小标题主键
function addp(shu) {
    var ele = document.createElement("p");
    ele.id = "xtxt" + (shu + 3);
    ele.style.className = "xiaoTXT";
    document.getElementById((shu + 1)).appendChild(ele);
}

// 添加主键
function addli(type, TXT, shu, TXT1, shu1) {
    var ele = document.createElement(type);
    ele.innerHTML = TXT;
    ele.classList.add("li_zhu");
    ele.onmouseover = function () { yulan(TXT1, shu1); };

    var ul = "";
    switch (shu) {
        case "3": ul = "Game/" + TXT + ".md"; break;
        case "7": ul = "Dentury/" + TXT + ".md"; break;
        case "11": ul = "Skill/" + TXT + ".md"; break;
        case "15": ul = "Files/" + TXT + ".md"; break;
    }

    ele.onclick = function () { fudonghuakai((shu - 3)); duqutxtneirong(ul); playSound(); };
    document.getElementById(shu).appendChild(ele);
}

// 添加空建
function addlifu(type, shu) {
    var ele = document.createElement(type);
    ele.classList.add("li_zhu");
    document.getElementById(shu).appendChild(ele);
}

// 显示简介
function yulan(TXT, id) {
    var child = document.getElementById(id);
    child.innerHTML = TXT;
}

// 读取TXT（链接）
function urlToBlob(URss, id, zhujian, id1) {
    var file_url = TXTGithub + URss;
    var xhr = new XMLHttpRequest();
    xhr.open("get", file_url, true);
    xhr.responseType = "blob";
    xhr.onload = function () {
        if (this.status == 200) {
            const reader = new FileReader();
            reader.onload = function () {
                for (var index = 0; index < 4; index++) {
                    addlifu("li", id);
                }
                for (var index = 0; index < reader.result.split("\n").length - 1; index = index + 2) {
                    console.log(reader.result.split("\n")[index]);
                    addli(zhujian, reader.result.split("\n")[index], id, reader.result.split("\n")[index + 1], id1);
                }
                for (var index1 = 0; index1 < 5; index1++) {
                    addlifu("li", id);
                }
            };
            reader.readAsText(this.response);
        }
    };
    xhr.send();
}

// 鼠标滚动事件
var scrollFunction = function (e) {
    e = e || window.event;
    e.preventDefault && e.preventDefault();
    if (e.wheelDelta) {
        if (e.wheelDelta > 0) {
            ulyidong(-100);
        }
        if (e.wheelDelta < 0) {
            ulyidong(100);
        }
    } else if (e.detail) {
        if (e.detail > 0) {
            ulyidong(-100);
        }
        if (e.detail < 0) {
            ulyidong(100);
        }
    }
};

function ulyidong(shu) {
    if (daohang_sf == 1) {
        document.getElementById(ulid).scrollTop = document.getElementById(ulid).scrollTop + shu;
    } else {
        document.getElementById("daohang").scrollTop = document.getElementById("daohang").scrollTop + shu;
    }
}

// 禁止浏览器默认事件
function shubiaogundong() {
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', scrollFunction, false);
    }
    window.addEventListener('mousewheel', scrollFunction, { passive: false });
}

// 开启浏览器默认事件
function shubiaogundong0() {
    if (document.removeEventListener) {
        document.removeEventListener('DOMMouseScroll', scrollFunction);
    }
    window.removeEventListener('mousewheel', scrollFunction);
}

// 加载各栏目列表
urlToBlob('Game/游戏日志.txt', "3", "li", "xtxt3");
urlToBlob('Dentury/事记.txt', "7", "li", "xtxt7");
urlToBlob('Skill/技束.txt', "11", "li", "xtxt11");
urlToBlob('Files/档案馆.txt', "15", "li", "xtxt15");

// 添加文字主键
function add(type, TXT, shu) {
    if (TXT.search("《") != -1) {
        TXT = TXT.substr(0, TXT.search("《") + 1) + "<a target='view_window' style='color:#00c6ff' href='" + baidu0 + TXT.substr((TXT.search("《") + 1), (TXT.search("》") - TXT.search("《") - 1)) + baidu1 + "'>" + TXT.substr((TXT.search("《") + 1), (TXT.search("》") - TXT.search("《") - 1)) + "</a>" + TXT.substr((TXT.search("》")), 10000);
    }

    var ele = document.createElement(type);
    ele.classList.add("neirong_txt");
    ele.classList.add("neirong_div");
    ele.innerHTML = TXT.substr(type.length, 10000);
    document.getElementById(shu).appendChild(ele);
}

// 表格
function addbiaoge(type, TXT, shu) {
    var divs = "div" + lieshu;
    var divt = document.createElement("div");
    divt.id = divs;
    divt.classList.add("neirong_div_fen");
    document.getElementById(shu).appendChild(divt);

    var zfc = [-3];
    var i = 1;
    var to = 0;
    while (i) {
        if (TXT.substr(to, 10000).search("<分>") != -1) {
            to = to + TXT.substr(to, 10000).search("<分>");
            zfc.push(to);
            to++;
        } else {
            i = 0;
        }
    }
    var kuan_fen = 100 / zfc.length;
    zfc.push(10000);

    for (var index = 0; index < zfc.length - 1; index++) {
        var ele = document.createElement(type);
        ele.style.float = "left";
        ele.style.width = kuan_fen + "%";
        ele.classList.add("neirong_txt_fen");
        ele.innerHTML = TXT.substr(zfc[index] + 3, (zfc[index + 1] - zfc[index] - 3));
        document.getElementById(divs).appendChild(ele);
    }

    lieshu++;
}

// 添加图片
function addtu(lu, shu) {
    var ele = document.createElement("img");
    ele.src = "https://images.weserv.nl/?url=" + lu;
    ele.style.top = "20px";
    ele.classList.add("neirong_div");
    document.getElementById(shu).appendChild(ele);
}

// 添加自定义内容
function addzidinyi(lu, shu) {
    var divt = document.createElement("div");
    divt.classList.add("neirong_div");
    divt.innerHTML = lu;
    document.getElementById(shu).appendChild(divt);
}

// 添加导航
function adddaohang(nr) {
    daohang_jin(150);
    var ele = document.createElement("li");
    ele.classList.add("daohang_li");
    ele.classList.add("li_zhu");
    ele.innerHTML = nr;

    ele.onclick = function () {
        var index = $(this).index();
        var top = $(".daohang_biao").eq(index).offset().top;
        document.getElementById(ulid).scrollTop = document.getElementById(ulid).scrollTop + top;
    };
    ele.onmouseover = function () {
        daohang_sf = 0;
    };
    ele.onmouseout = function () {
        daohang_sf = 1;
    };

    document.getElementById("daohang").appendChild(ele);
}

// 添加主键
function adddiv(id) {
    var ele = document.createElement("div");
    ele.id = "xianshineirong" + id;
    ele.style.height = "100%";
    ele.style.width = "100%";
    ele.style.overflow = "auto";
    document.getElementById(id).appendChild(ele);
}

// 读取并渲染文章内容
function duqutxtneirong(URss) {
    var file_url = TXTGithub + URss;
    var xhr = new XMLHttpRequest();
    xhr.open("get", file_url, true);
    xhr.responseType = "blob";
    xhr.onload = function () {
        if (this.status == 200) {
            const reader = new FileReader();
            reader.onload = function () {
                shanchu("xtxt" + ulid);
                adddiv(ulid - 2);
                var idming = "xianshineirong" + (ulid - 2);
                ulid = idming;
                var hang = reader.result.split("\n");

                for (var index = 0; index < hang.length; index++) {
                    var biaoqian = hang[index].substr(0, 3);
                    switch (biaoqian) {
                        case "```":
                            var xz = hang[index].substr(3, 20);
                            index++;

                            var divs = "div" + lieshu;
                            var divt = document.createElement("div");
                            divt.id = divs;
                            divt.classList.add("daima_div");
                            document.getElementById(idming).appendChild(divt);

                            lieshu++;
                            var strings;
                            while (hang[index].search("```") != 0) {
                                strings += hang[index] + "\n";
                                index++;
                            }

                            strings = "<pre><code class=" + xz + ">" + strings + "</code></pre>";

                            var ele = document.createElement("div");
                            ele.innerHTML = strings;
                            document.getElementById(divs).appendChild(ele);
                            break;

                        default:
                            var ele = document.createElement("div");
                            if (hang[index].substr(0, 3) == "## ") {
                                adddaohang(hang[index].substr(3, 10000));
                                ele.classList.add("daohang_biao");
                            }
                            ele.classList.add("neirong_div");
                            ele.innerHTML = marked.parse(hang[index]);
                            document.getElementById(idming).appendChild(ele);
                            break;
                    }
                    hljs.initHighlightingOnLoad();
                }
            };
            reader.readAsText(this.response);
        }
    };
    xhr.send();
}

// 音乐播放器相关
var shijian_T = 0;
var ge_Tion;
var geid = 0;
var gemulu = [];

function duqutxtgemulu() {
    var file_url = TXTGithub + "Music/音乐.txt";
    var xhr = new XMLHttpRequest();
    xhr.open("get", file_url, true);
    xhr.responseType = "blob";
    xhr.onload = function () {
        if (this.status == 200) {
            const reader = new FileReader();
            reader.onload = function () {
                for (var index = 0; index < reader.result.split("\n").length - 1; index++) {
                    gemulu.push("https://cdn.jsdelivr.net/gh/wuxingwushu/wuxingwushu.github.io/Music/" + reader.result.split("\n")[index]);
                }
            };
            reader.readAsText(this.response);
        }
    };
    xhr.send();
}

function bofang() {
    document.getElementById("bofang").style.display = "none";
    document.getElementById("zhanting").style.display = "block";

    audio.src = gemulu[geid];
    audio.currentTime = shijian_T;
    audio.play();

    timer = setInterval(function () {
        if (audio.ended) {
            shijian_T = 0;
            geid++;
            if (geid == gemulu.length) {
                geid = 0;
            }
            audio.src = gemulu[geid];
            audio.play();
        } else {
            var ratio = audio.currentTime / audio.duration;
            currentProgress.css({ 'width': ratio * 100 + '%' });
        }
    }, 100);
}

function zhanting() {
    document.getElementById("zhanting").style.display = "none";
    document.getElementById("bofang").style.display = "block";

    audio.pause();
    shijian_T = audio.currentTime;
}

function shangyishou() {
    geid--;
    if (geid == -1) {
        geid = gemulu.length - 1;
    }
    audio.src = gemulu[geid];
    audio.play();
}

function xiayishou() {
    geid++;
    if (geid == gemulu.length) {
        geid = 0;
    }
    audio.src = gemulu[geid];
    audio.play();
}

// 显示歌曲进度条的控制范围
function xianshijindu() {
    document.getElementById("icon").style.width = "264px";
    document.getElementById("jindu").style.display = "block";
    document.getElementById("shangyishou").style.display = "block";
    document.getElementById("xiayishou").style.display = "block";
}

function xianshijinduf() {
    document.getElementById("icon").style.width = "64px";
    document.getElementById("jindu").style.display = "none";
    document.getElementById("shangyishou").style.display = "none";
    document.getElementById("xiayishou").style.display = "none";
}

// 单击进度条更改进度
totalProgress.on('click', function (ev) {
    var ratio = getRatio(ev);
    currentProgress.css({ 'width': ratio * 100 + '%' });
    audio.currentTime = audio.duration * ratio;
});

function getRatio(ev) {
    var totalWidth = totalProgress[0].offsetWidth;
    var totalX = totalProgress.offset().left;
    var mouseX = ev.clientX;
    var ratio = (mouseX - totalX) / totalWidth;
    return ratio;
}

// 获取歌曲目录
duqutxtgemulu();

// 鼠标跟随小可爱
var img = document.querySelector('.xiaokeai_gif');
var deg = 0;
var imgx = 0;
var imgy = 0;
var imgl = 0;
var imgt = 0;
var y = 0;
var index = 0;

window.addEventListener('mousemove', function (xyz) {
    imgx = xyz.x - img.offsetLeft - img.clientWidth / 2;
    imgy = xyz.y - img.offsetTop - img.clientHeight / 2 - 40;
    deg = 360 * Math.atan(imgy / imgx) / (2 * Math.PI);
    index = 0;
    var x = event.clientX;
    if (img.offsetLeft < x) {
        y = -180;
    } else {
        y = 0;
    }
});

setInterval(function () {
    img.style.transform = "rotateZ(" + deg + "deg) rotateY(" + y + "deg)";
    index++;
    if (index < 50) {
        imgl += imgx / 50;
        imgt += imgy / 50;
    }
    img.style.left = imgl + "px";
    img.style.top = imgt + "px";
}, 10);

// 标题切换
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = "o(≧口≦)o你给我回来~~";
    } else {
        document.title = "(=￣ω￣=)吾行误述";
    }
}, false);

// 播放背景 MIDI
MIDIjs.play("https://wuxingwushu.github.io/Natural/1.mid");