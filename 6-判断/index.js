function test() {
    //网速为0-100，其中0-10为1等网速，10-20为2等。。。。。
    var s=43;  //得到的网速数值
    var z=Math.ceil(s/10); //数值除以10向上取整
    console.log(z);


   // 网速为0-1000，其中100-200为1等网速，200-400为2等。。。。。
    var q=201;
    var w=Math.ceil(q/100/2);
    document.getElementById("test").innerHTML=w;
    alert("eee");
}


//数组排列大小
function one(){
    var sum=[10,5,20,24,6,3,8,58,65];
    var sub=0;
    for(var i=0;i<sum.length-1;i++){
        for(var j=i+1;j<sum.length;j++){
            if(sum[i]>sum[j]){
                sub=sum[i];   //大的值给sub
                sum[i]=sum[j];//小的值给了大的值
                sum[j]=sub;//大的值赋值给之前小的值
            }
        }
    }
    alert(sum);
}

//自增
function two(){
    var arr=[25,12,32,42,68,9];
    for(var i=0;i<arr.length;i++){
        arr[i]+=5
    }
    alert(arr);
}

//替换
function three(){
    var arr="zbmzbmzbmzbm";
    var n=arr.replace(/m/g,"l");  //("m","l")只能换一个；(/m/g,"l")全部换；（/m/gi,"l"）不区分大小写；
    alert(n);
}
function MyClick(){
    //从0开始自增到6停止
   /* var i=0;
    var timer=setInterval(function(){
        i++;
        if(i==6){
            clearInterval(timer);
        }
        document.getElementById("dh").innerText=i;
    },1000);*/

   //判断一个数组里面重复最多的字母和个数
/*    String.prototype.count=function(){                     //�ҳ��ַ������ظ�������ĸ���ظ��Ĵ���
        var obj={}
            ,MaxName        //�����ַ�
            ,num=0;          //����ַ�������
        for(var i=0;i<this.length;i++){
            if(!obj[this.charAt(i)]){
                obj[this.charAt(i)]=1;
            }else{
                obj[this.charAt(i)]++;
                //console.log(obj);
            }
        }
        for(i in obj){
            console.log(num);
            if(obj[i]>num){
                console.log(num);
                num=obj[i];
                MaxName=i;
            }
        }
        var zbl={
            MaxName:MaxName,
            num:num
        }
        return zbl               //������˼һ��
        /!*      return{
          MaxName:MaxName,
          num:num
          }*!/
    }
    var str="asdfghasgsggsgshhfaajsajsdhajsfhasfhjkskhhdhdhdhdhdhdhdhhdhdhsa";
    var max=str.count();
    alert(max.MaxName+max.num);*/

}