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

/* _____________________________________________________________________________________________________________________________________ */


/* _____________________________________________________________________________________________________________________________________ */
