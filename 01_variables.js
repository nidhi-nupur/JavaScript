const accountId = 12345
let accountEmail = "nidhi@google.com"
var accountPassword = "asdfg" /* Prefer not to use var, because of the issue in block scope and functional scope*/
accountCity = "Bihar"; /* Prefer Not to initialize a variable without giving its datatypes  */

// accountId = 2 // const variable can't be reassign. Will show an Error
console.log(accountId);

accountEmail = "nupur@gmail.com";
accountPassword = "lkjhg"
accountCity = "Bangaluru"
let accountState; /* Value of uninitialized variable is "Undefined" */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])