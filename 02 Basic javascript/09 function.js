function firstName(name) {
  console.log("Hello World");
  console.log(`Hello world, nice to meet you mr ${name}`);
}

//firstName("jai");

function firstName() {
  return "Hello world";
}

//firstName("jai");  this will only return value but not print it.

var newName = firstName(); //here we are passing the return value to a variable and then print it.
console.log(newName);
