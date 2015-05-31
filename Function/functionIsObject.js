//Declare a function as usual
function add (a, b) {
    return a + b;
}
console.log(add(10, 11));
//Assign function to other variable
var cong = add;
console.log(cong(10, 11));

//define a function to a variable
var square = function (x) {
  return x * x;
};

//A function can have a property point other function
add.description = function() {
    console.log("Add two numbers");
};

add.description();
console.log(add.description);

//add  --> description --> help
add.description.help = function() {
    console.log("input 2 numbers");
};
add.description.help();

//Function return function
function arithmetic(operatorString) {
    switch (operatorString) {
        case '+':
            return function(a, b) {
                return a + b;
            };
        case '-':
            return function(a, b) {
                return a - b;
            };
        case '*':
            return function(a, b) {
                return a * b;
            };
        case '/':
            return function(a, b) {
                return a / b;
            };
    }
}

var x = arithmetic("-")(20, 10);
console.log(x);


var y = arithmetic("*")(20, 10);
console.log(y);

var z = arithmetic("/")(20, 10);
console.log(z);

//Functions nested inside a function
function makeACupOfCoffee() {
    function boilWater(temperature) {
        console.log('Boil water at ', temperature);
    }
    function mixCoffeeWithMilkAndSugar() {
        console.log('Mix coffee with milk and sugar');
    }
    boilWater(100);
    mixCoffeeWithMilkAndSugar();
}
makeACupOfCoffee();

//Execute function right after defining it
//Closure: inner function can access to local variable of outer function
var numberObj = function(val) {
    var value = parseFloat(val);

    return { //return a object that have two properties: absolute and square
        absolute: function() {
            return value > 0 ? value : -value;
        },
        square: function(){
            return value * value;
        }
    };
}(-10); //Look at (-10);
console.log(numberObj.absolute(), numberObj.square());

//Handling Exception
var addSafe = function(a, b) {
    if (typeof a !== 'number' || typeof  b !== 'number'){
        throw {
            name: 'TypeError',
            message: 'addSafe requires number parameters'
        };
    }
    return a + b;
};

addSafe(1, 'abc');

//Call back function
//Front end
//Node.js