let name = "Nidhi"
let repoCount = 31

console.log(`My name is ${name} and my repository count is ${repoCount}`);


/* Another way to declare the string */
let str = new String('Sakshi_Sanya_Bestie')
console.log(str) // [String: 'Sakshi Sanya']
console.log(str[3]) // s
console.log(str.__proto__) // {}
console.log(str.length) // 12
console.log(str.toLowerCase) // [Function: toLowerCase]
console.log(str.toLowerCase()) // sakshi sanya
console.log(str.charAt(4)) // h
console.log(str.indexOf('t')) // -1
console.log(str.indexOf('S')) // 0
console.log(str.indexOf('s')) // 3

let newStr = str.substring(0, 5)
console.log(newStr);

let anotherStr = str.slice(-12, 1)
console.log(anotherStr);

let str2 = "     Nidhi     ";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; // multiple semicolon won't show error.
console.log(str2) //      Nidhi
console.log(str2.trim()) // Nidhi

let url = "https://nidhinupur.com/nidhi%20nupur"
console.log(url.replace('%20', '_')) // https://nidhinupur.com/nidhi_nupur
console.log(url.includes('nidhi')) // true
console.log(url.includes('sakshi')) // false


/* string.split(separator, limit); */
/* separator → the character (or pattern) to split the string on (like " ", ",", "-", etc.) */
/* limit (optional) → number of splits to do */
console.log(str.split('_')); // [ 'Sakshi', 'Sanya', 'Bestie' ] // Splits the string at each '_' character


