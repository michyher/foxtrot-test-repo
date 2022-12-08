// JAVASCRIPT LOOPS

// Iteration - completing process over and over

// bracket notation - gets specific element value from array 

// ----VARIABLE DECLARATIONS AND SCOPE

// var - global scope, can be accessed anywhere inside or outside a block of code
//      {contain code that is to be executed} - curly braces
// let - only available inside the block that it's defined in, it can be reassigned but NOT redeclared
// const - it can't be redeclared or redesigned 

// reassign - change or 'reassign' the value

// let name = "David"
// console.log(name)

// redeclare - resetting the name of the variable
var student = "Zack"
var student = "Heath"
console.log(student) // output: Heath 

// VAR example
if(true) {
    var myName = "Trish"
    console.log(myName) // this will work
}

if(true) {
    var myName = "Trish"
   
}
console.log(myName) // this will work

// LET example

if(true){
    let yourName = "Michy"
    console.log(yourName) // this works
}

if(true){
    let yourName = "Michy"
}
console.log(yourName) // this will not work

// CONST example
 
const day = "Monday"
day = "Sunday"
console.log(day) // you cannot change this variable (once it is set then you can't change it)

// --------- LOOPS --------------

// It is common to use the variable name index to store curent count (shorthand use i)

// What we need to set up for a loop
    // where to start counting ( let index = 0)
    // where to stop counting (index < 10)
    // How to get from the start to the stop (index + 1)

    for(let index=0; index<10; index=index+1) // longhandway
    console.log(index)

    // Shorthand (most common)

    for(let i=0; i<10; i++){
        console.log(i) // output: 0 1 2 3 4 5 6 7 8 9 
    }


    // ---CONNECT LOOPS TO ARRAYS ---

    // Arrays always start with index 0
    // All arrays have a length property
    // Once we have an index, we can extract value of the element

    const numsArray = [5, 6, 7, 8, 9]
 
    for(let i=0; i<numsArray,length; i++) {
        console.log(numsArray[i])
    }

    // CREATING LOGIC IN LOOP

    const numsArray = [5, 6, 7, 8, 9]
        for(let i=0; i<numsArray.length; i++) {
            if(numsArray[i] % 2 !== 0) { // if the array has a remainder
                console.log(`${numsArray[i]} is an odd number!`)
            }
        }