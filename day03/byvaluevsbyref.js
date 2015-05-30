var a = 1,
    b = { foo: 'bar' },
    c = "Rock start",
    a_ = a,
    b_ = b,
    c_ = c;

//non object type params are passed by value
//object type params are passed by reference
function makeChange(_a, _b, _c) {
    _a = 2;
    //arguments[1] = { foo: 'Fun qua' };
    _b.foo = 'Fun qua';
    _c = "Film Star";
}
makeChange(a, b, c);

console.log(a === a_); //=> true
console.log(b === b_); //=> true
console.log(c === c_); //=> true

console.log('a = ', a, ', b = ', b, ', c =', c);
function swap(a, b) {
    var tmp = a;
    a = b;
    b = tmp; //assign tmp to b
}

function Car()
{
    this.value = 5;
}

function changeCar(obj) {
    obj.value = 100;
}

//var obj = new Car();
var obj = {value : 5};
console.log(obj.value);
changeCar(obj);
console.log(obj.value);