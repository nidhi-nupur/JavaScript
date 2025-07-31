/************************************************************/
let score = 33
console.log(typeof score); // number
console.log(typeof (score)); // number
/************************************************************/

/******** NUMBER CONVERSION ****************************************************/
let value = "34576dss"
console.log(typeof value) // string
let valueInNumber = Number(value)
console.log(typeof valueInNumber) // number
console.log(valueInNumber) // NaN => Not a Number

let value2 = null
console.log(typeof value2) // 0

let value3 = undefined
console.log(typeof value3) // NaN

let value4 = true
console.log(value4) // true
let value4InNumber = Number(value4)
console.log(value4InNumber) // 1
console.log(typeof value4) // NaN

// "3456" => 3456
// "23345tesdf" => NaN
// true => 1; false => 0
/************************************************************/





/*********** BOOLEAN CONVERSION *************************************************/
let check = 1
let checkInBoolean = Boolean(check)
console.log(typeof checkInBoolean) // Boolean
console.log(checkInBoolean) // true

let check2 = 0
let check2InBoolean = Boolean(check2)
console.log(typeof check2InBoolean) // Boolean
console.log(check2InBoolean) // false

let check3 = ""
let check3InBoolean = Boolean(check3)
console.log(typeof check3InBoolean) // Boolean
console.log(check3InBoolean) // false

let check4 = "Nidhi"
let check4InBoolean = Boolean(check4)
console.log(typeof check4InBoolean) // Boolean
console.log(check4InBoolean) // true

// 1 => true; 0 => false
// "" => Empty String => false
// "Nidhi" => String => true
/************************************************************/



/*************** STRING CONVERSION *********************************************/
let number = 345
let numberInString = String(number)
console.log(number) // 345
console.log(typeof number) // number
console.log(numberInString) // 345
console.log(typeof numberInString) // string

/************************************************************/



/************** OPERATIONS **********************************************/
let num = 3
let negNum = -num
console.log(num) // 3
console.log(negNum) // -3

/* Basics Operations */
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2) // n**m => n to the power m
// console.log(2/2)
// console.log(2%2)


/* Operations on String */
let str1 = "Nidhi "
let str2 = "Nupur"
let str3 = str1 + str2
console.log(str3) // Nidhi Nupur


/* JavaScript evaluates expressions LEFT TO RIGHT, and if any operand is a string, + will concatenate instead of adding numbers. */
/* Use parentheses to force intended behavior if needed. */
console.log("1" + 2) // 12
console.log(1 + "2") // 12
console.log("1" + 2 + 2) // 122
console.log(1 + 2 + "2") // 32



/* NOT prefer to do like this.. this makes the code readability ver low. */
console.log(+true) // 1
console.log(+"") // 0

/************************************************************/