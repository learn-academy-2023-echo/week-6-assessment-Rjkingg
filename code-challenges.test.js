// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("nameCapped", () => {
  it("returns an array with a sentence about each person with their name capitalized", () => {
    expect(nameCapped(hitchhikersCharacters)).toBe(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})



const hitchhikersCharacters = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

// Pseudo code:  Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// Declare function using const
// Pass in nameCapped as the parameter
// iterate over array using .map to get values in object
// Destrcture object (use curly braces) to get the name and occupation (new variables)
//Use char at to capitilaze name

hitchhikersCharacters.map(nameCapped => {
  const {name, occupation} = nameCapped
  console.log (`${name} is a ${occupation} `)
})
 //(`${name} is a ${occupation} `) <--- I know a console log is not needed with Jest but I tried outside of the scope to console log it and there was an error, so I kept it like so.

//tried to put chartAt in different places but was unable to figure out where in the function it would go.


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.


describe("onlyRemain", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    expect(onlyRemain(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(onlyRemain(hodgepodge2)).toEqual( [ 2, 1, -1 ])
  })
})


const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.

// Pseudo code:
// concat arrays so that they become one and set to a new variable
//declare new variable and use .filter method to return a subset of just numbers
//create an HOF that maps over the array of numbers and divides each by 3
//**** I'm sure there was a simpler way of going about it and I am curious to see what that'd look like- the refactored version */
//the test did not pass although I did get the expected output. I think I might have put too many console logs 

const comboArray = hodgepodge1.concat(hodgepodge2)
console.log(comboArray)
//output: [
//   23,     'Heyyyy!',
//   45,     -10,
//   0,      'Yo',
//   false,  5,
//   'Hola', 43,
//   -34,    'greetings',
//   true
// ]
const justNumbers = comboArray.filter(value => typeof value === 'number')
console.log(justNumbers)
//output: [
//   23, 45, -10, 0,
//   5, 43, -34
// ]
const onlyRemain = justNumbers.map(value => value % 3)

console.log(onlyRemain)



// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("numbersCubed", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    const cubeAndSum1 = [2, 3, 4]
    const cubeAndSum2 = [0, 5, 10]
    expect(numbersCubed(cubeAndSum1)).toEqual(99)
    expect(numbersCubed(cubeAndSum2)).toEqual(1125)
  })
})


const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.

// Pseudo code:

//const cubeAndSum1 = [2, 3, 4]
let cubed = 0

for(let i = 0; 1 < cubeAndSum1.length; i++) {
    cubed += cubeAndSum1[i]
}
console.log(cubeAndSum1)

//same for 
//const cubeAndSum2 = [0,5,10]
let cubed2 = 0

for(let i = 0; 1 < cubeAndSum2.length; i++) {
    cubed2 += cubeAndSum2[i]
}
console.log(cubeAndSum2)

//relating it back to the describe statement?
//numbersCubed
// I'm thinking it would be something like,
// const numbersCubed = cubeAndSum1 ?
// const numbersCubed = cubeAndSum2 ? 
// My terminal stopped working, I cannot run any tests


//(I've attached a practice.js file that explains my logic more.) Sometimes the tests running confuses me and I have to work out of a separate file.