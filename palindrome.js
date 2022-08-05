const n = 3;                                          // number of digits
let lowerBound = 10 ** (n - 1);                       // the smallest number with n-digits
const upperBound = 10 * lowerBound - 1;               // the greatest number with n-digits
let first, second, maxPalindrome = 0, iteration = 1;  // first and second multipliers of the maximum palindrome
const isPalindrome = number => String(number).split('').reverse().join('') == number;  // checks whether a number is palindrome or not

for (let i = upperBound; i >= lowerBound; i--) {
   // i -> represents the n-digits numbers starting from the greatest
   for (let j = i; j >= lowerBound; j--) {
      // j -> represents the n-digits numbers starting from i (once i * j is checked, there is no need to check j * i)
      // for example, once we check 999 * 998, there is no need to check 998 * 999
      // as a result, program loops 900 + (900 * 899) / 2 = 405,450 times instead of 900 * 900 = 810,000 times

      // palindromes are divisible by 11
      // So, if both multipliers are not divisible by 11, then their product cannot be a palindrome
      // According to that, we create a new variable called 'number' and assign -1 or multiplication of i and j
      let number = i % 11 !== 0 && j % 11 !== 0 ? -1 : i * j;
      // if -1 is assigned, below if-check will fail and we move on to the next iteration
      // otherwise, the variable number is a palindrome candidate

      // if number is greater than the current maximum palindrome, check whether it is palindrome or not
      if (maxPalindrome < number && isPalindrome(number)) {
         // if number is greater than the current maximum palindrome and is also a palindrome itself, then if-check will be satisfied
         maxPalindrome = number; // update the maximum palindrome
         first = i;              // store the first multiplier
         second = j;             // store the second multiplier
         lowerBound = j + 1;     // once a polindrome is found we only need to check numbers between the first and the second product → loops 7660 times
         // for example, once we found 995 * 583 only the multiplication of the numbers between 995 and 583 can result a greater product
         // so, we update the lowerbound as 584, and the next iteration checks 994 * 584
      }
      iteration++;   // increase the iteration
   }
}
// output the result
console.log(`\nThe greatest palindrome product: ${first} ⋅ ${second} = ${maxPalindrome} | maximum iteration: ${iteration - 1}\n`);