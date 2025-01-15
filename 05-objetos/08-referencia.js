let a = 1;
let b = a;
b++;
console.log(a, b);
//
let c = {};
let d = c;
b.prop = 1;
console.log(c, d);
//
let e = 1;
function suma(n) {
    n++;
}
suma(e);
console.log(e);
//
let f = { prop: 1 };
function suma2(obj) {
    obj.prop++;
}
suma2(f);
console.log(f);