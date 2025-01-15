let user = {
    id: 1,
    name: 'John',
    age: 25,
};

for (let prop in user) {
    console.log(prop, user[prop]);
};

let animales = ['perro', 'gato', 'loro', 'pez', 'serpiente'];
for (let indice in animales) {
    console.log(indice, animales[indice]);
}