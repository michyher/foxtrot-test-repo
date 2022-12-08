// JAVASCRIPT OBJECTS

// Primitive data types
    // string
    // number
    // Boolean
    // undefined
    // null
    // symbol


// Non primitive 
    // array
    // objects


    // Objects are collections of data - can be indexed or can be stored in key: value pairs

    // h1 {
    //     color: "purple"
    //     text-size: 30px
    // }

    // Object Anatomy
        // curly braces
        // keys - unique identifiers, data type symbol
        // values - data (data type recognized by JS)
        // as many key:value pairs as needed, comma seperated

    // let myObject = { key1: "value", key2: true, key3: 5, key4: [3, 4, 5]}
    // console.log(myObject) // Output: { key1: "value", key2: true, key3: 5, key4: [3, 4, 5]}
    // console.log(myObject.key3) // Output: 5
    // console.log(myObject.key4) // Output: [3, 4, 5]


let breakfast = {
    // Nested Object
    bfast1: {
        fruit1: "banana",
        fruit2: "peach",
        fruit3: "blueberries",
    }
    bfast2: "eggs",
    bfast3: "cornflakes",
    bfast4: "hashbrowns",
    bfast5: "cottage cheese",
    bfast6: {
        bev1: "coffee",
        bev2: "water",
        bev3: "orange juice",
        bev4: "monster"
    }
}
// console.log(breakfast.bfast1.fruit1) // Output: "banana"
// console.log(fruit1) // ReferenceError: fruit1 is not defined

// Destructuring - providing a pathway to a particular key 
// console.log(breakfast.bfast1.fruit1)
// console.log(breakfast.bfast1.fruit2)
// console.log(breakfast.bfast1.fruit3)

// let {fruit1, fruit2, fruit3} = breakfast.bfast1
// console.log(fruit1)
// console.log(fruit2)
// console.log(fruit3)


// Methods
// Object - intersection between data and behavior (function/method)

console.log(['yo', 'hello'].toUpperCase()) // .toUpperCase is not an object

// Method is a function that belongs to an object
// this - a keyword in JavaScript that is a reference to an object inside of itself

let numbersObject = { 
    num1: 3, 
    num2: 4, 
    num3: 5
    addUp: function(){
        return this.num1 + this.num2 + this.num3
    }
}
// console.log(numbersObject.num1) // Output: 3
// console.log(numbersObject.num2) // Output: 4
// console.log(numbersObject.addUp()) // Output: 12
// console.log(numbersObject.addUp) // Output: addUp


// Higher Order Functions

let pets = [{name: "Gunner", age: 3, type: "dog"}, {name: "Hazel", age: 3, type: "cat"}, {name:"Bob", age: 1, type: "fish"}, { name: "Bear", age: 3, type: "dog"}, {name: "Swimy", age: 1, type: "turtle"}]

// console.log(pets[0])
// console.log(pets[4].name)

// prompt: create a custom function that will take in the pets array and return and array with just pet name

const petNames = (petArray) => {
    return petArray.map(element => {
        // console.log(element.name)
        return element.name
    })
}
console.log(petNames(pets))



// whiteborading

    // write down the prompt or problem confirm the accuracy of the question with interviewer
    // go through inputs and outputs
        // do they have a preferred input?
        // based on that input, establish an output 
        // verify if this is corrcect 
    // pseudocode 
        // this is about how you problem solve
        // talk out loud 
    // seem interested in what's happening 
    // know that this is a two way street
        // you are interviewing them as well 
        // how well are they going to be mentoring you