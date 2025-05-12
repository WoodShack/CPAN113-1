const studentName = "Scott"
const studentAge = 32;
const isEnrolled = true

console.log(studentName)
console.log(studentAge)
console.log(isEnrolled)

//Data Types
var thisIsString = "My String"
var thisIsNumber = 20
var thisIsBool = true
var thisIsArray = ["orange","blue","pink"]
var thisIsObject = {
    snackName:"chips",
    sweet:false,
    salty:true}

//Arithmetic Operators
//Add
console.log("studentAge+thisIsNumber = ")
console.log(studentAge+thisIsNumber)

//Subtract
console.log("studentAge-thisIsNumbe = ")
console.log(studentAge-thisIsNumber)

//Multiply
console.log("studentAge*thisIsNumber = ")
console.log(studentAge*thisIsNumber)

//Divide
console.log("studentAge/thisIsNumber = ")
console.log(studentAge/thisIsNumber)

//Comparison Operators
//Greater than
console.log("studentAge > thisIsNumber = ")
console.log(studentAge > thisIsNumber)

//Less than
console.log("studentAge > thisIsNumber = ")
console.log(studentAge < thisIsNumber)

//Equal to
console.log("studentAge === thisIsNumber = ")
console.log(studentAge === thisIsNumber)

//Not equal to
console.log("studentAge !== thisIsNumber = ")
console.log(studentAge !== thisIsNumber)

//Logical Operators
//AND
if(thisIsBool && studentAge > thisIsNumber){
    console.log("thisIsBool is true AND studentAge is greater than thisIsNumber")
}

//OR
if(thisIsBool || studentAge > thisIsNumber){
    console.log("ithisIsBool is true OR studentAge is greater than thisIsNumber")
}

//Not, turns bool into opposite
console.log("NOT operator")
console.log(!thisIsBool)
