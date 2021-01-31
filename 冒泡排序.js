function Bubbling(array) {
    for(var i=0;i<array.length;i++){
        for(var j=i+1;j<array.length;j++){
            if(array[i]>array[j]){
                var a=array[i];
                array[i]=array[j];
                array[j]=a;
            }
        }
    }
    return array;
}
console.log(Bubbling([5,1,3,6,4,9,8,10,7]))