import { dataCountriesList } from "./dataCountries";


// 1 - The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]  - Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use abs() method
const ages: number[] = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Ordenar o array e encontrar a idade mínima e máxima
const sortedAges: number[] = ages.slice().sort((a, b) => a - b);
const minAge: number = sortedAges[0];
const maxAge: number = sortedAges[sortedAges.length - 1];

// Encontrar a idade mediana
let medianAge: number;
const middleIndex: number = Math.floor(sortedAges.length / 2);
if (sortedAges.length % 2 === 0) {
  medianAge = (sortedAges[middleIndex - 1] + sortedAges[middleIndex]) / 2;
} else {
  medianAge = sortedAges[middleIndex];
}

// Calcular a idade média
const sumAges: number = sortedAges.reduce((total, age) => total + age, 0);
const averageAge: number = sumAges / sortedAges.length;

// Encontrar a faixa de idades
const rangeOfAges: number = maxAge - minAge;

// Comparar (min - média) e (max - média) usando abs()
const diffMinAverage: number = Math.abs(minAge - averageAge);
const diffMaxAverage: number = Math.abs(maxAge - averageAge);

console.log('Idade mínima:', minAge);
console.log('Idade máxima:', maxAge);
console.log('Idade mediana:', medianAge);
console.log('Idade média:', averageAge);
console.log('Faixa de idades:', rangeOfAges);
console.log('Diferença entre idade mínima e média:', diffMinAverage);
console.log('Diferença entre idade máxima e média:', diffMaxAverage);


// 1.Slice the first ten countries from the dataCountries.ts

const firstTenCountries: string[] = dataCountriesList.slice(0, 10);
console.log(firstTenCountries);

// 2 - Find the middle country(ies) in the dataCountries.ts
// Encontrar o índice do país do meio (ou dos países do meio)
const middleIndexCountrie: number = Math.floor(dataCountriesList.length / 2);

if (dataCountriesList.length % 2 === 0) {
  // Se o número de países for par, há dois países do meio
  const middleCountries: string[] = [
    dataCountriesList[middleIndexCountrie - 1],
    dataCountriesList[middleIndexCountrie]
  ];
  console.log('Países do meio:', middleCountries);
} else {
  // Se o número de países for ímpar, há um país do meio
  console.log('País do meio:', dataCountriesList[middleIndexCountrie]);
}

// 3 - Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

// Verificar se o número de países é par ou ímpar
if (dataCountriesList.length % 2 === 0) {
  // Se o número de países for par, dividir o array em duas partes iguais
  const halfLength: number = dataCountriesList.length / 2;
  const firstHalf: string[] = dataCountriesList.slice(0, halfLength);
  const secondHalf: string[] = dataCountriesList.slice(halfLength);

  console.log('Primeira metade:', firstHalf);
  console.log('Segunda metade:', secondHalf);
} else {
  // Se o número de países for ímpar, adicionar um país extra para a primeira metade
  const halfLength: number = Math.ceil(dataCountriesList.length / 2);
  const firstHalf: string[] = dataCountriesList.slice(0, halfLength);
  const secondHalf: string[] = dataCountriesList.slice(halfLength);

  console.log('Primeira metade:', firstHalf);
  console.log('Segunda metade:', secondHalf);
}
