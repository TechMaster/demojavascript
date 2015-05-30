"use strict";
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
    toString() {
        return super.toString() + ' in ' + this.color;
    }
}

class ThreeDPoint extends ColorPoint {
    constructor(x, y, z, color) {
        super(x, y, color);
        this.z = z;
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ', ' + this.z + ')' + ' in ' + this.color;
    }
}

let cp = new ColorPoint(25, 8, 'green');
console.log(cp.toString()); // '(25, 8) in green'

let threepoint = new ThreeDPoint(10, 10, 25, 'red');

console.log(threepoint.toString());
console.log(cp instanceof ColorPoint); // true
console.log(cp instanceof Point); // true