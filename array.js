/**
 * Created by techmaster on 5/15/15.
 */
var cars = ["Saab", "Volvo", "BMW"];
for (var i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
console.log(cars.valueOf());
console.log(cars.join(" * "));
cars.push("Honda");
cars.push("Yamaha");
console.log(cars.valueOf());
cars.pop();
console.log(cars.valueOf());
while (cars.length > 0) {
    cars.pop();
    console.log(cars.valueOf());
}

fruits = ["Orange", "Strawberry", "Banana", "Lemon", "Pine", "Apple"];
while (fruits.length > 0) {
    fruits.shift();
    console.log(fruits.valueOf());
}