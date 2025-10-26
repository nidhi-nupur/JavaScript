/*************************     Arrays = Arrays in JS are ordered collections that can store ANY TYPES OF DATA, and you can easily add, remove, search, and manipulate their elements using built-in methods.    ***********************************/
// JS Arrays are resizable.
const var2 = ["nidhi", "Nupur"]; // Way1 to declare arrays in JS
const var3 = new Array(3, 5, 1 ,5, 63) // Way2 to declare arrays in JS
const myArr = ['a', 1, 2, 3, 4, 5, true, "Nidhi"] // Mixed-type array (JavaScript allows arrays to hold different data types).
console.log(myArr[0]); // a
console.log(myArr[3]); // 3
console.log(myArr[6]); // true

/*********************************************************************************************************************/





/***************************************    METHODS of Arrays in JS    ************************************************/
// 1. Adding / Removing Elements _______________________________________________________________________________________________
/*
| Method      | Action            | Description                            | Example                                        |
| ----------- | ----------------- | -------------------------------------- | ---------------------------------------------- |
| `push()`    | ➕ Add (end)      | Adds element(s) to the end            | `arr.push(4)`                                  |
| `pop()`     | ➖ Remove (end)   | Removes last element                  | `arr.pop()`                                    |
| `unshift()` | ➕ Add (start)    | Adds element(s) at beginning          | `arr.unshift(0)`                               |
| `shift()`   | ➖ Remove (start) | Removes first element                 | `arr.shift()`                                  |
| `splice()`  | Modify            | Add/remove elements at specific index  | `arr.splice(1,2)` removes 2 items from index 1 |


splice() :- Modifies the original array (removed and added items).
SYNTAX :- array.splice(start, deleteCount, item1, item2, ...)
| Parameter             | Description                   |
| --------------------- | ----------------------------- |
| **start**             | The index where changes begin |
| **deleteCount**       | Number of elements to remove  |
| **item1, item2, ...** | Elements to add (optional)    |
*/

myArr.push("Nupur"); // Add at the end
console.log(myArr); // [ 'a', 1, 2, 3, 4, 5, true, 'Nidhi', 'Nupur' ]

myArr.unshift("Hii"); // Add at the beginning
console.log(myArr); // [ 'Hii', 'a', 1, 2, 3, 4, 5, true, 'Nidhi', 'Nupur']
 
const fruits = ["apple", "banana", "cherry", "mango"];
fruits.splice(1, 2);   // remove 2 items starting from index 1
console.log(fruits);   // ["apple", "mango"]

fruits.splice(1, 0, "banana", "cherry");  // start at index 1, delete 0, add 2 items
console.log(fruits);   // ["apple", "banana", "cherry", "mango"]



// 2. Copying / Slicing Elements _______________________________________________________________________________________________
/*
| Method      | Description                           | Example                           |
| ----------- | ------------------------------------- | --------------------------------- |
| `slice()`   | Returns shallow copy of part of array | `arr.slice(1,3)`                  |
| `concat()`  | Merges arrays                         | `[1,2].concat([3,4]) → [1,2,3,4]` |
| `flat()`    | Flattens nested arrays                | `[1,[2,3]].flat()` → `[1,2,3]`    |
| `flatMap()` | Map + Flat combined                   | `arr.flatMap(x => [x*2])`         |
*/
console.log(myArr.slice(2, 5)); // [ 2, 3, 4 ] // Does not modify the original array.
console.log(myArr.concat(["Dharm", true, 10])); // ['a', 1, 2, 3, 4, 5, true, 'Nidhi', 'Dharm', true, 10]

/*
--------------------------------------------------------------------------------------------------------------
|      slice() - Does not modify the original array. (But modify the operation according to slice method.)   |
|      splice() - Modifies the original array (removed and added items).                                     |
--------------------------------------------------------------------------------------------------------------
*/



