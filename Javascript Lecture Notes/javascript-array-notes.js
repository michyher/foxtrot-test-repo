// Javascript Arrays Notes

// definition: data structure that is used to store a collection of data in an indexed list

// [1, 2, 3, 4, 5]

// -each item in an array is called an element
// -elements are seperated by commas
// -surrounded by square brackets
// -zero-based index

// .length  - returns the number of elements in the array

// [1, 2, 3, 4, 5]

// first index in array is always 0
// indexes 0, 1, 2, 3, 4
    let numbers = [1, 2, 3, 4, 5]
    console.log(numbers)
    // BRACKET NOTATION

    // allows us to access elements by index
    // syntax - brackets with desired index inside, example: [3]
    console.log(numbers[3])

console.log(numbers.length)

console.log(numbers[6]) // output is undefined
console.log(numbers[6]= 49) // output is 49
console.log(numbers)
console.log(number[5]) // undefined 

let newArray = ["cat", "dog", true, 42, false]

// let empty = [] - you can assign an empty array.

// _____________________ BUILT IN METHODS ______________________

// SETTERS - mutators - they change the original array
// GETTERS - accessors - get the element so you can use it, but doesn't change the array

// SETTERS

// .push() - adds an item to the END of the array
console.log(numbers)
console.log(numbers.push(7)) // it returns the length of the array
console.log(numbers)

// .unshift() adds to the BEGINNING OF ARRAY
console.log('start', numbers)
numbers.unshift(74)
console.log('end', numbers)

// .pop() REMOVES LAST ELEMENT from the array and returns its VALUE

console.log(numbers.pop())
console.log(numbers)

// .shift() REMOVES THE FIRST ELEMENT from the array and it returns its VALUE
console.log(numbers.shift())
console.log(numbers)

let removedItem = numbers.shift()
console.log(removedItem)

// GETTERS

// .concat() - add multiple arrays
// calling the method on one array and then passing the other array as an argument
let nums = [1, 2, 3]
let bigNums = [36, 42, 97]
let strings = ["Tawn", "Michy", "Eric"]

   console.log(nums.concat(bigNums)) // output: 1, 2, 3, 36, 42, 97
   console.log(nums.concat(strings)) // output: 1, 2, 3, 'Tawn', 'Michy', 'Eric'

// .split()

let splitString = "hello".split("")
console.log(splitSring) // output: 'h', 'e', 'l', 'l', 'o'

//.join()
    console.log(split.join(""))

// DESTRCTURING

// assignment syntax that makes it possible to unpack values from array into distcinct variables

let fullName = ["Tricia", "Sykes"]
// let fName = fullName

let [firstName, lastName] = fullName

console.log(firstName)

firstName