//---------arrow function--------//
//When we use parenthesis method, return keyword is necessary inside parenthesis for arrowfn to work.

var isEven = (number) => {
  if (number % 2 == 0) {
    return true;
  }
  return false;
  return number % 2 == 0;
};
console.log(isEven(2));

//---we can compre array with varablish function.
var result = [2, 4, 6].every(isEven); //--we can call back function here
console.log(result);

//---we can write whole function inside callback
var result = [2, 4, 6].every((e) => {
  return e % 2 == 0;
});
console.log(result);

var result = [2, 3, 6, 8].every((e) => e % 2 == 0);
console.log(result);
