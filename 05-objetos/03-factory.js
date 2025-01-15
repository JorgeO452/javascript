// let user = {
//   id: 1,
//   email: "test@test.com",
//   name: "John",
//   activo: true,
//   recuperarClave: function () {
//     console.log("Recuperando clave...");
//   },
// };

// let user1 = {
//   id: 2,
//   email: "pepe@test.com",
//   name: "Pepe",
//   activo: true,
//   recuperarClave: function () {
//     console.log("Recuperando clave...");
//   },
// };

function crearUsario(name, email) {
    return {
        email,  // email: email
        name,   // name: name
        activo: true,
        recuperarClave: function () {
            console.log("Recuperando clave...");
        },
    };
}

let user1 = crearUsario('John', 'test@test.com');
let user2 = crearUsario('Pepe', 'pepe@test.com');

console.log(user1, user2);