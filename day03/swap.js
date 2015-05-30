function swap(a, b) {
    var tmp = a;
    a = b;
    b = tmp; //assign tmp to b
}

var x = 1, y = 2;
swap(x, y);

console.log("x is " + x + " y is " + y); // "x is 1 y is 2"


function swap2(object) {
    var tmp = object.a;
    object.a = object.b;
    object.b = tmp; //assign tmp to b
}
var obj = {a: 1, b: 2};
swap2(obj);
console.log('after swap : ', obj);

function swap3(object, a, b) {
    var tmp = object[a];
    object[a] = object[b];
    object[b] = tmp; //assign tmp to b
}
var obj2 = {a: 1, b: 2};
swap3(obj2, 'a', 'b');
console.log('after swap : ', obj);