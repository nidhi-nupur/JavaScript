/* _____________________________________________ OBJECTS in JS ______________________________________________ */
/* 
An object is a collection of key–value pairs.
Each key (also called a property name) is a string (or symbol), and each value can be anything — number, string, array, function, or even another object.

## There are two main ways to create (declare) objects in JavaScript:
1. Object Literal
-> Easiest way to define objects.
-> All properties and values are defined directly inside {}.
-> Used for static, small, or one-time objects.
        Syntax:
        const objName = {
            key1: value1,
            key2: value2,
            ...
        };

2. Object Constructor
-> We can also create objects using the new Object() constructor or by defining a custom constructor function.
2.(a). Using Built-in Object() Constructor
2.(b). Using a Custom Constructor Function
*/

const person = { //Literal Object creation
    name: "Nidhi",
    "full name": "Nidhi Nupur", // can Never be accesseed using  (person.full name) as key is always considered as String in the compiler thats why we alway use double quotations to access these kind of objects.
    age: 20,
    marks: 100,
    email: "nidhigoogle.com",
    isLoggedIn: false,
    lastLogInDay: ["Monday", "Friday"]
};
console.log(person.name);              // Output: Nidhi
console.log(person["full name"]);           // Always be accessed using double quotations.   // Output: Nidhi Nupur
console.log(person.age);               // Output: 20
console.log(person.marks);             // Output: 100

console.log(person.email);             // Output: nidhigoogle.com
console.log(person["email"]);             // Output: nidhigoogle.com // accessed using double quotation as String.

console.log(person.isLoggedIn);             // Output: false
console.log(person.lastLogInDay[1]);             // Output: Friday


const obj1 = new Object(); // Object creation Using Built-in Object() Constructor
obj1.var1 = "AABBCC";
obj1.var2 = 55;
console.log(obj1.var1);                     // Output: AABBCC
console.log(obj1.var2);                     // Output: 55
console.log(obj1);                             // Output: { var1: 'AABBCC', var2: 55 }  


function obj2(mem1, mem2) { // Object Creation Using a Custom Constructor Function
    this.mem1 = mem1;
    this.mem2 = mem2;
}
let obj2A = new obj2("abcd", 22);
let obj2B = new obj2("1234", 99);
// ✅ The "new" keyword creates a new object and sets "this" to refer to it.
console.log(obj2A);                          // Output: obj2 { mem1: 'abcd', mem2: 22 }
console.log(obj2A.mem1);                     // Output: abcd
console.log(obj2A.mem2);                     // Output: 22

console.log(obj2B);                          // Output: obj2 { mem1: '1234', mem2: 99 }
console.log(obj2B.mem1);                     // Output: 1234
console.log(obj2B.mem2);                     // Output: 99

/* ___________________________________________________________________________________________________________ */

/* _____________________________________________ Singleton______________________________________________________________ */
const userX = {
    greet() {
        // console.log(`Hello, ${this.nameX}`);
    }
};
const personX = Object.create(userX); // inherit from 'userX'
personX.nameX = "Nidhi";
personX.greet(); // Hello, Nidhi
/* ✅ personX doesn’t have its own greet() — it inherited it from userX. */


/* ___________________________________________________________________________________________________________ */


/* ________________________________________ [VVI] Symbol for Keys___________________________________________________________________ */
const mySym1 = Symbol("key1");
const mySym2 = Symbol("key2");
const SymUser = {
    mySym1: "MyKey1", // DataType as string
    [mySym2]: "MyKey2" // DataType as Symbol
};

console.log(SymUser.mySym1);                 // Output: MyKey1
console.log(SymUser["mySym1"]);  // same as above      // Output: MyKey1
console.log(typeof SymUser.mySym1);                 // Output: string
console.log(typeof SymUser["mySym1"]);                 // Output: string
console.log([mySym2]);                          // Output: [Symbol(key2)]
console.log(typeof [mySym2]);                          // Output: object
console.log();
console.log(typeof SymUser.mySym1);                    // Output: string
console.log(typeof SymUser.mySym2);                    // Output: symbol
console.log(SymUser.mySym2);                          // Output: MyKey2
console.log(SymUser[mySym1]);                          // Output: MyKey1
console.log(SymUser[mySym2]);                          // Output: MyKey2

/* ___________________________________________________________________________________________________________ */


/* _______________________________________  Nested Object Creation____________________________________________________________________ */
const regularUser = {
    regUserEmail: "iamnidhinupur@gmail.com",
    regUserFullName: {
        regularUserOrignalName: {
            regUserFirstName: "Nidhi",
            regUserLastName: "Nupur"
        }
    }
}
console.log(regularUser);         // Output: { regUserEmail: 'iamnidhinupur@gmail.com', regUserFullName: { regularUserOrignalName: { regUserFirstName: 'Nidhi', regUserLastName: 'Nupur' } } }
console.log(regularUser.regUserEmail);         // Output: iamnidhinupur@gmail.com
console.log(regularUser.regUserFullName);         // Output: { regularUserOrignalName: { regUserFirstName: 'Nidhi', regUserLastName: 'Nupur' } }
console.log(regularUser.regUserFullName.regularUserOrignalName);         // Output: { regUserFirstName: 'Nidhi', regUserLastName: 'Nupur' }
console.log(regularUser.regUserFullName.regularUserOrignalName.regUserFirstName);         // Output: Nidhi
console.log(regularUser.regUserFullName.regularUserOrignalName.regUserLastName);         // Output: Nupur
/* ___________________________________________________________________________________________________________ */

