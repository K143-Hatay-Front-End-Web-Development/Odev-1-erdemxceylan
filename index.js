const n = 3;
let lowerBound = 10 ** (n - 1);
const upperBound = 10 * lowerBound - 1;
let first, second, maxPalindrome = 0, found = 0, iteration = 1;
const isPalindrome = number => String(number).split('').reverse().join('') == number;
console.log('\nPalindromes found:');

for (let i = upperBound; i >= lowerBound; i--) {
   for (let j = i; j >= lowerBound; j--) {
      let number = i * j;
      if ((i % 11 === 0 || j % 11 === 0) && maxPalindrome < number && isPalindrome(number)) {
         found++;
         maxPalindrome = number;
         first = i;
         second = j;
         console.log(`${found}) ${first} ⋅ ${second} = ${maxPalindrome} | iteration: ${iteration}`);
         lowerBound = j + 1;
      }
      iteration++;
   }
}

console.log(`\nLargest palindrome product: ${first} ⋅ ${second} = ${maxPalindrome} | maximum iteration: ${iteration - 1}\n`);