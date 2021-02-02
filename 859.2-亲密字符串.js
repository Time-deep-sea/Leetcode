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