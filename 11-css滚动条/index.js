function a() {  //简单的排序
    var a=[1,12,4,53,35];
/*    function sortFunc(a,b) {
        return a - b;
    }
    a.sort(sortFunc);*/

     a.sort(function (a,b){
         return a - b
     });
   // a.sort(new Function("a","b","return a-b"))
    console.log(a);
    var str1="abc123def456"
    var str2=str1.replace(/\d+/gi,"*");
    console.log(str2);
}
var a=10;

function b() {
a=100;
    console.log(a);//100
    console.log(this.a);//10
    var a;
    console.log(a);//100
}
function c() {
   b();
   console.log(a);//10
}

