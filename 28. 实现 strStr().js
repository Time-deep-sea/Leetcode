var strStr = function(haystack, needle) {
    //方法一
    if (needle.length == 0) {
        return 0;
    }
    for (let i=0; i<haystack.length;i++) {
        //slice()方法可从已有的数组中返回选定的元素
        let str = haystack.slice(i,i+needle.length);
        if (str === needle) {
            return i;
        }
    }
    return -1;
    //方法二
    //indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
    // return haystack.indexOf(needle);
};
console.log(strStr("hello","ll"))