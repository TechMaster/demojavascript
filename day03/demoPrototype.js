
//More at http://www.w3schools.com/js/js_object_prototypes.asp

function Robot(type) {   //-->Constructor function
    this.type = type;
}

var flyRobot = new Robot('fly');
var diveRobot = new Robot('dive');

console.log(flyRobot.type);

Robot.prototype.speak = function (text) {
    console.log(this.type + "Robot says '" + text + "'");
};

flyRobot.speak('Hello World');
flyRobot.talk = function() {
    console.log('I am talking');
};
flyRobot.talk();

flyRobot.speak = function(text){
  console.log("Redefined speak");
};
flyRobot.speak('Hello World');
/*
console.log(diveRobot.prototype);
console.log(Robot.prototype);


Robot.prototype.batterylevel = 100;

console.log(flyRobot.batterylevel);
console.log(diveRobot.batterylevel);

flyRobot.batterylevel = 50;
console.log(diveRobot.batterylevel);

flyRobot.fly = function() {
  console.log('i am flying');
};

flyRobot.fly();
console.log(flyRobot.toString());
//diveRobot.fly();

function MiniRobot(type, size) {   //-->Constructor function
    this.type = type;
    this.size = size;
}

MiniRobot.prototype = Robot.prototype;
var minRobot = new MiniRobot('small');
console.log(MiniRobot.prototype);
minRobot.speak('hi');
*/