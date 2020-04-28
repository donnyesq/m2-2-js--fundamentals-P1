// Q5
// Write a JavaScript program to find ALL the Armstrong
// numbers between 0 and 999, store them in array an output
// that array to the console.

// Note : An Armstrong number of three digits is an integer
// such that the sum of the cubes of its digits is equal
// to the number itself. For example,
// 371 is an Armstrong number:
// 3 ** 3 + 7 ** 3 + 1 ** 3
// = 27   + 343    + 1
// = 371

let armstrongNumbers = [];

for (i = 0; i < 1000; i++) {
  let sum = 0;
  let digitsArr = i.toString().split("");

  for (j = 0; j < digitsArr.length; j++) {
    let digit = Number(digitsArr[j]);

    sum += digit ** digitsArr.length;
  }
  if (sum === i) {
    armstrongNumbers.push(i);
  }
}

console.log(armstrongNumbers);