// 3. Iteration / Transformation Elements _______________________________________________________________________________________________
/*
| Method          | Description                                | Example                            |
| --------------- | ------------------------------------------ | ---------------------------------- |
| `forEach()`     | Runs function for each element (no return) | `arr.forEach(x => console.log(x))` |
| `map()`         | Returns a new array with results           | `arr.map(x => x * 2)`              |
| `filter()`      | Returns elements matching a condition      | `arr.filter(x => x > 5)`           |
| `reduce()`      | Reduces array to single value              | `arr.reduce((a,b) => a+b)`         |
| `reduceRight()` | Same as reduce, but from right to left     | —                                  |
| `every()`       | Checks if all elements pass a test         | `arr.every(x => x > 0)`            |
| `some()`        | Checks if any element passes a test        | `arr.some(x => x > 10)`            |
*/
 


// 4. Accessing / Finding Elements _______________________________________________________________________________________________
/*
| Method          | Description                                  | Example                      |
| --------------- | -------------------------------------------- | ---------------------------- |
| `indexOf()`     | Returns index of first match                 | `arr.indexOf(3)`             |
| `lastIndexOf()` | Returns index of last match                  | `arr.lastIndexOf(3)`         |
| `includes()`    | Checks if element exists                     | `arr.includes(5)`            |
| `find()`        | Returns first element that matches condition | `arr.find(x => x > 10)`      |
| `findIndex()`   | Returns index of first element that matches  | `arr.findIndex(x => x > 10)` |
| `at()`          | Access element by index (supports negatives) | `arr.at(-1)` (last element)  |
 */
console.log(myArr.indexOf(true)); // 6
console.log(myArr.at(-1)); // Nidhi (last element)



// 5. Sorting & Reversing Elements _______________________________________________________________________________________________
/*
| Method      | Description                        | Example                         |
| ----------- | ---------------------------------- | ------------------------------- |
| `sort()`    | Sorts array (by default lexically) | `[3,10,2].sort()` → `[10,2,3]`  |
| `reverse()` | Reverses array order               | `[1,2,3].reverse()` → `[3,2,1]` |
 */
console.log(myArr.sort());             // [ 1, 2, 3, 4, 5, 'Nidhi', 'a', true ]
console.log(myArr);                    // [ 1, 2, 3, 4, 5, 'Nidhi', 'a', true ]  // Changed Originally 
console.log(myArr.reverse());          // [ true, 'a', 'Nidhi', 5, 4, 3, 2, 1 ] 
console.log(myArr);                    // [ true, 'a', 'Nidhi', 5, 4, 3, 2, 1 ]  // Changed Originally



// 6. Joining / Splitting _______________________________________________________________________________________________
/*
| Method       | Description                   | Example                        |
| ------------ | ----------------------------- | ------------------------------ |
| `join()`     | Combines elements into string | `['a','b'].join('-') → 'a-b'`  |
| `toString()` | Converts array to string      | `[1,2,3].toString() → '1,2,3'` |
 */
const A = [1, 3, 5, 6, 9, 3, 7, 10];
const newA = A.join();
console.log(A); // [1, 3, 5,  6, 9, 3, 7, 10]
console.log(newA); // 1,3,5,6,9,3,7,10

console.log(A.toString); // [Function: toString]
console.log(A.toString()); // 1,3,5,6,9,3,7,10
/************************************************************************************************************************/







/************************************************************************************************************************/
/* push()      VS     concat()     VS      [...array1, ...array2] */

const array1 = ["aaa", "bbb", "ccc"];
const array2 = ["XXX", "YYY", "ZZZ"];

array1.push(array2);
console.log(array1);  // [ 'aaa', 'bbb', 'ccc', [ 'XXX', 'YYY', 'ZZZ' ] ] // push() treats array2 as one element of array1.
console.log(array1[3][2]);  // ZZZ

const newArray1 = array1.concat(array2);
console.log(newArray1); // [ 'aaa', 'bbb', 'ccc', 'XXX', 'YYY', 'ZZZ' ]     // concat() adds the elements of 2nd array to the 1st array.

const allNewArray = [...array1, ...array2]
console.log(allNewArray); // [ 'aaa', 'bbb', 'ccc', 'XXX', 'YYY', 'ZZZ' ]

/************************************************************************************************************************/







/************************************************************************************************************************/
/*
from() :- Array.from() = “Make an Array from something that looks like one.”
*/
console.log(Array.from("Nidhi Nupur")); ['N', 'i', 'd', 'h', 'i', ' ', 'N', 'u', 'p', 'u', 'r']

