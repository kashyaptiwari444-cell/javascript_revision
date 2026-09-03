//data type is 2 types

// Primitive
//      7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
//      jo variable declare kra uska ak copy milta hai.

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
//      Original value ka referance.

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





//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// memory is 2 types
// Stack (Primitive) , Heap(Non-Primitive)

let myYoutubename = "kashyaptiwaribca07"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "kash@google.com",
    upi: "kt@1023"   
}

let userTwo = userOne

userTwo.email = "tiwari@google.com"

console.log(userOne.email);
console.log(userTwo.email);
