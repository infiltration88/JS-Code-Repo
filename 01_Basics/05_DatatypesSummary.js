//Primitive

// String, Number, Boolean, BigInt, Null, Undefined, Symbol


// Is JS dynamically typed or Statically typed?

const score = 100
const scorevalue =100.5
const isLoggedIn = true
const outsideTemp = null
let userEmail;

const ID = Symbol('123')
const AnotherID = Symbol('123')
// console.log(ID=== AnotherID);

const bigNumber =1234556788655n  //BigInt after you add n at the end

//Reference (Non-Primitive)

// Arrays, Objects , Functions

const heros = ["Shaktiman","Gman","Spiderman"];
let ObjName= {
name: "Riti",
Age:2,   
}

const newFun = function(){
    console.log("Hello World");
}

console.log(typeof heros);
