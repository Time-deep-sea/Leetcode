function Intimate(A, B){
    var arr1=A.split('')
    var arr2=B.split('')
    if(arr1.length!=arr2.length){
        return false
    }else{
        for(var i=0;i<arr1.length-1;i++){
            for(var j=i+1;j<arr1.length;j++){
                var item1=arr1[i]
                var item2=arr1[j]
                arr1[j]=item1
                arr1[i]=item2
                if(arr1.join('')===arr2.join('')){
                    return true
                }
                arr1=A.split('')
                arr2=B.split('')
            }
        }
        return false
    }
}
console.log(Intimate("abcdfe","abcdef"))