function Reversal(X){
    var str=X.toString()
    var arr=str.split("")
    if(arr[0]!=='-'){
        if(X <= Math.pow(2,31)-1){
            var num=Number(arr.reverse().join(''))
            return num;
        }else{
            return 0
        }
    }
    if(arr[0]==="-"){
        delete arr[0]; // 删除负号
        if(X < Math.pow(2,31)-1){
            let num =Number(arr.reverse().join(''));
            return ~num+1;
            // ~ 取反运算符,取反的时候会自动减1,所以取反在加上
        }else{
            return 0
        }
    }
}
console.log(Reversal(Math.pow(2,30))*-1)