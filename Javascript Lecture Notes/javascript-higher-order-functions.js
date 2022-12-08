// Review Terms:
    // Built in methods - premade functions made by javascript developers that are easy to invoke

    // Syntactical Sugar - a piece of code created to make a language sweeter

    // Iteration - repeating a process until a condition is met

// Higher Order Functions (HOF) - function that takes a function as an argument 

    // HOF are only called on arrays 
    // Less code 
    // Uses less CPU

// ForEach - great for doing something to each element in an array

    // Anonymous function - a function that is not defined or set to a variable

// [3, 4, 5, 6].foreach(() => {})

// HOF require an argument
    // Required arguemt:
        // value - current value in iteration process (array[i])
    // Optional arguments:
        // index - current index in iteration process (i)
        // array - pass the array the higher order function is called on
// [3, 4, 5, 6].foreach(value => {
//     console.log(value)
// })

// [3, 4, 5, 6].foreach(value, index, array => {
//     console.log("value", value)
//     console.log("index", index)
//     console.log("array", array)
// })

// [3, 4, 5, 6].foreach(banana, apple, orange => {
//     console.log("banana", banana)
//     console.log("apple", apple)
//     console.log("orange", orange)
// })



// Map - iterates over each element in an array and returns a new array with the same length 
    // map is great for modifying or displaying each item 

const myArray = [3, 4, 5, 6]

// const mappedArray = myArray.map(value) => {
//     return value * 2
// }


const mappedArray = myArray.map(value => value * 2)
    

console.log(mappedArray)
console.log(myArray)


// Expected output: ["odd", "even", "odd", "even"]

const evenOrOdd = (array) => {
    return array.map(value => {
        if(vlaue % 2 === 0) {
            return "even"
        } else if(value % 2 !== 0) {
            return "odd"
        } else {
            return "Oops, sometheing went wrong"
        }
    })
}

console.log(evenOrOdd(myArray))
// Expected output: ["odd", "even", "odd", "even"]



// Filter - iterates over an array and narrows down what is returned based on a condition

    // Filter has a built in IF statement
    // Return a subset of the array

const newArray = [ 7, 8, 9, 10]

// let myFilteredArray = myNewArray.filter(value => value % 2 !== 0)

letmyFilteredArray = myNewArray.filter(value => {
    return value % 2 !=0
})

console.log(myFilteredArray) // [7, 9]




// Create the code that ascts on an array of mixed data and returns only the gievn data type based on user input

const mixedData = [3, "hi", true, 50, 4, null, "Foxtrot"]
// pass the data type we are looking for 
// Input data type: "string"
// Output: ["hi", "Foxtrot"]

// Pseudocode
// create a function that takes in an array of mixedData and also a data type we are looking for
    // 2 parameters - array, dataType
    // make a decision about every item in the array using filter
        // return values that are equal to datatype using typeof

const showMyData = (array, dataType) => {
    return array.filter(value => {
        return typeof value === datatType
    })
}

console.log(showMyData(mixedData, "string")) // ["hi", "Foxtrot"]
console.log(showMyData(mixedData, "number")) // [3, 50, 4]
console.log(showMyData(mixedData, "boolean")) // [true]




