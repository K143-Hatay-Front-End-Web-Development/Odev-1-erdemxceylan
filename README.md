## Ödev 1

- Ödev-1: cssbattle.dev'de **'Battle #13 - #70 Froggy'** kodunun yazılması [Bu Linkten Ulaşabilirsiniz](https://cssbattle.dev/play/70)

### Result

![frog](/assets/frog.jpg)

- Ödev-2: Projecteuler.net'teki #4 numaralı soru çözülecek [Bu Linkten Ulaşabilirsiniz](https://projecteuler.net/problem=4)

Algorithm solves for the general case:

Input: n

Output: the greatest palindrome which is obtained by the product of two n-digits numbers.

Our algorithm is brute-force with 3 improvements:

1. It takes advantage of the fact that palindromes are divisible by 11

   It doesn’t check the product of 2 n-digits numbers if none of them is divisible by 11. It moves to the next iteration

2. It takes advantage of the commutative property of multiplication

   For example when n = 3, once it checks 999 _ 998, it doesn’t check 998 _ 999.

   That reduces the number of loops from 900 _ 900 = 810,000 times to 900 + (900 _ 899) / 2 = 405,450

3. Once it found a palindrome, it only checks the multiplication of the numbers between the 2 factors of that palindrome

   For example when n = 3, once it found that the multiplication of 995 and 583 is a palindrome, it starts the next iteration by checking 994 \* 584

   That reduces the number of loops significantly.

### Result

| n   | Multipliers           | The greatest palindrome | Maximum iteration |
| --- | --------------------- | ----------------------- | ----------------- |
| 2   | 99 ⋅ 91               | 9,009                   | 37                |
| 3   | 993 ⋅ 913             | 906,609                 | 7,659             |
| 4   | 9,999 ⋅ 9,901         | 99,000,099              | 4,852             |
| 5   | 99,979 ⋅ 99,681       | 9,966,006,699           | 1,005,570         |
| 6   | 999,999 ⋅ 999,001     | 999,000,000,999         | 498,502           |
| 7   | 9,998,017 ⋅ 9,997,647 | 99,956,644,665,999      | 207,357,000       |
| …   | …                     | …                       | …                 |
