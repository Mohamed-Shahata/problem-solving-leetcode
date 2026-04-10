// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
// var longestCommonPrefix = function (strs) {
//   let result = "";
//   if (strs[0] == "") return "";
//   for (let i = 0; i < strs[0].length; i++) {
//     result += strs[0][i];
//     for (let j = 0; j < strs.length; j++) {
//       if (strs[j][i] == result[i]) continue;
//       else {
//         result = result.slice(0, -1);
//         return result;
//       }
//     }
//   }
//   return result;
// };

// console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"]));

// =========================== best =============================//
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let longestPrefix = "";
  const shortestWord = Math.min(...strs.map((el) => el.length));

  for (let i = 0; i < shortestWord; i++) {
    const chToCheck = strs[0][i];
    const isValid = strs.every((word) => word[i] === chToCheck);

    if (isValid) {
      longestPrefix += chToCheck;
    } else {
      break;
    }
  }

  return longestPrefix;
};
