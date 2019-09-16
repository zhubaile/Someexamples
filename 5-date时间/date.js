function show() {
    var today=new Date();
    var h=today.getHours(), f=today.getMinutes(), s=today.getSeconds();
    f=check(f);s=check(s);
    var riqi=today.toLocaleDateString();//日期
    var weekday=new Array(7)
    weekday[0]="星期一"
    weekday[1]="星期二"
    weekday[2]="星期三"
    weekday[3]="星期四"
    weekday[4]="星期五"
    weekday[5]="星期六"
    weekday[6]="星期日"
    document.getElementById("date").innerHTML=riqi+weekday[today.getDay()]+" "+h+":"+f+":"+s;
    t=setTimeout("show()",500); //每0.5秒刷新一次
}
function check(i) {  //如果分钟和秒钟为个位数的时候，在前面加上0；
    if(i<10){
        i="0"+i;
    }
    return i
}