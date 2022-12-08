// Javascript Intro 

// ' CMD /' => comments out code

// Javascript is a dynamically typed language - data types can changed while being used

// INterpreted language - runs at runtime

// Scripting language - logic can be read and understood by computer


console.log("Hey Foxtrot")

// Data TYPES

// 6 Primitive Data Types
// - Boolean
// -Numbers
// -String
// -undefinded
// -null
// -symbol


// 1. NUMBERS - Integers (positive or negative) and Floats (decimals)
// MATH!

    console.log(5 + 3) // 8
    console.log(5 - 3) // 2
    console.log(5 + 3) // 15
    console.log(5 / 3) //

// Modulo - returns the remainder ( great way to determin even or odd)
 console.log(6 % 2) // 0
 console.log(5 % 2) // 1

// Modulo => division and returns the remainder not the result of the evaluation


// 2. STRINGS 

console.log("hello world")
"A"
"A beautiful day to learn JS"

"F", "X", "T", "T"

"36"
36

// TYPE COERCION
    js turn the number into a String

    console.log("36" + 36) // 3636
    console.log( 36 + "36")

// EQUALITY OPERATORS
 //   STRICT EQUALITY === are they the same data type and the same value? it will return false if not.
    5 === 5 //true
    5 === "5" // false

// LOOSE EQUALITY == do they look the same?
   // 5 == "5"  will be true

   // RELATIONAL OPERATIONS
    <
    >
    >+
    <=

 //   logically evaluate the data and return a Boolean
 
//3. BOOLEAN
    // A BINARY VARIABLE, HAVE TWO POSSOBLE VALUES true false NOT "true" "false"
    // (no quotes around true or false)


// LOGICAL OPERATORS
    //compare 2 different evaluated statements

 //   - AND && both statements have to be true for it to be true (ALL or NOTHING)

   // 5 === 5 && 5 === "5" / false
   // 5 === 5 && "5" === "5" / true
    //  T && T / true
    // T && F / FASLE
    // F && F / TRUE


OR  ||  (double pipes)
// - only one has to be true for it to be true 

NOT 
    Bang   !
    //    the opposite value of

     //   true !== false
     //   5 !== 4 / true (5 is not strictlu equal to 4 which is true)





// 4. UNDEFINED
//   variable has been declared but no value is assigned 

//const
let student = "Heath"

console.log(student)

// 5. NULL - does not have a IDBCursorWithValue; it's not zero, it's not an empty String, it lacks value

// 6. Symbol - used for accessing keys in JS Object



// VARIABLES

// 3 different declarations
    // var, const, let
    // var - global variable, can be reassigned 
    // for js var isn't the preferred declaration

    // let - can be reassigned
    // const - value is constant (cannot be changed)

    // Name variable - use descriptive names in camelCase
    //     frist letter is lowercase, all sequential words will be capitalized

    // let foxtrotStduent
    // const hereIsAVrtyLongVariableName

    // Assignment operator - single equal sign, assigning a value to the variable (not evaluating equality)

    // Assigned value - folows the assignment operator and it's the value that will be used when the variable 

const myFavoriteNumber = 42
console.log(myFavoriteNumber) // 42
console.log(myFavoriteNumber + 10) // 52
console.log(myFavoriteNumber) // 42

console.log(myFavoriteNumber + "42") //4242

let myOtherNumber = 36
console.log('first', myOtherNumber)
myOtherNumber = 15
console.log("last", myOtherNumber)

let yourFavoriteNumber = 42

console.log(myOtherNumber + yourFavoriteNumber) // 57









