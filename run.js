var bool = 1;
var fubool = 0;
var ulid = "";
var lieshu = 0;
var baidu0 = "https://www.baidu.com/s?wd=";
var baidu1 = "&rsv_spt=1&rsv_iqid=0xff48a07f00019107&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_dl=tb&rsv_sug3=5&rsv_sug2=0&rsv_btype=i&inputT=1139&rsv_sug4=2271";
var TXTGithub = "https://wuxingwushu.github.io/";
var TXTGitee = "https://gitee.com/daosheng0/daosheng/raw/master/";

// 音乐播放器（UI 与原有保持一致，逻辑改为 Tone.js 合成 .mid）
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

// 音乐播放器（midi 合成版）
var shijian_T = 0;     // 暂停时记录播放位置（秒）
var geid = 0;          // 当前播放曲目索引
var gemulu = [];       // midi 曲目路径列表
var synth = null;      // Tone.PolySynth 实例
var midiData = null;   // 当前解析后的 midi 数据
// Tone.now() 时刻 + 当前 midi 内部时间偏移（用来计算播放进度）
var midiPlayStartAt = 0;   // Tone.now 时刻
var midiPlayOffset = 0;    // 当前已播放到 midi 的时间点（秒）
var midiIsPlaying = false; // 是否处于播放状态

// midi 文件名后缀
var MIDI_EXT = ".mid";

// 把音乐.txt 里的每行去掉后缀，拼成 midi 路径
function duqutxtgemulu() {
    var file_url = TXTGithub + "Music/midi/音乐.txt";
    var xhr = new XMLHttpRequest();
    xhr.open("get", file_url, true);
    xhr.responseType = "blob";
    xhr.onload = function () {
        if (this.status == 200) {
            const reader = new FileReader();
            reader.onload = function () {
                for (var index = 0; index < reader.result.split("\n").length - 1; index++) {
                    var name = reader.result.split("\n")[index].replace(/\.(mp3|m4a)$/i, "");
                    gemulu.push("https://cdn.jsdelivr.net/gh/wuxingwushu/wuxingwushu.github.io/Music/midi/" + encodeURIComponent(name) + MIDI_EXT);
                }
            };
            reader.readAsText(this.response);
        }
    };
    xhr.send();
}

// 初始化合成器（首次播放时调用）
function initSynth() {
    if (!synth) {
        synth = new Tone.PolySynth(Tone.Synth, {
            oscillator: { type: "triangle" },
            envelope: { attack: 0.02, decay: 0.1, sustain: 0.3, release: 1 }
        }).toDestination();
        synth.volume.value = -10;
    }
}

// 解析并准备 midi（不立即播放）
async function loadMidi(url) {
    var resp = await fetch(url);
    var buf = await resp.arrayBuffer();
    midiData = new Midi(buf);
}

// 安排 midi 音符的播放事件
function scheduleMidi(fromTime) {
    if (!midiData || !synth) return 0;
    // 第一条 track 用于合成播放（与原 mp3 单轨对应）
    var track = midiData.tracks[0];
    if (!track) return 0;

    var endTime = fromTime;
    for (var i = 0; i < track.notes.length; i++) {
        var note = track.notes[i];
        if (note.time + note.duration <= fromTime) continue; // 跳过已播部分
        var playAt = midiPlayStartAt + (note.time - fromTime);
        synth.triggerAttackRelease(
            note.name,
            note.duration,
            playAt,
            note.velocity
        );
        if (note.time + note.duration > endTime) {
            endTime = note.time + note.duration;
        }
    }
    return endTime;
}

var midiEndTime = 0;  // 当前 midi 整体时长（秒）

async function bofang() {
    // 切换按钮
    document.getElementById("bofang").style.display = "none";
    document.getElementById("zhanting").style.display = "block";

    // 浏览器自动播放策略：需要用户交互后才能启动音频
    await Tone.start();
    initSynth();

    // 加载并合成当前曲目
    if (!gemulu[geid]) return;
    await loadMidi(gemulu[geid]);

    midiPlayStartAt = Tone.now();
    midiPlayOffset = shijian_T;
    midiIsPlaying = true;

    midiEndTime = scheduleMidi(shijian_T);

    // 进度条定时器
    timer = setInterval(function () {
        if (midiIsPlaying) {
            var now = midiPlayOffset + (Tone.now() - midiPlayStartAt);
            if (now >= midiEndTime) {
                // 当前曲目结束
                shijian_T = 0;
                geid++;
                if (geid == gemulu.length) geid = 0;
                // 切歌
                Tone.Draw.cancel();
                midiIsPlaying = false;
                clearInterval(timer);
                bofang();
                return;
            }
            var ratio = now / midiEndTime;
            currentProgress.css({ 'width': ratio * 100 + '%' });
        }
    }, 100);
}

function zhanting() {
    // 切换按钮
    document.getElementById("zhanting").style.display = "none";
    document.getElementById("bofang").style.display = "block";

    // 记录当前播放位置并停止合成
    if (midiIsPlaying) {
        shijian_T = midiPlayOffset + (Tone.now() - midiPlayStartAt);
    }
    midiIsPlaying = false;

    if (Tone.Transport.state === "started") {
        Tone.Transport.pause();
    }
    if (synth) {
        synth.releaseAll();
    }
    clearInterval(timer);
}

function shangyishou() {
    geid--;
    if (geid == -1) geid = gemulu.length - 1;
    shijian_T = 0;
    midiIsPlaying = false;
    if (synth) synth.releaseAll();
    clearInterval(timer);
    bofang();
}

function xiayishou() {
    geid++;
    if (geid == gemulu.length) geid = 0;
    shijian_T = 0;
    midiIsPlaying = false;
    if (synth) synth.releaseAll();
    clearInterval(timer);
    bofang();
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
    if (!midiData || midiEndTime == 0) return;
    var ratio = getRatio(ev);
    currentProgress.css({ 'width': ratio * 100 + '%' });
    // 重新计算位置并从该点继续播放
    var wasPlaying = midiIsPlaying;
    shijian_T = ratio * midiEndTime;
    if (synth) synth.releaseAll();
    midiIsPlaying = false;
    if (wasPlaying) bofang();
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