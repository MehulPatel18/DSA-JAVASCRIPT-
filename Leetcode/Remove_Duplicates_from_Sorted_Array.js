var removeDuplicates = function(nums) {
    let [ front, last, n ] = [0, 1, nums.length];
    while (last < n) {
          while(nums[front] == nums[last]) {
            nums[last] = '_';
               last++;
          }
          front++;
          nums[front] = nums[last];
          nums[last] = '_';
          last++;
    }
    return nums;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));