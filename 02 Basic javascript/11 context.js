//example of global context
sayhello();

function sayhello() {
  console.log("hello world");
}

var myName = "jai";
if (myName == window.myName) {
  console.log("ok bitch");
}

//function are scanned and made available everywhere.
payment("10");

function payment(a) {
  var bill = parseInt(a);
  console.log(bill + 5);
}

//Variablish funtion
var tipper = function (a) {
  var bill = parseInt(a);
  console.log(bill + 25);
};

tipper("200");

//code hoisting = when we use variable first and then declare it.
console.log(name);
var name = "jai";
//variable are scanned and made available undefined.

function sayname(a) {
  console.log(a);
}
sayname("lol");
