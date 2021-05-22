function deepObjectMerge(FirstOBJ, SecondOBJ) { // 深度合并对象
    for (let key in SecondOBJ) {
        FirstOBJ[key] = FirstOBJ[key] && FirstOBJ[key].toString() === "[object Object]" ?
            deepObjectMerge(FirstOBJ[key], SecondOBJ[key]) : FirstOBJ[key] = SecondOBJ[key];
    }
    return FirstOBJ;
}

const obj1 = {a: 1, b: { b1: 21 }};
const obj2 = {a: 2, b: { b2: 22 }};
console.log(deepObjectMerge(obj1,obj2));