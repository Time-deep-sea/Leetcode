// var arr = [1,1,2,3,4,5,6,6,7,7,8,9,9]
// 输出[1,2,3,4,5,6,7,8,9]

//方法一：for循环去重
function unique(arr) {
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                arr.splice(j,1);
                j--;
            }
        }
    }
    return arr;
}
console.log(unique([1,1,2,3,4,5,6,6,7,7,8,9,9]))

//方法二：indexOf()
//indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置
// function unique(arr) {
//     if(!Array.isArray(arr)){
//         return false
//     }
//     let res=[];
//     for(let i=0;i<arr.length;i++){
//         if(res.indexOf(arr[i])===-1){
//             res.push(arr[i]);
//         }
//     }
//     return res;
// }
// console.log(unique([1,1,2,3,4,5,6,6,7,7,8,9,9]))

//方法三：利用sort()
//sort() 方法用于对数组的元素进行排序
// function unique(arr){
//     if(!Array.isArray(arr)){
//          return false
//     }
//     arr=arr.sort()
//     let res=[arr[0]];
//     for(let i=1;i<arr.length;i++){
//         if(arr[i] !== arr[i-1]){
//             res.push(arr[i]);
//         }
//     }
//     return res;
// }
// console.log(unique([1,1,2,3,4,5,6,6,7,7,8,9,9]))

//方法四：利用ES6 Set去重（ES6中最常用）
//Array.from()方法就是将一个类数组对象或者可遍历对象转换成一个真正的数组
//Array.from()方法可以将 Set 结构转为数组
//Set和Map类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在Set中，没有重复的key
// function unique(arr){
//     return Array.from(new Set(arr))
// }
// console.log(unique([1,1,2,3,4,5,6,6,7,7,8,9,9]))

//方法五：利用includes
//includes() 方法用于判断字符串是否包含指定的子字符串。
//如果找到匹配的字符串则返回 true，否则返回 false
// function unique(arr){
//     if(!Array.isArray(arr)){
//         return false;
//     }
//     let res=[];
//     for(let i=0;i<arr.length;i++){  //检查res数组中是否含有arr[i]
//         if(!res.includes(arr[i])){
//             res.push(arr[i]);
//         }
//     }
//     return res;
// }
// console.log(unique([1,1,2,3,4,5,6,6,7,7,8,9,9]))