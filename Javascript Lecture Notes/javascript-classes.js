// JAVASCRIPT CLASSES NOTES

// classes are blueprints or recipes for objects

// Keyword is Class 
// first class declaration uses PascalCase for classname

// variable recipeBook            class RecipeBook

// class + NameOfClass + curly braces

class Car {

}

// action to build object   constructor() {}, first method declared in your class

// class Car {
//     constructor() {
//         this.make = "Suburu"
//         this.model = "Crosstrek"
//         this.year = 2016,
//         this.color = "Blue"
//     }
// }

// keyword to create new is New
// instantiate --> create an instance of a class

let myCar = new Car()
console.log(myCar)

class Car {
    // add parameters that will be the values of the key-value pair
    // the this.<variableName> are the keys
    constructor(makeString, modelString, yearNumber, colorString) {
        // constructor builds the object
        this.make = makeString
        this.model = modelString
        this.year = yearNumber
        this.color = colorString
        // can give a k-v pair a default value (don't have to use parameter)
        // create a custom method that will change that
        this.isOperational = true
    }
    // custom method - we can call using dot notation ie: myCar.carBoasting()
    carBoasting() {
        return `My ${this.make} ${this.model} is super cool`
    }
    brokeDown() {
        // reassigns the value from true to false only if we call this method
        this.isOperational = false
    }
}

let myCar = new Car("Porche", "Boxter", 2020, "Silver")

console.log(myCar.carBoasting())
myCar.brokeDown()
console.log(myCar)