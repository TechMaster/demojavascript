/**
 * Created by techmaster on 5/16/15.
 */
/*
JavaScript có 3 loại dữ liệu
 */
//Number
"use strict";
var age = 10;
const pi = 3.14;
console.log(typeof pi);

//Boolean
var nodejs_slow = false;
var iojs_fast = true;

if (nodejs_slow) { //enclose expression in (...)
    console.log("Node.js is slow");
} else {
    console.log("Node.js is fast");
}

if (!nodejs_slow){ //! invert boolean
    console.log("Node.js is not slow");
}

if (!nodejs_slow && iojs_fast) {  //&& AND boolean vs || OR boolean operator
    console.log("Both Node.js and iojs are fast");
}

//String
var best_film = "Gone with the Wind";
var best_hero = 'Bat man';
var best_player = 'Bjork\'ka';  // \' is called escaped character
console.log(best_player);
var my_folder = "/Volumes/MacBackup/DATA/";
console.log(my_folder);