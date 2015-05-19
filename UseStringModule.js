/**
 * Created by techmaster on 5/19/15.
 */
var S = require('string');
var doesIt = S('my cool string').left(4).endsWith('c');
console.log(doesIt);

console.log(S('minh cuong').camelize().s);
console.log(S('jon').capitalize().s);
console.log("jon".toUpperCase());