/* ______________________________________________ Combine Two Objects [Using Normal Method and using Object.assign() method and using spread operator]  _____________________________________________________________ */
/******************* NORMAL METHOD *******************/
const object1 = { 1: "abc", 2: "X", 3: 4 }
const object2 = { 1: "xyz", 2: "Y", 3: 8 }
const object3 = { 4: "xyz", 5: "Y", 6: 8 }
const combineObjects = { object1, object2 };
console.log(combineObjects);            // Output: { object1: { '1': 'abc', '2': 'X', '3': 4 }, object2: { '1': 'xyz', '2': 'Y', '3': 8 } }

/******************* OBJECT.assign() METHOD *******************/
/*
Syntax of Object.assign() method:
Object.assign(target, ...sources)
*/
const combineObjects2 = Object.assign({}, object1, object2);
console.log(combineObjects2);            // Output: { '1': 'xyz', '2': 'Y', '3': 8 }  // Same name of Objects are combined.

const combineObjects3 = Object.assign({}, object1, object3);
console.log(combineObjects3);            // Output: { '1': 'xyz', '2': 'Y', '3': 8, '4': 'xyz', '5': 'Y', '6': 8 }

/******************* SPREAD OPERATOR METHOD *******************/
/*
Syntax of spread operator:
{...object1, ...object2}
*/
const combineObjects4 = { ...object1, ...object2 };
console.log(combineObjects4);            // Output: { '1': 'xyz', '2': 'Y', '3': 8 }  // Same name of Objects are combined.

const combineObjects5 = { ...object1, ...object3 };
console.log(combineObjects5);            // Output: { '1': 'xyz', '2': 'Y', '3': 8, '4': 'xyz', '5': 'Y', '6': 8 }
/* ___________________________________________________________________________________________________________ */


/* ______________________________________________ Object Value catch from Databases [from Arrays] _____________________________________________________________ */
const user = [
    {
        email: "nidhi@gmail.com",
        fullName: {
            firstName: "Nidhi",
            lastName: "Nupur"
        },
        isLoggedIn: true,
        lastLogInDay: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    },
    {
        email: "nupur@gmail.com",
        fullName: {
            firstName: "Nupur",
            lastName: "Nidhi"
        },
        isLoggedIn: true,
        lastLogInDay: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    },
    {
        email: "nidhi@gmail.com",
        fullName: {
            firstName: "Nidhi",
            lastName: "Nupur"
        },
        isLoggedIn: true,
        lastLogInDay: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    },
    {
        email: "nidhi@gmail.com",
        fullName: {
            firstName: "Nidhi",
            lastName: "Nupur"
        },
        isLoggedIn: true,
        lastLogInDay: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    }
]

console.log(user);                                       // Output: [Object, Object, Object, Object]
console.log(user[1]);                                    // Output: { email: 'nupur@gmail.com', fullName: { firstName: 'Nupur', lastName: 'Nidhi' }, isLoggedIn: true, lastLogInDay: [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ] }
console.log(user[1].fullName);                           // Output: { firstName: 'Nupur', lastName: 'Nidhi' }
console.log(user[1].fullName.firstName);                 // Output: Nupur
console.log(user[1].fullName.lastName);                  // Output: Nidhi
console.log(user[1].isLoggedIn);                         // Output: true
console.log(user[1].lastLogInDay);                       // Output: [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ]
console.log(user[1].lastLogInDay[2]);                    // Output: Wednesday
console.log(user[1].lastLogInDay[2][0]);                 // Output: W

/* ___________________________________________________________________________________________________________ */


/* __________________________________________________ Object.keys() &  Object.values() &  Object.entries()___________________________________________________________ */
console.log(regularUser)                             // Output: { regUserEmail: 'iamnidhinupur@gmail.com', regUserFullName: { regularUserOrignalName: { regUserFirstName: 'Nidhi', regUserLastName: 'Nupur' } } }

/* 
Syntax of Object.keys() method:
Object.keys(obj)

Syntax of Output of Object.keys() method:
[object keys]    
*/
console.log(Object.keys(regularUser));               // Output: [ 'regUserEmail', 'regUserFullName' ]

/* 
Syntax of Object.values() method:
Object.values(obj)

Syntax of Output of Object.values() method:
[object values]    
*/
console.log(Object.values(regularUser));             // Output: [ 'iamnidhinupur@gmail.com', { regularUserOrignalName: { regUserFirstName: 'Nidhi', regUserLastName: 'Nupur' } } ]

/* 
Syntax of Object.entries() method:
Object.entries(obj)

Syntax of Output of Object.entries() method:
[object entries]    Eg: [[key1, value1], [key2, value2]]
*/
console.log(Object.entries(regularUser));             // Output: [ [ 'regUserEmail', 'iamnidhinupur@gmail.com' ], [ 'regUserFullName', { regularUserOrignalName: { regUserFirstName: 'Nidhi', regUserLastName: 'Nupur' } } ] ]
/* ___________________________________________________________________________________________________________ */


/* _______________________________________________ Object Property Check [hasOwnProperty() method]____________________________________________________________ */
console.log(regularUser.hasOwnProperty("regUserEmail"));             // Output: true
console.log(regularUser.hasOwnProperty("regUserFullName"));           // Output: true
console.log(regularUser.hasOwnProperty("regUserFirstName"));          // Output: false

/* ___________________________________________________________________________________________________________ */