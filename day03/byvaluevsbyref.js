var a = 1,
    b = { foo: 'bar' },
    a_ = a,
    b_ = b;

//Params are copied by value
function makeChange(_a, _b) {
    _a = 2;
    console.log(_a);
    arguments[1] = { foo: 'baz' };
}
makeChange(a, b);

console.log(a === a_); //=> true
console.log(b === b_); //=> true