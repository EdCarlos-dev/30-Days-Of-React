// 1- Declare an empty array;
// syntax
const const_arr = Array()
// or
let let_arr = new Array()

console.log(const_arr) 
console.log(let_arr)
// []


// 2- Declare an array with more than 5 number of elements

const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon', 'apple', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot', 'xpto'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

console.log('Numbers:', numbers)
console.log('Fruits:', fruits)
console.log('Vegetables:', vegetables)
console.log('Animal products:', animalProducts)
console.log('Web technologies:', webTechs)
console.log('Countries:', countries)


// 3- Find the length of your array

console.log('Number of numbers:', numbers.length)
console.log('Number of fruits:', fruits.length)
console.log('Number of vegetables:', vegetables.length)
console.log('Number of animal products:', animalProducts.length)
console.log('Number of web technologies:', webTechs.length)
console.log('Number of countries:', countries.length)

// 4- Get the first item, the middle item and the last item of the array
console.log('first number', numbers[0])
console.log('middle number', numbers[numbers.length/2])
console.log('last number', numbers[numbers.length - 1])

// 5- Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] },
  ] // arr containing different data types

console.log(mixedDataTypes)

// 6- Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle', 
    'Amazon'
]

// 7- Print the array using console.log()

console.log(itCompanies)

// 8- Print the number of companies in the array

console.log(itCompanies.length)

// 9- Print the first company, middle and last company
console.log('first',itCompanies[0])
console.log('middle',itCompanies[(itCompanies.length -1 )/2])
console.log('last',itCompanies[itCompanies.length -1])

// 10- Print out each company
// without first, last and middle
const eachComp = itCompanies.filter(item => (item !== itCompanies[0] && item !== itCompanies[itCompanies.length -1] && item !== itCompanies[(itCompanies.length -1 )/2] ) )
console.log(eachComp)

// 11- Change each company name to uppercase one by one and print them out
const uppercaseComp = itCompanies.map(element => {
    return element.toUpperCase();
  });

console.log(uppercaseComp)

// 12 - Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const sentenceComp  = 'The '+ itCompanies +' are big IT companies.'
console.log(sentenceComp)

// 13 - Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let indexCompany = itCompanies.indexOf('Tesla')
indexCompany != -1
  ? console.log('This comp does exist in the array')
  : console.log('This comp does not exist in the array')

// 14 - Filter out companies which have more than one 'o' without the filter method
const withOComp = itCompanies.filter(item => (item.includes('o') === true ))
console.log(withOComp)
// console.log(itCompanies.includes('o'))

// 15 - Sort the array using sort() method
const itCompaniesSort = itCompanies.sort()
console.log(itCompaniesSort)

// 16 - Reverse the array using reverse() method
const itCompaniesReverse = itCompanies.sort()
console.log(itCompaniesReverse)

// 17 - Slice out the first 3 companies from the array
const itCompaniesSlice = itCompanies.slice(0, 3)
console.log(itCompanies)
console.log(itCompaniesSlice)

// 18 - Slice out the last 3 companies from the array
const itCompaniesSliceLast = itCompanies.slice(itCompanies.length -3, itCompanies.length)
console.log(itCompanies)
console.log(itCompaniesSliceLast)

// 19 - Slice out the middle IT company or companies from the array
const itCompaniesSliceMiddle = itCompanies.slice(3, 4)
console.log(itCompanies)
console.log(itCompaniesSliceMiddle)

// 20 - Remove the first IT company from the array
const itCompaniesRemoveFirst = itCompanies.shift()
console.log(itCompaniesRemoveFirst)

// 21 - Remove the middle IT company or companies from the array


// 22 - Remove the last IT company from the array
const itCompaniesRemoveLast = itCompanies.pop()
console.log(itCompaniesRemoveLast)

// 23 - Remove all IT companies
const itCompaniesRemoveAll = itCompanies.splice(0, itCompanies.length)
console.log(itCompaniesRemoveAll)
