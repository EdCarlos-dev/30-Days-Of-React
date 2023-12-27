// Declare an empty array
const emptyArray: any[] = [];

// Declare an array with more than 5 elements
const arrayWithNumbers: number[] = [1, 2, 3, 4, 5, 6, 7];

// Find the length of the array
const arrayLength: number = arrayWithNumbers.length;

// Get the first, middle, and last items of the array
const firstItem: number = arrayWithNumbers[0];
const middleItem: number = arrayWithNumbers[Math.floor(arrayLength / 2)];
const lastItem: number = arrayWithNumbers[arrayLength - 1];

// Declare an array with mixed data types
const mixedDataTypes: (number | string | boolean)[] = [1, 'Hello', true, 'World', false, 5, 'TypeScript'];

// Find the length of the mixedDataTypes array
const mixedArrayLength: number = mixedDataTypes.length;

// Declare an array of IT companies
const itCompanies: string[] = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// Print the array using console.log()
console.log(itCompanies);

// Print the number of companies in the array
console.log(`Number of companies: ${itCompanies.length}`);

// Print the first, middle, and last companies
console.log(`First company: ${itCompanies[0]}`);
console.log(`Middle company: ${itCompanies[Math.floor(itCompanies.length / 2)]}`);
console.log(`Last company: ${itCompanies[itCompanies.length - 1]}`);

// Print out each company
itCompanies.forEach(company => console.log(company));

// Change each company name to uppercase one by one and print them out
const uppercaseCompanies: string[] = itCompanies.map(company => company.toUpperCase());
console.log(uppercaseCompanies);

// Print the array as a sentence
const companiesSentence: string = itCompanies.join(', ') + ' are big IT companies.';
console.log(companiesSentence);

// Check if a certain company exists in the itCompanies array
const companyToCheck: string = 'Google';
const companyExists: string = itCompanies.includes(companyToCheck)
  ? companyToCheck
  : 'Company is not found';
console.log(companyExists);

// Filter out companies with more than one 'o'
const filteredCompanies: string[] = itCompanies.filter(company => {
  const oCount = company.toLowerCase().split('o').length - 1;
  return oCount <= 1;
});
console.log(filteredCompanies);

// Sort the array using sort() method
const sortedCompanies: string[] = itCompanies.slice().sort();
console.log(sortedCompanies);

// Reverse the array using reverse() method
const reversedCompanies: string[] = itCompanies.slice().reverse();
console.log(reversedCompanies);

// Slice out the first 3 companies from the array
const firstThreeCompanies: string[] = itCompanies.slice(0, 3);
console.log(firstThreeCompanies);

// Slice out the last 3 companies from the array
const lastThreeCompanies: string[] = itCompanies.slice(-3);
console.log(lastThreeCompanies);

// Slice out the middle IT company or companies from the array
const middleCompanyIndex: number = Math.floor(itCompanies.length / 2);
const middleCompany: string[] = itCompanies.splice(middleCompanyIndex, 1);
console.log(middleCompany);

// Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);

// Remove the middle IT company or companies from the array
const middleIndex: number = Math.floor(itCompanies.length / 2);
const itemsToRemove: number = 1; // Number of items to remove
itCompanies.splice(middleIndex, itemsToRemove);
console.log(itCompanies);

// Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);

// Remove all IT companies
itCompanies.length = 0;
console.log(itCompanies);