//  ❌ Example: Plain Object (Error) // Because {a:1, b:2, c:3} is not iterable and doesn’t have a length property.
const obj = { a: 1, b: 2, c: 3 };
const arrOfObject = Array.from(obj);   // ❌ Not iterable
console.log(arrOfObject);  // [] // TypeError: obj is not iterable

// ✅ Example: Object with length and indexes
const objB = { 0: "Nidhi", 1: "Nupur", length: 2 };
const arrOfObjectB = Array.from(objB);
console.log(arrOfObjectB); // ["Nidhi", "Nupur"]
/*
💡 Works because:
It has numeric keys (0, 1)
It has a length property
This is called an array-like object.
 */
/************************************************************************************************************************/







/************************************************************************************************************************/

// Array.of() :- Returns a new array from a set of elements.
let a1 = 1;
let a2 = 2;
let a3 = 3;
console.log(Array.of(a1, a2, a3)); // [ 1, 2, 3 ]

/************************************************************************************************************************/







/************************************************************************************************************************/
/*
flat() :- “make the array flat (one or more levels deep).” 📦➡️📄
- The flat() method creates a new array by flattening nested arrays (removing inner array layers).
- It basically “flattens” an array of arrays into a single-level array (or as many levels as you specify).

SYNTAX -> array.flat(depth)
________________________________________________________________________
| Parameter              | Description                                 |
| ---------------------- | ------------------------------------------- |
| **depth** *(optional)* | Number of levels to flatten (default = `1`) |
________________________________________________________________________

- If your array has holes (empty elements), flat() removes them automatically.
- Doesn’t Change Original Array -> It returns a new array, leaving the original one unchanged.
*/
const arr = [1, , 2, [3, , 4]];
console.log(arr.flat()); // [1, 2, 3, 4]

const anotherArray = [1, 2, 3, [4, 5, 6, [7, 8, 9, 10]], 12, 45, 63, [52, 86, 42, [32, 90]]];
const real_anotherArray = anotherArray.flat(Infinity); // 💡 Use Infinity when you don’t know how deeply nested it is.
console.log(anotherArray);           // [1, 2, 3, [4, 5, 6, [7, 8, 9, 10]], 12, 45, 63, [52, 86, 42, [32, 90]]]
console.log(real_anotherArray);      // [1,  2,  3,  4,  5,  6,  7, 8,  9, 10, 12, 45, 63, 52, 86, 42, 32, 90]

/************************************************************************************************************************/







/*************************************    Shallow Copy    ****************************************************/
/* 
A shallow copy means only the first level of the object or array is copied — nested objects still refer to the same memory (same reference).
So, if you change a nested object in the copy, it also changes in the original. 
*/

const user = {
  name: "Nidhi",
  address: {
    city: "Patna",
    country: "India"
  }
};

// Shallow copy
const userCopy = { ...user };

userCopy.name = "Nupur";          // Changes ONLY in COPY
console.log(user);                // { name: 'Nidhi', address: { city: 'Patna', country: 'India' } }
console.log(userCopy);            // CHANGED -> { name: 'Nupur', address: { city: 'Patna', country: 'India' } }

userCopy.address.city = "Delhi";  // Changes in BOTH!
console.log(user);                // CHANGED -> { name: 'Nidhi', address: { city: 'Delhi', country: 'India' } }
console.log(userCopy);            // CHANGED -> { name: 'Nupur', address: { city: 'Delhi', country: 'India' } }

console.log(user.address.city);   // Output: "Delhi" (affected original)

/*****************************************************************************************************************/








/*************************************        DEEP COPY      ************************************************/
/* 
A deep copy means a completely independent clone — all levels (including nested objects) are copied.
Changes in the copied object don’t affect the original at all.
*/
const user2 = {
  name: "Nidhi",
  address: {
    city: "Patna",
    country: "India"
  }
};

// Deep copy
const deepCopy = JSON.parse(JSON.stringify(user2));

deepCopy.address.city = "Delhi";
console.log(user2);               // Unchanged in orignal -> { name: 'Nidhi', address: { city: 'Patna', country: 'India' } }
console.log(deepCopy);            // CHANGED in COPY -> { name: 'Nidhi', address: { city: 'Delhi', country: 'India' } }

console.log(user2.address.city);  // Output: "Patna" (original unaffected)

/***************************************************************************************************************/