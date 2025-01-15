const user = {id: 1};
user.name = 'John';
user.guardar = function () {
    console.log('Guardando usuario...', user.name);
}

user.guardar();

delete user.name;
delete user.guardar;
console.log(user);

const user1 = Object.freeze({ id: 1});
user1.name = 'John';
user1.id = 2;
console.log(user1);

const user2 = Object.seal({ id: 1 });
user2.name = "John";
user2.id = 2;
console.log(user2);