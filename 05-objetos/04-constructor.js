// { id; 1, recuperarClave: function(){}}

function Usuario(id, email, name) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.activo = true;
    this.recuperarClave = function () { //Metodos
        console.log("Recuperando clave...");
    };
}

let usuario = new Usuario(1, 'test@test.com', 'John');
console.log(usuario);