/** 
 * Crear algoritmo que devuelva cantidad
 * de números positivos de un array
 */

let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(arr) {
    let positivos = 0;

    for (numero of arr) {
        if (numero > 0) {
            positivos++;
        }
    }
    return positivos;
}

let positivos = cuantosPositivos(array);
console.log(positivos);