// Equaliry Operators

// Strict equality ===
let myName = "Elyse"
console.log("Elyse" === myName) // true

// Loose equality ==
let myFavNum = 7
console.log(myFavNum =="7") // true
console.log(myFavNum ==="7") // false 

// Relational Operations
// < > <= >=

//  Logical Operators

    // Logical AND is &&

    let greeting ="Hello"
    let num = 6

    console.log(num > 2 && "Hello === greeting") // true + true = true
    console.log(num < 2 && "Hello === greeting") // false + true = false
    
    // Logical OR is ||
    console.log(num < 2 || "Hello" === greeting) // false + true = true 


    // Negation
    // Logical opposite using bang operator !
    console.log(num!== greeting) // true 

//________________________________________________

// IF/ELSE
// action is always in curly braces

if(true) {
    console.log("I'm True")
} 

if(false) {
    console.log("I'm false")
} else {
    console.log("here is the else")
}

// String interpolation - injects a variable into a string (best practice)
`` // backticks on top of tab button
// String concactenation - using the addition sign to add strings and variables: "Hey" + myName

let myName = "Elyse"
if(myName === "Elyse") {
    console.log("Hey Elyse!")
} else {
    console.log(`Hey ${myName}`)
}


// ELSE IF 

let num1 = 3
let num2 = 6

if(num1 > num2) {
    console.log(`${num1} is greater than ${num2}`)
} else if(num1 < num2) {
    console.log(`${num1} is less than ${num2}`)
} else if(num1 === num2) {
    console.log(`${num1} and ${num2} are the same`)
} else {
    console.log("Invalid entry")
}