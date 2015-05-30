/**
 * Created by techmaster on 5/30/15.
 */
var book = {name: "Java CookBook", author: "Cuong"};
function Robot(type) {   //-->Constructor function
    this.type = type;
}

var flyRobot = new Robot('fly');
var diveRobot = new Robot('dive');
console.log(Robot.prototype);

Robot.prototype.speak = function (text) {
    console.log(this.type + "Robot says '" + text + "'");
};
console.log(Robot.prototype);

function add(a, b) {
    "use strict";
    return a + b;
}

console.log(add.prototype);

add.prototype.say = function() {
    "use strict";
    console.log('Cool');
};
console.log(add.prototype);
var addobj = new add(10, 10);
addobj.say();
//console.log(addobj(10, 20));


