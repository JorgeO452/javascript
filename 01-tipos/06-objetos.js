let nombre = 'Pepe';
let anime = "Naruto";
let edad = 22;

let personaje = {
    nombre: nombre,
    anime: anime,
    edad: 16,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 17;

let llave = 'edad';
personaje[llave] = 18;

delete personaje.anime;

console.log(personaje);