var searchInsert = function(nums, target) {
    if(nums.indexOf(target)===-1){
        if(target>nums[nums.length-1]){
            return nums.length
        }else if(target<nums[0]){
            return 0
        }else{
            console.log("run")
            for(let i = 0 ; i < nums.length ; i++){
                if(target<nums[i]){
                    return i
                }
            }
        }
    }else{
        return nums.indexOf(target)
    }
};
console.log(searchInsert([1,3,5],4))