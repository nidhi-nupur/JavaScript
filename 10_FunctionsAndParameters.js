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

/* ___________________________________ handleObject__________________________________________________________________________________________________ */

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