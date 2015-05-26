var a = 1,
    b = { foo: 'bar' },
    a_ = a,
    b_ = b;

//Params are copied by value
function makeChange(_a, _b) {
    _a = 2;
    console.log(_a);
    //arguments[1] = { foo: 'Fun qua' };
    _b.foo = 'Fun qua';
}
makeChange(a, b);

console.log(a === a_); //=> true
console.log(b === b_); //=> true
console.log(b);

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