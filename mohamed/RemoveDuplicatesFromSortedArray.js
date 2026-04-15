// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var removeDuplicates = function (nums) {
//   let k = 1;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] != nums[i - 1]) {
//       nums[k] = nums[i];
//       ++k;
//     }
//   }
//   return k;
// };

// console.log(removeDuplicates([1, 1, 2]));
// ====================== best ==========================//
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var curIdx = 0;
  for (i = 1; i < nums.length; i++) {
    if (nums[curIdx] < nums[i]) {
      nums[++curIdx] = nums[i];
    }
  }
  return ++curIdx;
};
