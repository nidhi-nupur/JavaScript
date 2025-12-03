/* ____________________________________________________ Functions in JS_________________________________________________________________________________ */
console.log("N");
console.log("I");
console.log("D");
console.log("H");
console.log("I");

function sayMyName() {        // function define
    console.log("N");
    console.log("I");
    console.log("D");
    console.log("H");
    console.log("I");
}
sayMyName                  // function reference
sayMyName();               // function call/execution



// function addTwoNumbers(num1, num2) 
function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}
addTwoNumbers(10, 20);           // Output: 30
addTwoNumbers(10, "20");         // Output: 1020
addTwoNumbers(10, true);         // Output: 11
addTwoNumbers(10, null);         // Output: 10
addTwoNumbers(10, undefined);    // Output: NaN
addTwoNumbers(10);               // Output: NaN
addTwoNumbers();                // Output: NaN



// function addThreeNumbers(num1, num2, num3) 
function addThreeNumbers(num1, num2, num3) {
    let result = num1 + num2 + num3;
    return result;
}
let result = addThreeNumbers(10, 20, 30);    // Output: 60
console.log("Result: ", result);             // Output: Result: 60



function userLoggedIn(username) {    // Default parameters (username = "Nidhi")
    if (username === undefined) {    // Or can write it as (!username) or (!username === undefined)
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}
userLoggedIn("Nidhi")               // Nothing will print because we are not storing the return value in a variable
console.log(userLoggedIn("Nidhi"));                 // Output: Nidhi just logged in
console.log(userLoggedIn());                     // Output: Please enter a username
console.log(userLoggedIn("Nidhi", true));         // Output: Nidhi just logged in



// One example for Default parameters (username2 = "Nidhi")
function userLoggedIn2(username2 = "Nidhi") {
    if (username2 === undefined) {
        console.log("Please enter a username");
        return;
    }
    return `${username2} just logged in`;
}
console.log(userLoggedIn2());      // Output: Nidhi just logged in
console.log(userLoggedIn2("Nupur")); // Output: Nupur just logged in
/* _____________________________________________________________________________________________________________________________________ */




/* __________________________________________ JS Functions with Objects and Arrays_________________________________________________________________________________________ */
/* Rest Operator:
Rest Operator is used to pass multiple arguments to a function.
Rest Operator is denoted by (...args)
*/
function calculateTotal(...numbers) {
    let total = 0;
    for (let num of numbers) {            // can be written as for (let num in numbers) or for (let i = 0; i < numbers.length; i++)
        total += num;                     // can be written as total += numbers[i];
    }
    return total;
}
console.log(calculateTotal(10, 20, 30)); // Output: 60
console.log(calculateTotal(10, 20, 30, 40)); // Output: 100

/* Spread Operator:
Spread Operator is used to pass multiple arguments to a function.
Spread Operator is denoted by (...args)
*/
function calculateTotal2(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log(calculateTotal2(10, 20, 30)); // Output: 60
console.log(calculateTotal2(10, 20, 30, 40)); // Output: 100
/* _____________________________________________________________________________________________________________________________________ */



/* ___________________________________ handleObject() __________________________________________________________________________________________________ */

function handleObject(anyObject) {
    console.log(`User name is ${anyObject.name} and age is ${anyObject.age}`);
}
handleObject({ name: "Nidhi", age: 22 });

/* Return 2nd value from an Array */
function returnSecondValue(getArray) {
    return getArray[1];
}
console.log(returnSecondValue([10, 20, 30])); // Output: 20
/* _____________________________________________________________________________________________________________________________________ */




/* ________________________________________ Ways to declare a function ________________________________________ */

// 1. Function Declaration
function k() {
    console.log("Hello");
}
k()

// 2. Function Expression
const l = function () {
    console.log("Hello");
}
l()

// 3. Arrow Function
// m()   // Will throw an error because arrow function is not hoisted (means it cannot be called before its declaration)
const m = () => {
    console.log("Hello");
}
m()

// 4. Function Constructor
const n = new Function("console.log('Hello')");
n()
/* ____________________________________________________________________________________________________________ */




/* _______________________________________ Arrow Function and Concept of 'this' keyword___________________________________________________________________ */
/* 'this' keyword means current context(means current value) */
/* 'this' keyword Concept */
/* 'this' keyword can be used in any function */
function o() {
    const variable = "abc";
    console.log(this);             // Output: Window object
    console.log(this.variable);    // Output: undefined because 'this' keyword is not available in an arrow function
}
o();    // Output: Window object

const p = function () {
    console.log(this);              // Output: Window object
    console.log(this.variable);    // Output: undefined because 'this' keyword is not available in an arrow function
}
p();    // Output: Window object

const q = () => {
    console.log(this);              // Output: {} (empty object)
    console.log(this.variable);    // Output: undefined because 'this' keyword is not available in an arrow function
}
q();    // Output: {} (empty object)


/* 'this' keyword in Object */
const user = {
    userName: "User Ka Naam",
    age: 22,
    welcomeMessage: function () {
        // console.log(`Welcome ${userName}`);          // ReferenceError: userName is not defined
        console.log(`Welcome ${this.userName}`);       // Output: Welcome User Ka Naam
        console.log(`Welcome ${this.age}`);            // Output: Welcome 22
        console.log(this);                             // Output: { userName: 'User Ka Naam', age: 22, welcomeMessage: [Function: welcomeMessage] }
    }
}
user.welcomeMessage();              // Output: Welcome User Ka Naam
user.userName = "Nidhi";            //changes the value of userName
user.welcomeMessage();              // Output: Welcome Nidhi
console.log(this);                 // Output: {} (empty object) but in browser it will show window object



/* 
Arrow function does not have its own 'this' keyword, it uses the 'this' keyword of the parent scope 
Syntax:
    () => {} is an arrow function
     OR
    const arrowfunction = () => {} is also an arrow function
     OR
    const arrowfunction2 = function () => {} is also an arrow function
    
*/

/* Explicit and Implicit Arrow Function */
/* Explicit Arrow Function */
const add = (num1, num2) => num1 + num2;
console.log(add(10, 20)); // Output: 30
// OR
const add1 = (num1, num2) => {
    return num1 + num2;
}
console.log(add1(10, 20)); // Output: 30

/* Implicit Arrow Function */
const add2 = (num1, num2) => (num1 + num2);
console.log(add2(10, 20)); // Output: 30

const add3 = (num1, num2) => ({ data: "ABCD" })
console.log(add3(10, 20)); // Output: { data: 'ABCD' }

/* Conclusion: Arrow function does not have its own 'this' keyword, it uses the 'this' keyword of the parent scope means it will take 'this' keyword from the parent scope */
/* ____________________________________________________________________________________________________________ */



/* ________________________________ IIFE (Immediately Invoked Function Expression) ____________________________________________________________________________ */
/* IIFE is a function that is called as soon as it is defined */
/* Semicolon role in IIFE: Semicolon is required after IIFE to run next instruction */

(() => console.log("Hello"))();      // here semicolon is required after IIFE to run next instruction
((name) => console.log(`Hello ${name}`))("Nidhi");

/* Named IIFE */
(function namedIIFE() {
    console.log("Hello");
})();

/* Named IIFE with parameters */
(function namedIIFE2(name) {
    console.log(`Hello ${name}`);
})("Nidhi")
/* ____________________________________________________________________________________________________________ */