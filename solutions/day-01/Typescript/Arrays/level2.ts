// 1 - Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file

// 2 - First remove all the punctuations and change the string to array and count the number of words in the array
let text: string =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

// Removendo os caracteres especiais e dividindo o texto em palavras
const words: string[] = text
  .replace(/[.,]/g, '') // Removendo pontuações como '.' e ','
  .split(' '); // Dividindo o texto em palavras usando o espaço como delimitador

console.log(words);
console.log(words.length);

// 3 - In the following shopping cart add, remove, edit items

// -- add 'Meat' in the beginning of your shopping cart if it has not been already added
// -- add Sugar at the end of you shopping cart if it has not been already added
// -- remove 'Honey' if you are allergic to honey
// -- modify Tea to 'Green Tea'

let shoppingCart: string[] = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Adicionar 'Meat' no início do carrinho, se ainda não foi adicionado
if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}

// Adicionar 'Sugar' no final do carrinho, se ainda não foi adicionado
if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}

// Verificar alergia a 'Honey' e remover se necessário
const allergicToHoney = true; // Troque para 'false' se não for alérgico
if (allergicToHoney) {
  shoppingCart = shoppingCart.filter(item => item !== 'Honey');
}

// Modificar 'Tea' para 'Green Tea', se 'Tea' estiver presente no carrinho
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
  shoppingCart[teaIndex] = 'Green Tea';
}

console.log(shoppingCart);


// 4 - In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
const countries: string[] = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ];
  
  // Verificar se 'Ethiopia' existe no array de países
  if (countries.includes('Ethiopia')) {
    console.log('ETHIOPIA');
  } else {
    // Se 'Ethiopia' não estiver presente, adicioná-lo à lista de países
    countries.push('Ethiopia');
  }
  
  console.log(countries);
  


// 5 - In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const webTechs: string[] = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ];
  
  // Verificar se 'Sass' existe no array 'webTechs'
  if (webTechs.includes('Sass')) {
    console.log('Sass is a CSS preprocess');
  } else {
    // Se 'Sass' não estiver presente, adicioná-lo à lista 'webTechs'
    webTechs.push('Sass');
    console.log(webTechs);
  }
  
// 6 - Concatenate the following two variables and store it in a fullStack variable.
const frontEnd: string[] = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd: string[] = ['Node', 'Express', 'MongoDB'];

// Concatenar os arrays frontEnd e backEnd em um novo array chamado fullStack
const fullStack: string[] = frontEnd.concat(backEnd);

console.log(fullStack);
