//data type is 2 types

// Primitive
//      7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null // datatype - object
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId); // false becose symble is retern datatype diffrent.

const bigNumber = 827982349845680283085n  // BigInt
// console.log(typeof bigNumber); 






// Referance (Non primitive)
//      Array, Objects, Functions

const heros = ["thor", "spiderman", "naagraj"]
let myObj = {
    name: "kashyap",
    age: 19,
}

console.log(typeof heros); // datatype - object
console.log(typeof myObj); // datatype - object




const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction); // datatype - function