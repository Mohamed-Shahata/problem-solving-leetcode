// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function (s) {
//   let arr = [];
//   if (s[0] == ")" || s[0] == "}" || s[0] == "]") return false;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] == "(" || s[i] == "[" || s[i] == "{") arr.push(s[i]);
//     else {
//       if (s[i] == "}" || s[i] == "]" || s[i] == ")") {
//         if (
//           (arr[arr.length - 1] == "(" && s[i] == ")") ||
//           (arr[arr.length - 1] == "[" && s[i] == "]") ||
//           (arr[arr.length - 1] == "{" && s[i] == "}")
//         ) {
//           arr.pop();
//         } else return false;
//       }
//     }
//   }
//   if (arr.length == 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isValid("(])"));

// ============================= best =============================//
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const stack = [];

  const pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (pairs[char]) {
      const top = stack.pop();

      if (top !== pairs[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
};
