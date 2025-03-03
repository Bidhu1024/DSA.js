/**
 * @param {number[]} nums
 * @return {boolean}
 */
var CheckIfSortedorRotated = function(nums) {
    if(nums.length === 0) return;
    let breakpoint = 0
    for(let i = 0;i<nums.length;i++){
        if(nums[i] > nums[(i+1) % nums.length]){
            breakpoint++
        }
    }
    if(breakpoint > 1){
        return false
    }
    return true
};