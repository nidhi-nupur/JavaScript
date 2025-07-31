/*********** Basic Comparisions *************************************************/
// console.log(2 > 4);
// console.log(2 < 4);
// console.log(2 <= 4);
// console.log(2 >= 4);
// console.log(2 != 4);
// console.log(2 == 4);


/* Automatic Conversion of string to number in JS */
// console.log("2" > 1); // true
// console.log(2 < "02"); // false



/*  Relational comparisons (<, >, <=, >=) → convert null to 0   */
/* Equality check (==) → treats null as only equal to undefined */
console.log(null > 0) // false
console.log(null < 0) // false
console.log(null == 0) // false
console.log(null != 0) // true
console.log(null >= 0) // true
console.log(null <= 0) // true



/* 
- undefined means a variable has been declared but not assigned a value.
- When compared with numbers, JavaScript attempts to convert values — but undefined behaves differently from null.
 */
console.log(undefined > 0) // false
console.log(undefined < 0) // false
console.log(undefined == 0) // false
/************************************************************/




/************* Strict Check => (===) ***********************************************/
// === checks both value and type, so there's no coercion.
console.log("2" === 2) // false ( datatypes are String != Number )
/************************************************************/

