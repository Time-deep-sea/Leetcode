function deepClone(obj) {
    // if(typeof obj!=="object"){
    //     return obj
    // }
    // if(obj instanceof Function){
    //     return obj
    // }
    // if(obj instanceof RegExp){
    //     return obj
    // }
    // if(obj instanceof Date){
    //     return obj
    // }
    let result = obj instanceof Array ? [] : {};
    if (obj && typeof obj === 'object') {
        for (let key in obj) {
            if (obj[key] && typeof obj[key] === 'object') {
                result[key] = deepClone(obj[key]);
            } else {
                result[key] = obj[key];
            }

        }
        return result;
    }
    return obj;
}
let aaa = {c:1,b:{d:1}};//[1,2,3]
let bbb = deepClone(aaa)
// let bbb = JSON.parse(JSON.stringify(aaa))