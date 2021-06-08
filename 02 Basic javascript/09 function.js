//regular functions
function firstName(name) {
  console.log("Hello World");
  console.log(`Hello world, nice to meet you mr ${name}`);
}
//function call
firstName("jai");

function secondName() {
  return "Hello world";
}

//this will only return value but not print it.
secondName("jai");

// to print a value we pass that function call to a variable and then console log it.
var newName = secondName();
console.log(newName);
