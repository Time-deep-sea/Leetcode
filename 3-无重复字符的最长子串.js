// function str(a){
//     var sum=a.split("");
//     var max;
//     if(sum.length==0){
//         return 0;
//     }
//     if(sum.length==1){
//         return max;
//     }
//     if(sum.length!=1){
//         for(var i=0;i<sum.length;i++){
//             for(var j=i+1;j<sum.length;j++){
//                 if(sum[i] !== sum[j]){
//                     max=max+1;
//                 }
//                 return max;
//             }
//         }
//     }
//
// }
// console.log(str("abcdce"))
var lengthOfLongestSubstring = function(s) {
    let sum = '';
    let max=0;
    for(let i=0;i<s.length;i++){
        let now = s.charAt(i);
        if(sum.indexOf(s.charAt(i)) > -1){
            sum = sum.substring(sum.indexOf(s.charAt(i))+1)+s.charAt(i);
        }else {
            sum += now;
            max < sum.length ? max = sum.length : max;
        }
    }
    return max
}
console.log(lengthOfLongestSubstring("abcdce"))