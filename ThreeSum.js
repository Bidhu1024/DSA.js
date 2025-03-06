
var threeSum = function(nums) {//error
    let target =0;

    if(nums.length < 3 ) return
let returnArr = []
    for(let i = 0;i<nums.length;i++){
        for(let j = i+1;j<nums.length;j++){
            for(let k = j+1;k<nums.length;k++){
                if(nums[i]+nums[j]+nums[k] === target){
                    returnArr.push([i,j,k])
                }
            }
        }
    }
    return returnArr
};

console.log(threeSum([-1,0,1,2,-1,-4]))