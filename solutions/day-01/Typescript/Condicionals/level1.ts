// 1 Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

//Enter your age: 30
//You are old enough to drive.
//Enter your age:15
//You are left with 3 years to drive.

let userAgeString: string | null = prompt("Enter your age:");
if (userAgeString !== null) {
  let userAge: number = parseInt(userAgeString);

  if (userAge >= 18) {
    console.log('You are old enough to drive.');
  } else {
    let yearsToDrive: number = 18 - userAge;
    console.log(`You are left with ${yearsToDrive} years to drive.`);
  }
}


// 2 Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

//Enter your age: 30
//You are 5 years older than me.

let yourAgeString: string | null = prompt("Enter your age:");
if (yourAgeString !== null) {
  let yourAge: number = parseInt(yourAgeString);
  let myAge: number = 30; // Defina sua idade aqui

  if (myAge > yourAge) {
    let ageDifference: number = myAge - yourAge;
    console.log(`You are ${ageDifference} years younger than me.`);
  } else if (myAge < yourAge) {
    let ageDifference: number = yourAge - myAge;
    console.log(`You are ${ageDifference} years older than me.`);
  } else {
    console.log('We are of the same age.');
  }
}


// 3 If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways

//using if else
//ternary operator.
//let a = 4
//let b = 3
//  4 is greater than 3

let a: number = 4;
let b: number = 3;

if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} is less than ${b}`);
}

let a1: number = 4;
let b1: number = 3;
let result1: string = (a1 > b1) ? `${a1} is greater than ${b1}` : `${a1} is less than ${b1}`;
console.log(result1);


// 4 Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

//Enter a number: 2
//2 is an even number
//Enter a number: 9
//9 is is an odd number.

let numString: string | null = prompt("Enter a number:");
if (numString !== null) {
  let num: number = parseInt(numString);

  if (num % 2 === 0) {
    console.log(`${num} is an even number.`);
  } else {
    console.log(`${num} is an odd number.`);
  }
}
