function Intimate(A, B){
    const arr1=A.split('')
    const arr2=B.split('')
    const a=[]
    const b=[]
    if(arr1.length!==arr2.length){
        return false
    }else{
        for(let i=0;i<arr1.length;i++){
            if(arr1[i]!==arr2[i]){
                a.push(arr1[i])
                b.push(arr2[i])
            }
        }
        if((a.join('')===b.reverse().join('')) && a.length===2){
            return true
        }else{
            return false
        }
    }
}
console.log(Intimate("abcdef","abcdef"))

// function Intimate(A, B){
//     const arr1=A.split('')
//     const arr2=B.split('')
//     const a=[]
//     const b=[]
//     if(arr1.length!==arr2.length){
//         return false;
//     }else{
//         let isTrue=true;
//         if(arr1.length>0){
//             for(let j=0;j<arr1.length;j++){
//                 if(arr1.indexOf(arr1[j]) != 0){
//                     isTrue=false;
//                     break;
//                 }
//             }
//         }
//         if(isTrue && (arr1.join('')===arr2.join(''))){
//             return true
//         }else{
//             for(let i=0;i<arr1.length;i++){
//                 if(arr1[i]!==arr2[i]){
//                     a.push(arr1[i])
//                     b.push(arr2[i])
//                 }
//             }
//             if((a.join('')===b.reverse().join('')) && a.length===2){
//                 return true
//             }else{
//                 return false
//             }
//         }
//
//     }
// }
// console.log(Intimate("",""))