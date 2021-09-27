// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence. 

// a) Create a test with expect statements for each of the variables provided.

// describe('favProblem', () => {
//     it('takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence', () => {
//         expect(favProblem(6).toEqual([1, 1, 2, 3, 5, 8])
//     })
// })

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]



// b) Create the function that makes the test pass.
                    //PSUEDO
//create function with a number argument
//create empty array and iterate with stating inedx 2
//push empty array into iterater and return.

const favProblem = (nums) => { 
    let fav = [0, 1];
    let problem = [];
    for(let i = 2; i <= nums; i++) {
      fav[i] = fav[i - 1] + fav[i - 2]; 
      problem.push(fav[i]);
    }
    
    return problem;
  }
console.log(favProblem(6))
console.log(favProblem(10))

//this is obviously not my facorite problem.

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

// describe ('oddsLG',() => {
//     it('takes in an array and returns a new array of only odd numbers sorted from least to greatest.', () => {
//         expect(oddsLG(fixFullArr1)).toequal([-9, 7, 9, 199]),
//         expect(oddsLG(fixFullArr2)).toequal([-823, 6, 7, 23, 78 ])
//     })
// })

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.
                    //PSUEDO
// create variables to filter the numbers and odds
//create a function that will but each number from least to greatest
//return array

let fixFullArr1 = fullArr1.filter(value =>{
    return typeof value === "number"
    })
let fixFullArr2 = fullArr2.filter(value =>{
        return typeof value === "number"
        })
let finalArray = fixFullArr1.filter( value => {
    return value %2 !== 0
})
let finalArray2 = fixFullArr2.filter( value => {
    return value %2 !== 0
})
    const oddsLG = (array) => {
      let num = 0;
      for (var i = 0; i < array.length; i++) {
        for (var j = i; j < array.length; j++) {
          if (array[j] < array[i]) {
            num = array[j];
            array[j] = array[i];
            array[i] = num;
          }
        }
      }
      return array;
    }
    console.log(oddsLG(finalArray))
    console.log(oddsLG(finalArray2))

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
// describe ('numAdder',() => {
//     it('takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.', () => {
//         expect(numAdder(numbersToAdd1)).toequal([2, 6, 51, 60]),
//         expect(numAdder(numbersToAdd2)).toequal([0, 7, -1, 11]),
//         expect(numAdder(numAdder)).toequal([])
//     })
// })

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []



// b) Create the function that makes the test pass.

// let newNums = numbersToAdd1.filter(value => {
//     return value !== 0
//     })
//     let newNums2 = numbersToAdd2.filter(value => {
//         return value !== 0
//         })
//         let newNums3 = numbersToAdd3.filter(value => {
//             return value !== 0
//             })
    const numAdder = (sum => value => sum += value)(0);
    
    console.log(numbersToAdd1.map(numAdder));
    console.log(numbersToAdd2.map(numAdder));
    console.log(numbersToAdd3.map(numAdder));
    
    //this problem i had a hard time figuring out how "(sum => value => sum += value)(0)" works
    //I will be able to research this during the week. It was a very busy weekend.