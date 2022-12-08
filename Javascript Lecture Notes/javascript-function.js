// Functions are cool because:
//     1. decide when the code executes
//     2. reusable code

// Encapsulation - all the info needed in a function is either inside or given as an input 

// Multiple ways to create a function

// Anatomy of a function:
// - variable declaration: const
// - name: camelCase, communicate intention
// - single equal sign (assignment operator)
// - parantheses - indicates action or behavior in code
// - arrow function syntax
// - curly braces: an executable action in the code
// - return: indicates output

// const coffeeMaker = () => {
//    return "coffee is made"
// }

// invoke the function - call the function

// console.log(coffeeMaker())
// console.log(coffeeMaker())
// console.log(coffeeMaker())
// console.log(coffeeMaker())
// console.log(coffeeMaker())


// add a parameter

// const coffeeMaker = (coffeeType) => {
//     return `Your ${coffeeType} is made`
//  }
//  // assign a value to the parameter with an argument
//  console.log(coffeeMaker())
//  // Output: Your undefined is made
//  console.log(coffeeMaker("latte"))
//  // Output: Your latte is made

//  console.log(coffeeMaker("Kona"))
//   // Output: Your Kona is made
//  console.log(coffeeMaker("expresso"))
//   // Output: Your expresso is made
//  console.log(coffeeMaker("chai"))
//   // Output: Your chai is made
 


// pseudo coding 
// prompt - create a function that takes in the type of coffee and the size of coffee and outputs the order and the price
// small -$4, medium -$5, large $6

// Function expression: create a function called coffeeMaker
// input: size and type 
// output: type and price

// Process:
// conditional statement - evaulation on the size of the coffee, equality operator

const coffeeMaker = (coffeeType, coffeeSize) => {
    if(coffeeSize === "small") {
       return `your ${coffeeType} costs $4`
    } else if (coffeeSize === "medium") {
       return `your ${coffeeType} costs $5`
    }  else if(coffeeSize === "large") {
       return `your ${coffeeType} costs $6`
    } else {
        return "Something went wrong."
    }
 }
 console.log(coffeeMaker("latte", "small"))
 // Output: your latte costs $4
 console.log(coffeeMaker("tea", "large")) 
 // Output: your tea costs $6



// Vocab:
// - Encapsulation - all logic stays inside the function the only gate is a parameter
// - be familair with the anatomy of a function
// - invoke, invokation, call - makes the function run
// - parameters - placeholder variabke that belongs to your function
// - argument - assigns the parameter a value, gets a pss into the function invocation
// - psuedo coding - "rubber ducking", writing down your process
