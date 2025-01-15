function Usuario(nombre) {
    this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario;
let user = new U('John');
console.log(user);

function of(Fn, arg) {
    return new Fn(arg);
}

let user1 = of(Usuario, 'John 1');
console.log(user1);

function returned() {
    return function () {
        console.log('Soy una funcion');
    }
}

let saludo = returned();
saludo();