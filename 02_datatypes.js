"use strict"; /* Treat all JS code as newer version */

// alert("Open"); /* When we are using node.js, using alert is not considered as right way to do it. So avoid using alert() when using Node.js */

/******************** DATATYPES *****************************************************/

/* A. Primitive  */ 
// 7 Types:- String(immutable) , Number, Boolean, null, undefined, Symbol(unique), BigInt


/* B. Non-Primitive (Reference) */
// Array, Objects, Functions

let arrName = ["Nidhi", "Nupur"];
console.log(" Datatype of arrName is: " + typeof arrName) // object

let objName = {
    name: "Nidhi", 
    age: "20",
}
console.log(" Datatype of objName is: " + typeof objName) // object

let functionEx = function() {
    console.log('Hello World!!')
}
console.log(functionEx())
console.log(" Datatype of functionEx is: " + typeof functionEx) // function
/************************************************************/


console.log(3 
    + 
    3
) // should not be a good practice. Code readability should be high.
console.log("Nidhi Nupur") // example of better code readability.


let name = "Nidhi" /* String */
let age = 20 /* Integer */
let isLoggedIn = false /* Boolean */

// number => 2 to the power 53

// bigint => for larger integer value
let bigIntVar = 2398647402886237296564327652n // n at the last of the large number

// string => under double quotes => " "
// boolean => true/false
// null => stand alone value for 'empty'
// symbol => terms for uniqueness
let var1 = Symbol('213')
let var2 = Symbol('213')
console.log(var1 === var2) // false
console.log(" Datatype of var1 is: " + typeof var1) // symbol


console.log(typeof "nupur")
console.log(typeof(age))

/* null is a type in itself */
console.log(typeof null) // type of null => object

/* The type of undefined is undefined */
console.log(typeof undefined) // undefined

