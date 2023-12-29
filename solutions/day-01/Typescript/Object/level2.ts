
const users: { [key: string]: { 
                    email: string, 
                    skills: string[], 
                    age: number, 
                    isLoggedIn: boolean, 
                    points: number 
                } 
} = {

    
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

// Find the person who has many skills in the users object.
// Encontrar a pessoa com mais habilidades
let maxSkills = 0;
let skilledPerson = '';

for (const user in users) {
    if (Object.prototype.hasOwnProperty.call(users, user)) {
        if (users[user].skills.length > maxSkills) {
            maxSkills = users[user].skills.length;
            skilledPerson = user;
        }
    }
}

console.log(`A pessoa com mais habilidades é ${skilledPerson} com ${maxSkills} habilidades.`);


// Count logged in users,count users having greater than equal to 50 points from the following object.
// Contar usuários logados e usuários com 50 pontos ou mais
let loggedInCount = 0;
let highPointsCount = 0;

for (const user in users) {
    if (Object.prototype.hasOwnProperty.call(users, user)) {
        if (users[user].isLoggedIn) {
            loggedInCount++;
        }
        if (users[user].points >= 50) {
            highPointsCount++;
        }
    }
}

console.log(`Número de usuários logados: ${loggedInCount}`);
console.log(`Número de usuários com 50 pontos ou mais: ${highPointsCount}`);


// Find people who are MERN stack developer from the users object
// Encontrar pessoas que são desenvolvedoras MERN
const mernDevelopers: string[] = [];

for (const user in users) {
    if (
        users[user].skills.includes('MongoDB') &&
        users[user].skills.includes('Express') &&
        users[user].skills.includes('React') &&
        users[user].skills.includes('Node')
    ) {
        mernDevelopers.push(user);
    }
}

console.log(`Desenvolvedores MERN: ${mernDevelopers.join(', ')}`);


// Set your name in the users object without modifying the original users object
// Adicionar seu nome ao objeto de usuários sem modificar o original
const yourNameDetails = {
    email: 'seuemail@example.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
    age: 25,
    isLoggedIn: true,
    points: 60
};

const updatedUsers: { [key: string]: { email: string, skills: string[], age: number, isLoggedIn: boolean, points: number } } = {
    ...users,
    EdCarlos: yourNameDetails
};

console.log(updatedUsers);

// Get all keys or properties of users object
// Obter todas as chaves ou propriedades do objeto de usuários
const keys: string[] = Object.keys(users);
console.log(keys);

// Get all the values of users object
// Obter todos os valores do objeto de usuários
const values: { email: string, skills: string[], age: number, isLoggedIn: boolean, points: number }[] = Object.values(users);
console.log(values);

// Use the countries object to print a country name, capital, populations and languages.
