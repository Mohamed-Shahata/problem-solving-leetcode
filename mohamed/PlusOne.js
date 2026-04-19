// /**
//  * @param {number[]} digits
//  * @return {number[]}
//  */
// var plusOne = function (digits) {
//   let index = 0;
//   if (digits[digits.length - 1] < 9) {
//     digits[digits.length - 1] += 1;
//     return digits;
//   }

//   for (let i = digits.length - 1; i >= 0; i--) {
//     if (digits[i] == 9) {
//       digits[i] = 0;
//       index = i;
//     } else {
//       digits[i] += 1;
//       break;
//     }
//   }

//   if (index == 0) {
//     digits[0] = 1;
//     digits.push(0);
//   }

//   return digits;
// };

// console.log(plusOne([9, 8, 9]));

// ============================== best =======================//
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;

    if (digits[i] < 10) {
      return digits;
    }

    digits[i] = 0;
  }

  digits.unshift(1);
  return digits;
};
