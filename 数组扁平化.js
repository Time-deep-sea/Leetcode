//方法一:for循环
// function flatten(arr1) {
//     let arr2=[];
//     for(let i=0;i<arr1.length;i++){
//         if(Array.isArray(arr1[i])){
//             arr2 = arr2.concat(flatten(arr1[i]));
//             //或（上下两行代码均可）
//             //    arr2.push(...flatten(arr1[i]));
//         }else{
//             arr2.push(arr1[i]);
//         }
//     }
//     return arr2;
// }
// console.log(flatten([1,[2,[3,4]]]))

//方法二：es6新出，暂不支持
// function flatten(arr) {
//     let arr1 = arr.flat(Infinity);
//     console.log(arr1);
//     return arr1;
// }
// console.log(flatten([1,[2,[3,4]]]))

//方法三：while循环/扩展运算符
//=>箭头函数，x => x * x 相当于 function(x){return x*x}，
// function flatten(arr) {
//     while(arr.some(item=>Array.isArray(item))){
//         arr = [].concat(...arr);
//     }
//     return arr;
// }
// console.log(flatten([1,[2,[3,4]]]))

//方法四：reduce方法
// function flatten(arr) {
//     return arr.reduce((result,item) => {
//         return result.concat(Array.isArray(item) ? flatten(item) : item);
//     },[])
// }
// console.log(flatten([1,[2,[3,4]]]))

//方法五：toString & split
//调用数组的toString方法，将数组变为字符串然后再用split分割还原为数组;
//因为split分割后形成的数组的每一项值为字符串，所以需要用一个map方法遍历数组将其每一项转换为数值型
// function flatten(arr) {
//     // let res=arr.toString().split(',');  //或用join()
//     // for(let i=0;i<res.length;i++){
//     //     res[i] = res[i]*1;
//     // }
//     // return res;
//     //或
//     return arr.toString().split(',').map(function (item) {
//         return Number(item)
//     })
// }
// console.log(flatten([1,[2,[3,4]]]))

//方法七：利用apply(仅用于二维数组转一维数组)
function flatten(arr){
    let res=[]
    res=Array.prototype.concat.apply([],arr);
    return res;
}
console.log(flatten([1,2,[3,4]]))