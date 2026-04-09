// /**
//  * @param {string} s
//  * @return {number}
//  */
// /*
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// */
// var romanToInt = function (s) {
//   const objRoman = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//     IV: 4,
//     IX: 9,
//     XL: 40,
//     XC: 90,
//     CD: 400,
//     CM: 900,
//   };
//   let result = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] == "I" && s[i + 1] == "V") {
//       result += objRoman["IV"];
//       i++;
//     } else if (s[i] == "I" && s[i + 1] == "X") {
//       result += objRoman["IX"];
//       i++;
//     } else if (s[i] == "X" && s[i + 1] == "L") {
//       result += objRoman["XL"];
//       i++;
//     } else if (s[i] == "X" && s[i + 1] == "C") {
//       result += objRoman["XC"];
//       i++;
//     } else if (s[i] == "C" && s[i + 1] == "D") {
//       result += objRoman["CD"];
//       i++;
//     } else if (s[i] == "C" && s[i + 1] == "M") {
//       result += objRoman["CM"];
//       i++;
//     } else {
//       result += objRoman[s[i]];
//     }
//   }
//   return result;
// };

// console.log(romanToInt("MCMXCIV"));

// ============================= best ======================//
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const mp = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const n = s.length;
  let num = 0;
  for (let i = 0; i < n; i++) {
    if (!mp[s[i]]) continue;
    if (mp[s[i]] < mp[s[i + 1]]) num -= mp[s[i]];
    else num += mp[s[i]];
  }
  return num;
};
