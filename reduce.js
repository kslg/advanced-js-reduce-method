  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
  // Reducing an array of numbers to  a single value, their total sum:
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
  // make sure to always specify the initial value you want to use for the accumulator. 
let totalExp = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExp)

// Grouping by a property, and totaling it too

let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {});
console.log(experienceByProfession);

// So at this point in the function, the accumulator  is an empty object and curr is the first team  
// member in the array. So, if I want to create a  property in my object for Developer, I need to get  
// curr.profession. I’ll call this variable key. Now, I need to check whether the key already exists in  
// the object we’re going to be accumulating into.  If it doesn’t yet exist, I’ll set it equal to  
// curr.yrsExperience. This means the first time  we see a new profession, that property will  
// be added into the accumulator and its value  will be set to the team member’s experience.  
// Otherwise, if the key does already exist, it’s as  simple as adding the current member’s experience  
// to the already existing value. When I’m done, all  I’ve got to do is return the accumulator.
