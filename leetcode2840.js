/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    nums.sort((a,b) => a-b)
    let left =0;
    let right = nums.length-1;
    let count = 0;
    while(left<= right){
        if(nums[left] + nums[right] < target){
            count += (right - left);
            left++;
        } else {
            right --;
        }
    }
    return count;

    // let count = 0;

    // for(let i=0; i<nums.length; i++){
    //     for(let j=i+1; j<nums.length; j++){
    //         if(nums[i]+nums[j] < target){
    //             count++;
    //         }
    //     }
    // }
    // return count;
    
};