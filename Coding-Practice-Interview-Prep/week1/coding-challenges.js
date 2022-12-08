// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create the code that determines which of the two strings has more characters. Use the two sets of test variables provided.


// // Set one:

// // Expected outcome: "banana"

// make a function called longerString 
    // make a conditional statement in order to compare both strings
    // .length in order to measure the length of characters per string
    // if the length of fruit1 > fruit2
        // return fruit1
    // else if the length of fruit2 > fruit1
        // return fruit2
    // else 
        // return error


    // EDGE CASE: 
        // input is a number or undefined
        // if either of the inputs are not a string, please return an error message to tell them to input a string
const longerString = (input1, input2) => {
    if(typeof input1  !== "string"|| typeof input2 !== "string") {
        return "please input a string, this is not a string."
    }
    
    if(input1.length > input2.length) {
        return input1
    }
    else if(input2.length > input1.length) {
        return input2
    }
    else {
        return "error"
    }
}
const validInput1 = "biggerword"
const validInput2 = "smlword"
const error1 = undefined
const error2 = 39393939
// console.log(longerString(validInput1,validInput2))
// console.log(longerString(error1,validInput2))
// console.log(longerString(error2,validInput2))
// // Set two:
// const fruit1 = "cherry";
// const fruit2 = "kiwi";



// --------------------1) Create the code that determines if a given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.


// make a function called boilingPointFunction
// conditional statement to compare the input with the temperature
    // let boilingPoint = 212
// 1 input: number


// let temp = 42;
// Expected output: "42 is below boiling point"

// let temp = 350;
// // Expected output: "350 is above boiling point"

let temp = "212";
// // Expected output: "212 is at boiling point"

const boilingPointFunction = (input) => {
    let boilingPoint = 212
    if(typeof input !== "number") {
        return "please use a number"
    }
    if(input < boilingPoint) {
        return input + " is less than boiling point." 
    }
    else if(input > boilingPoint) {
        return input + " is greater than boiling point"
    }
    else if(input === boilingPoint) {
        return input + " is at boiling point"
    }
}

console.log(boilingPointFunction(temp))




// --------------------2) Create the code that will combine the two arrays, sort the array and return the array and the length using the test variables provided below.


const arr1 = [2, 5, 2, 2, 4, "l"]
const arr2 = [6, 3, 5, 3]
// // Expected output: newArray: [2,2,2,3,3,4,5,5,6], len: 9

// PSEUDOCODE:
    // make a function called bothArrays
    // .sort to sort the both arrays 
    // .length to get the length of the new array

const bothArrays = (array1, array2) => {
    // for each in array1
    // if not number pop element
    // for each in array 2
    // if not number pop element


    let twoArrays = array1.concat(array2)

    //for each in twoArray
    // if not number pop
    twoArrays.sort((a, b) => a - b)
    return "New Array: [" + twoArrays + "], length: " + twoArrays.length
}
console.log(bothArrays(arr1, arr2))

// let numbers = [4, 2, 5, 1, 3]
// numbers.sort((a, b) => a - b)
// console.log(numbers)

// // [1, 2, 3, 4, 5]


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process:
// I split the directions into two sections which were splitting the letters (turing the string into an array), and I had to reverse the order.
// I began with turning the string into an array, I then reversed the order of the array
// After having the order that I wanted, I needed to turn the array back into a string
// const currentCohort = "Foxtrot 2022"
// Expected output: "2202 tortxoF"
// let stringToArray = currentCohort.split("")
// console.log(stringToArray.reverse())
// console.log(stringToArray.join(""))


// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process:

// const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]
// console.log(sanDiegoSummerTemperatures)

// const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
// console.log(sanDiegoWinterTemperatures)