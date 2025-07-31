/************************************************************/

// Stack Memory => (Primitive) => static Memory allocation (By passing copy of original value, not the original value itself)

// Heap => (Non-Primitive) => Dynamic Memory Allocation (Using call By Refernce[By Passing Original Value] - if the value from heap will change, then the original value will also change)

let value1 = "nidhi"
let value2 = value1 // value2 has copy of value1 not the original value of value1
console.table([value1, value2])
value2 = "nupur"
console.table([value1, value2])


let objName1 = {
    name: "Sakshi",
    appNum: "12345",
} 
console.table([objName1.name, objName1.appNum])

let objName2 = objName1
console.table([objName1.name, objName1.appNum, objName2.name, objName2.appNum])
objName2.name = "Sanya"
console.table([objName1.name, objName1.appNum, objName2.name, objName2.appNum])
