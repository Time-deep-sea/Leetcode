function addTwoNumbers(l1,l2) {
    if(l1[0] == 0 && l2[0] == 0 && l1.length == 1 && l2.length == 1){
        return 0;
    }
    // if((l1[0]==0 && l1.length == 1 && l2.length > 1 && l2[0] != 0) ||(l2[0]==0 && l2.length == 1 && l1.length > 1 && l1[0] != 0)){
    //     return false;
    // }
    if(l1[0]==0 && l2[0]==0 && l1.length > 1 && l2.length > 1){
        return false;
    }else{
        // if(l1.length > 1 && l2.length > 1 && )
        let num1=0;
        let num2=0;
        // const arr=[];
        for(let i=0;i<l1.length;i++){
            num1=num1+l1[i]*Math.pow(10,i);
        }
        for (let j=0;j<l2.length;j++){
            num2=num2+l2[j]*Math.pow(10,j);
        }
        let sum = num1+num2;
        let arr = sum.toString().split('')
        for(let k=0;k<arr.length;k++){
            arr[k]=arr[k]*1
        }
        return arr.reverse()
    }
}

console.log(addTwoNumbers([4,4,3],[5,6,4]))