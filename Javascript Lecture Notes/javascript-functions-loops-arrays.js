// FUNCTIONS WITH LOOPS AND ARRAYS

const myArrayOfNums = [2, 3, 4, 5, 6]

// Create function that returns array of each element multiplied by 5

// input - an array of numbers (good idea to specify the data type)
// output - an array of numbers - collection of the results of each element * 5

// create a function that takes in an array 
// declare a variable that is an empty array
// access each element in the array --- for loop
// maniplulate or modify the element --- multiply by 5
//  return the new array 

// Step 1. Write out the function structure

    // const mult5 = (array) => {
    //     return array * 5
    // }
    // console.log(mult15(myArrayOfNums)) // output in NaN

// Step 2. Iterate - write out the FOR LOOP structure

    // const mult5 = (array) => {
    //     for(let i=0; i<array.length; i++) {
    //         console.log(array[i])
    //     }
    // }
    // console.log(mult15(myArrayOfNums))

// Step 3. Determine what the for loop is going to do

    // const mult5 = (array) => {
    //     for(let i=0; i<array.length; i++) {
    //         console.log(array[i] * 5)
    //     }
    // }
    // console.log(mult15(myArrayOfNums))

// Step 4. Return the Value

const mult5 = (array) => {
    let newArray = []
    for(let i=0; i<array.length; i++) {
        // array[i] * 5
        newArray.push(array[i] * 5)
        array[i] * 5
    }
    return newArray
}
console.log(mult15(myArrayOfNums))


const myArrayOfNums2 = [4, 5, 6]
const myArrayOfNums3 = [7, 8, 9, 10]

console.log(mult5(myArrayOfNums))
console.log(mult5(myArrayOfNums2))
console.log(mult5(myArrayOfNums3))
