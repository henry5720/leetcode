/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for (let i=0; i < nums.length; i++) {
        console.log("圈數:", i);
        for (let j=i+1; j < nums.length; j++) {
            console.log("i:", i);
            console.log("j:", j);
            let result = nums[i] + nums[j];
            if (result==target) {
                console.log("result:", result);
                return result;
            }
        }
    }
};

// nums = [2,7,11,15], target = 9
// twoSum([2,7,11,15], 9);

// nums = [3,2,4], target = 6
//twoSum([3,2,4], 6);

// nums = [3,3], target = 6
twoSum([3,3], 7);
