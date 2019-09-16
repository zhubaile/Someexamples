//普通方式回调
/*function but() {
       function aa(a) {
           bb(a)
       }
       function bb(a) {
           alert(a);
       }
       aa(12)
    }*/
  /*  function but() {
        function aa(nub1,nub2,fun) {
            return fun(nub1,nub2)
        }
        alert(aa(5,6,cc));
        function bb(nub1,nub2) {
            return((nub1+nub2)*2-3)
        }
        function cc(nub1,nub2) {
            return((nub1+nub2)*4-3)
        }

    }*/
  function but() {
      console.log("aaa");
      var ccc=confirm("haode");
      console.log(ccc);//根据判断点的确定和取消返回true和false
      if(ccc){
         // location.replace("http://www.baidu.com");
  }

      function aa(nub1,nub2,fun) {
          return fun(nub1,nub2);
      }
          alert(aa(3,4,function (nub1,nub2) {
              return(nub1+nub2)*2;
          }))

  };


function bbbaaa(){
    function fun(x,y){
        debugger;
        return{
            fun: function (m) {
                debugger;
                return fun(m,x);
            }
        };
    }
    debugger;
    var a =fun(0);
    debugger;
    a.fun(1);
    console.log( a.fun(1))
    debugger;
    a.fun(2);
    console.log( a.fun(2))
    debugger;
    a.fun(3);
    console.log( a.fun(3))
    debugger;
    var b = fun(0).fun(1).fun(2).fun(3);
    console.log(b)
    debugger;
};

/*
function but() {
function Person(name,age) {
    this.name=name;
    this.age=age;
}
Person.prototype.name="tom";
var person=new Person("Mike",21);
console.log(person.name);
}*/
