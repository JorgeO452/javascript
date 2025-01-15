function cualEsMayor(a, b) {
  // Escribe una función que reciba dos números y retorne el mayor de ellos
  // Si ambos números son iguales, retornar cualquiera de ellos
  // Tu código:
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

function cualEsMayor2(a, b) {
   return (a > b) ? a : b; //Operador ternario
}

let mayor = cualEsMayor(5, 3);
let mayor2 = cualEsMayor2(5, 3);
console.log(mayor);
console.log(mayor2);