function string(a) {
    let arr1=a.split("")
    for(let i=0;i<arr1.length;i++){
        for(let j=i+1;j<arr1.length;j++){
            if(arr1[i]===arr1[j]){
                arr1.splice(j,1);
                j--;
            }
        }
    }
    let arr2=arr1.toString();
    return arr2;
}
console.log(string("aaabbbbbcccddeefgghhhhh"));