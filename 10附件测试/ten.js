var btn=document.getElementsByClassName("btn")[0];
var spans=document.getElementsByTagName("span");
var spanArr=Array.prototype.slice.call(spans);
var twoDom=document.getElementsByClassName("two")[0];
var Rtn=document.getElementsByClassName("return")[0];
var ulDom=document.getElementsByTagName("ul")[0];
var sub=0;
var valDom;
btn.onclick=function () {
    sub += 180;
    console.log(111)
    alert(111)
    this.style.transform = "rotate(" + sub + "deg)";
    spanArr.forEach(function (ele,index) {
        ele.className=ele.className=="state1"?"state2":"state1";
    })
};
spanArr.forEach(function (ele,index) {
    ele.onclick=function () {
        twoDom.style.left=0;
        valDom=ele;
    }
});
Rtn.onclick=function () {
  twoDom.style.left="100%";
};
ulDom.onclick=function (e) {
    var targer= e.target;
    if(targer.nodeName!=="LI")return;
    var val=targer.innerText;
    valDom.innerHTML=val;
    Rtn.onclick();
};
/*
ulDom.addEventListener("click",function (e) {
   var targer= e.target;
   if(targer.nodeName!=="LI")return;
   var val=targer.innerText;
   valDom.innerHTML=val;
   Rtn.onclick();
});*/
