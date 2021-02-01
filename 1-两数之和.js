function towSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === target - nums[j]) {
                return [i, j]
            }
        }
    }
}
console.log(towSum([1,2,3],5))
