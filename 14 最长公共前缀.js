let longestCommonPrefix = function(strs) {
//    如果字符串长度为0，直接返回空
    if (strs.length == 0) {
        return '';
    }
    let common = strs[0];
    //    遍历strs
    for (let i = 0; i < strs.length; i++) {
    //    判断相等
        let j = 0;
        for(; j<common.length && j<strs[i].length; j++) {
            //charAt()方法用于返回指定索引处的字符
            if (common.charAt(j) != strs[i].charAt(j)) break;
        }
        //slice()方法可从已有的数组中返回选定的元素
        //substr()方法可在字符串中抽取从start下标开始的指定数目的字符
        common = common.slice(0,j);
        if(common === '') {
            return common;
        }
    }
    return common;
};
console.log(longestCommonPrefix(["flower","flow","flight"]))