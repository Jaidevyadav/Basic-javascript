var person = {
  firstname: "jaidev",
  lastname: "yadav",
  age: 32,
  job: false,
  home: "phagwara",
  language: 4,
};

console.log(person);
person.firstname = "manoj"; //dot method to change single value.
person["age"] = 23; //bracket method to change single property.
console.log(person.home); //to print single value.

console.table(person);

var mobile = {
  company: "MI",
  modelno: "redmi note 11",
  camera: "24 megapixel",
  screen_size: "15 cm * 6.5 cm",
  Ram: "4 GB",
  storage: "32 GB",
};
console.table(mobile);
