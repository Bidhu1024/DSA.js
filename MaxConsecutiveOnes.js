/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    if (nums.length === 0) return;

    let counter = 0;
    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            counter++;
            if (counter > max) {
                max = counter
            }
        } else {
            counter = 0
        }
    }
    return max
};