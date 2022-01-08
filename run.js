var bool = 1;

function donghuakai(){
  var elem = document.getElementById("kao");
  var elem1 = document.getElementById("kao1");
  var elem2 = document.getElementById("kao2");

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

function donghuatuen(){
  var elem = document.getElementById("kao");
  var elem1 = document.getElementById("kao1");
  var elem2 = document.getElementById("kao2");

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

function getDirStruct(basePath = __dirname) {
  const files = fs.readdirSync(basePath)
  files.forEach(file => {
    // 处理先不要显示的文件
    if (excludeFile.indexOf(file) !== -1 || excludePrefix.some(pre => file.indexOf(pre) === 0)) return
    const fullPath = path.resolve(basePath, file)
    const fileStats = fs.statSync(fullPath)
    // 如果是文件夹, 则继续遍历其子文件
    alert(fileStats);
    return fileStats.isDirectory(file) ? getDirStruct(fullPath) : absolutePath.push(fullPath)
  })
}

