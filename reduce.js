  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
  // The parameters the callback function takes are typically called acc,  for accumulator, and curr for current value.  
let sum = nums.reduce((acc, curr) => acc + curr, 0); // explicitly specifying the initial value of zero.
console.log(sum);

const numsTwo = [0, 1, 2, 3, 4];
let sumTwo = numsTwo.reduce((acc, curr) => {
  console.log(
    "Accumulator:", acc,
    "Current Value:", curr,
    "Total:", acc + curr
  );
    return acc + curr;
  // explicitly specifying the initial value of zero.  
  }, 0);
console.log(sumTwo)




const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property


// Grouping by a property, and totaling it too
