/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function (x) {
//   let copyX = x;
//   let i = 10;
//   let result = "";
//   while (copyX >= 1) {
//     result += Math.floor(copyX % i);
//     copyX = copyX / 10;
//     i * 10;
//   }
//   if (x == Number(result)) return true;
//   return false;
// };

// ========================== best ===========================//
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let n = x;
  let sum = 0;
  if (n < 0) {
    return false;
  }
  while (n > 0) {
    let d = n % 10;
    sum = sum * 10 + d;

    n = Math.floor(n / 10);
  }

  if (x == sum) {
    return true;
  } else {
    return false;
  }
};
