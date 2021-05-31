//------------------differet methods applied on array------------>
//1.----------fill-------->
var jai = [1, 3, 5, 2, 6, 6];
//2 here tells to start filling array with given value from position 2 and end at position 3.
console.log(jai.fill("lol", 2, 3));

//2.--------------filter----------->
var number = [23, 45, 132, 12, 11, 76];
//var result = number.filter((num) => num != 45);
//var result = number.filter((num) => num % 2 != 0);  //it will check for odd
var result = number.filter((dik) => dik % 3 != 0);
console.log(result);

let Mouse = ["logitech", "Hp", "Razor", "Dell", "MI"];
var nonMouse = Mouse.filter((word) => word.length <= 5);
console.log(nonMouse);

//3.------------slice-------->
let companies = ["logitech", "Hp", "Razor", "Dell", "MI"];
console.log(companies.slice(2, 4));
// var cutCompanies = companies.slice(1, 3);
// console.log(cutCompanies);

//4.------------splice-------->
var user = ["jai", "mai", "tai", "lai", "thoi", "hui"];
user.splice(1, 3, "jai");
console.log(user);
