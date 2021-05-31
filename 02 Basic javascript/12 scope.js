var name = "jai";

console.log("Line no 3 says my name is " + name); //it has global scope

function sayName() {
  var name = "Dev"; //if inside variable is not defined, it will call global scope.
  console.log("At line no 7 my name is " + name);

  function notName(name) {
    //var name = "Yadav";
    console.log("At line no 11 my name is ", name); //first it will check inside parenthesis.
  }
  notName("lol");
}
sayName();
