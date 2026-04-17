// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var searchInsert = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[nums.length - 1] < target) return nums.length;
//     if (target < nums[0]) return 0;
//     if (nums[i] == target) return i;
//     if (nums[i + 1 > nums.length - 1 ? i : i + 1] > target) return i + 1;
//   }
// };

// console.log(searchInsert([1, 3, 5, 6], 0));

// ======================== best ========================//
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums.indexOf(target) === -1) {
    for (let i = 0; i <= nums.length; ) {
      if (nums[i] < target) {
        i++;
      } else {
        return i;
      }
    }
  } else {
    return nums.indexOf(target);
  }
};
