// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLastWord = function (s) {
//   let result = s.split(" ");
//   let i = result.length - 1;
//   for (let i = result.length - 1; i >= 0; i--) {
//     if (result[i] != "") {
//       return result[i].length;
//     }
//   }

//   return result;
// };

// console.log(lengthOfLastWord("Hello World     test              "));

// ============================= best ===========================//
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let n = s.length - 1;
  while (n >= 0) {
    if (s[n] === " ") {
      n--;
    } else {
      break;
    }
  }
  let count = 0;
  while (n >= 0) {
    if (s[n] !== " ") {
      n--;
      count++;
    } else {
      break;
    }
  }
  return count;
};
