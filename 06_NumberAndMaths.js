/**************** NUMBERS ********************************************/
/* let score = 100
console.log(score); // 100

let num = new Number(500)
console.log(num); // [Number: 500]
console.table([num.toString(), num.toString().length, num.toFixed(4)]); // ['500', 3, '500.0000']


let marks = 987.3213
console.log(marks.toPrecision(3)); // 987

let marks1 = 93.3213
console.log(marks.toPrecision(2)); // 9.9e+2
console.log(marks.toPrecision(4)); // 987.3
console.log(marks.toPrecision(6)); // 987.321


let number = 100000000
console.log(number.toLocaleString()); // 100,000,000
console.log(number.toLocaleString('en-IN')); // 10,00,00,000

console.table([Number.MAX_VALUE, Number.MIN_VALUE, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]) */
// [1.7976931348623157e+308, 5e-324, -Infinity, Infinity, 9007199254740991, -9007199254740991]

/************************************************************/



/*************** MATHS *********************************************/
// console.log(Math); // Object [Math] {}
// console.log(Math.abs(-28)); // 28
// console.log(Math.round(-2.8)); // -3
// console.log(Math.round(1.3)); // 1
// console.log(Math.round(5.8)); // 6

/* ceil => Ceiling[TOP Value]; floor => Floor[BOTTOM Value] */
// console.log(Math.ceil(5.1)); // 6
// console.log(Math.ceil(5.8)); // 6
// console.log(Math.floor(5.8)); // 5
// console.log(Math.floor(5.2)); // 5

/* min or max => from set of datas(Arrays) */
// console.log(Math.min(5, 4, 73, 56, 2, 0, 0)); // 0
// console.log(Math.max(5, 4, 73, 56, 2, 0, 0)); // 73


/* random() => Returns a pseudorandom number between 0 and 1. */
console.log(Math.random()); 
console.log(Math.random()*10); 
console.log((Math.random()*10) + 1); // never a 0
console.log(Math.floor(Math.random()*10) + 1); // never a 0

/************************************************************/