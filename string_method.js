/**
 * Created by techmaster on 5/16/15.
 */
var quotes = "Darkness cannot drive out darkness; " +
    "only light can do that. " +
    "Hate cannot drive out hate; " +
    "only love can do that.";
console.log(quotes);
var firstPost = quotes.indexOf("only");
var lastPos = quotes.lastIndexOf("only");
console.log("first pos = ", firstPost, ". last post = ", lastPos);

//Tại sao không vào đây xem hết các ví dụ?
//http://www.w3schools.com/js/js_string_methods.asp

var drivePos = quotes.search("ca..ot");  //search -> regular expression
console.log(drivePos);