function suma(a, b) {
    console.log(arguments);
return a + b;
}

let resultado = suma(2, 3, 6, 3, 7);
console.log(resultado);
console.log(typeof suma);