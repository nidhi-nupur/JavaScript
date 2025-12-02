/* _____________________________________ Scopes in JS: _______________________________________________________________________ */
/* 
Scope is the region of the code where a variable is accessible.
Scope can be global or local.
Scope is determined by where a variable is declared.
Scope is { }.

Global scope: 
Variables declared outside of a function or block are in the global scope.

Block scope: 
Variables declared inside a block are in the block scope.

Local scope: 
Variables declared inside a function or block are in the local scope.
*/

// Example of global scope:
let a1 = 10;
const a2 = 400;
var a3 = 50;
function b() {
    console.log(a1);                                // Output: 10
    console.log(a2);                                // Output: 400
    console.log(a3);                                // Output: 50
}
b();

// Example of local scope:
var d3 = 100;
function c() {
    let d1 = 20;
    const d2 = 200;
    var d3 = 2000;
    console.log(d1);                                // Output: 20
    console.log(d2);                                // Output: 200
    console.log(d3);                                // Output: 2000
}
c();
console.log(d3);                                    // Output: 100

// Example of block scope:
let g1 = 10;
const g2 = 20;
var g3 = 30;
function h() {
    if (true) {
        let g1 = 100;
        const g2 = 200;
        var g3 = 300;
        console.log(g1);                            // Output: 100
        console.log(g2);                            // Output: 200
        console.log(g3);                            // Output: 300
    }
    console.log(g1);                                // Output: 10
    console.log(g2);                                // Output: 20
    console.log(g3);                                // Output: 30
}
h();

/* ____________________________________________________________________________________________________________ */

/* _______________________________________ var vs let vs const __________________________________________________ */
var e1 = 10;
let e2 = 20;
const e3 = 30;

console.log(e1);                                    // Output: 10
console.log(e2);                                    // Output: 20
console.log(e3);                                    // Output: 30

// var is function scoped
// let and const are block scoped   
// var can be redeclared and reinitialized
// let can be reinitialized but cannot be redeclared
// const cannot be redeclared or reinitialized  

/* 
What is the main and important demerit of var?
var is function scoped, not block scoped.
*/
// Example:
function f() {
    if (true) {
        var f1 = 10;
    }
    console.log(f1);                                // Output: undefined    
}
f();

/* ____________________________________________________________________________________________________________ */
