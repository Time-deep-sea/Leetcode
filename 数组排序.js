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
// function pank(arr){
//     arr.sort(function (a,b) {
//         return a-b;  //b-a降序；a-b升序
//     })
//     return arr;
// }
// console.log(pank([5,9,4,3,7,8,6,12,13]))

// 方法三：选择排序
// 原理：将要排序的数组分成两部分，一部分是从大到小已经排好序的，一部分是无序的，
// 从无序的部分取出最小的放到已经排序的最后面。
function select(arr){
    for(let i=0;i<arr.length;i++){
        let m=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[m]){
                m=j;
            }
        }
        if(m!=i){
            let news=arr[i];
            arr[i]=arr[m];
            arr[m]=news;
        }
    }
    return arr;
}
console.log(select([8,1,9,15,7,2,26,89]))