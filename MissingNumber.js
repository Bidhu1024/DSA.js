
//122 / 122 testcases passed

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    if (nums.length === 0) return;
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i <= nums.length; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }
};