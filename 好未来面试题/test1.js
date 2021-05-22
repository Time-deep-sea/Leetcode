function mergeObj(obj1,obj2) {
    let res = new Object();
    res = clone(obj1,res);
    res = clone(obj2,res);
    return res;
}
function clone(obj,target) {//把obj的属性给到target
    for(let item in obj){
        if(typeof(obj[item]) === "object"){
            // clone(???)//递归
        }else{
            target[item] = obj[obj];
        }
    }
    return target;
}
const obj1 = {a: 1, b: { b1: 21 }};
const obj2 = {a: 2, b: { b2: 22 }};
console.log(mergeObj(obj1,obj2));