/* Find the numbers only between 10 and 50 */

let min = 10
let max = 50

console.log(Math.random()); /* Returns a pseudorandom number between 0 and 1. */
console.log(Math.random() * 10); /* Returns a pseudorandom number between 0 and approx 10 => (9.something). */
console.log(Math.floor(Math.random() * 10)); /* Returns a pseudorandom number between 0 and 9. */
console.log((Math.floor(Math.random() * 10)) + min); /* Returns a pseudorandom number between 10 - 19(But never 20). */

console.log(max - min + 1); // 41
console.log(Math.random() * (max - min + 1)); // approx (0-9) * 41
console.log(Math.floor(Math.random() * (max - min + 1))); // (0-9) * 41
console.log((Math.floor(Math.random() * (max - min + 1)) + min) ); // [(0-9) * 41] to 50 


let numBtwn = (Math.floor(Math.random() * (max - min + 1)) + min)
console.log(`${numBtwn}, this number is between ${min} and ${max}`)





