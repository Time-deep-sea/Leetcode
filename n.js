function AC(s) {
    var arrayObj = new Array();
    for(var i in s){
        arrayObj.push(s[i]);
    }
    console.info(arrayObj);
}

console.log(AC("123"))