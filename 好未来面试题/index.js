const towSum=function (nums,target) {
    let l=0,r=nums.length-1;
    while(l<r){
        if(nums[l]+nums[r]===target){
            return [l,r];
        }else if(nums[l]+nums[r]>target){
            r--;
        }else{
            l++;
        }
    }
    return null;
}
console.log(towSum([2,7,11,15],9))