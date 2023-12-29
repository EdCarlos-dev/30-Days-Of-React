
// Create an empty object called dog
// Print the the dog object on the console
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
// Get name, legs, color, age and bark value from the dog object
// Set new properties the dog object: breed, getDogInfo


// Criar um objeto vazio chamado dog
let dog: { [key: string]: any } = {};

// Imprimir o objeto dog no console
console.log(dog);

// Adicionar name, legs, color, age e bark ao objeto dog
dog.name = 'Rex';
dog.legs = 4;
dog.color = 'brown';
dog.age = 3;
dog.bark = function() {
    return 'woof woof';
};

// Obter os valores de name, legs, color, age e bark do objeto dog
console.log(`Name: ${dog.name}`);
console.log(`Legs: ${dog.legs}`);
console.log(`Color: ${dog.color}`);
console.log(`Age: ${dog.age}`);
console.log(`Bark: ${dog.bark()}`);

// Definir novas propriedades no objeto dog: breed e getDogInfo
dog.breed = 'Golden Retriever';
dog.getDogInfo = function() {
    return `Name: ${this.name}, Breed: ${this.breed}, Color: ${this.color}, Age: ${this.age}, Legs: ${this.legs}`;
};

// Testar a nova função getDogInfo
console.log(dog.getDogInfo());
