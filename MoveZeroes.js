/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(nums.length === 0) return;
    let uniqueIndex = 0;

    for(let i = 0; i<nums.length;i++){
        if(nums[i] !== 0){
            nums[uniqueIndex] = nums[i]
            uniqueIndex++
        }
    }

    for(let j = uniqueIndex;j<nums.length;j++){
        nums[j] = 0;
    }
    return nums
};