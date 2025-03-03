/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0) return;
    let uniqueIndex = 0; // for storing the unique values from the array.
    let arr = []
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[uniqueIndex]) {
         

            uniqueIndex++;
            nums[uniqueIndex] = nums[i]
        }
    }
    return uniqueIndex + 1
};