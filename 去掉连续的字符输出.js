function string(a) {
    var arr1=a.split("")
    for(var i=0;i<arr1.length;i++){
        for(var j=i+1;j<arr1.length;j++){
            if(arr1[i]===arr1[j]){
                arr1.splice(j,1);
                j--;
            }
        }
    }
    arr2=arr1.toString();
    return arr2;
}
console.log(string("aaabbbbbcccddeefgghhhhh"));