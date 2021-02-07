// 方法一：冒泡排序
// function pank(arr) {
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             let num;
//             if(arr[i]>arr[j]){
//               num=arr[i];
//               arr[i]=arr[j];
//               arr[j]=num;
//             }
//         }
//     }
//     return arr;
// }
// console.log(pank([5,9,4,3,7,8,6,12,13]))

//方法二：sort()
function pank(arr){
    arr.sort(function (a,b) {
        return a-b;  //b-a降序；a-b升序
    })
    return arr;
}
console.log(pank([5,9,4,3,7,8,6,12,13]))