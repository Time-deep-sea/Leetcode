<<<<<<< HEAD
// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//       for (let j = i + 1; j < nums.length; j++) {
//         if (nums[i] === target - nums[j]) {
//           return [i, j]
//         }
//       }
//     }
//     console.log("Hello");
//   }
var twoSum = function(nums, target) {
    const map = new Map();
    for (var i=0;i<nums.length;i++) {
    var otherIndex = map.get(target -nums[i]);
    if (otherIndex !== undefined)
    return [otherIndex, i];
    map.set(nums[i], i);
    }
    }
=======
function towSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === target - nums[j]) {
                return [i, j]
            }
        }
    }
}
console.log(towSum([1,2,3],3))
>>>>>>> Leetcode
