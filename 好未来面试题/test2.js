const twoSum = function(nums, target) {
    for(let i = 0 ; i < nums.length ; i++){
        for(let j = i+1 ; j <nums.length ; j++){
            if(nums[i]+nums[j]===target){
                return [i,j];
            }
        }
    }
    return null;
};
console.log(twoSum([2,2,11,15],4))