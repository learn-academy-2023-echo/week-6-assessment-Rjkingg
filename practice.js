

// describe("numbersCubed", () => {
//     it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
//       const cubeAndSum1 = [2, 3, 4]
//       const cubeAndSum2 = [0, 5, 10]
//       expect(numbersCubed(cubeAndSum1)).toEqual(99)
//       expect(numbersCubed(cubeAndSum2)).toEqual(1125)
//     })
//   })
  
  
  //const cubeAndSum1 = [2, 3, 4]
  // Expected output: 99
  //const cubeAndSum2 = [0, 5, 10]
  // Expected output: 1125
  
  // b) Create the function that makes the test pass.
  
  // Pseudo code:
//   Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// declare a function
//pass in the arrays
//use a for loop to access each number in the array and go over the entire length of the array , incrementing by one.
//setting a a variable to 0, so that the counting starts from the  0 index
//const numbersCubed = <--- not sure how to make the relation to the constants const cubeAndSum1 = [2, 3, 4], //const cubeAndSum2 = [0, 5, 10]
//now if I were to just do it without trying to relate it back to the test case, it would be 
const cubeAndSum1 = [2, 3, 4]
let cubed = 0

for(let i = 0; 1 < cubeAndSum1.length; i++) {
    cubed += cubeAndSum1[i]
}
console.log(cubeAndSum1)

//same for 
const cubeAndSum2 = [0,5,10]
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