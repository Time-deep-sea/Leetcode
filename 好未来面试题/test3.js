function mostTimes(str){
    let arr = str.toLowerCase().split("");
    // console.log(arr);
    let map = new Map();
    for(let index in arr){
        if(map.has(arr[index])){
            map.set(arr[index],map.get(arr[index])+1)
        }else{
            map.set(arr[index],1)
        }
    }
    // console.log(map)
    let max = 0;
    for(let key of map){
        // console.log(key);
        if(isLetter(key[0])){
            if(key[1]>max){
                max = key[1]
            }
        }
    }
    return max
}
function isLetter(str) {
    let reg = /^[A-Za-z]+$/;
    return reg.test(str);
}
console.log(mostTimes("hello world! n v k m r iiiie o o r e i o e riioerioerriort!"))