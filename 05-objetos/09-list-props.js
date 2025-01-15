const punto = {
  x: 1,
  y: 2,
  dibujar() {
    console.log("Dibujando..");
  },
};

// delete punto.dibujar;
if ("dibujar" in punto) {
  punto.dibujar();
}
// let keys = Object.keys(punto);
console.log(Object.keys(punto)); //Cuando un constructor tiene metodos, a estos se le llaman Metodo de clase o metodo estatico 

for (let llave of Object.keys(punto)) {
  console.log(llave, punto[llave]); //Cuando un constructor tiene metodos, a estos se le llaman Metodo de clase o metodo estatico
}

for (let entry of Object.entries(punto)) {
  console.log(entry);
}

for (let llave in punto) {
  console.log(llave, punto[llave]);
}