var fruits = [
  "apple",
  "mango",
  "banana",
  "pineapple",
  "pomegrenate",
  "blue berry",
  "orange",
  "grape",
  "lichi",
  "dragonfruit",
  "apricot",
  "plums",
  "pears",
  "watermelon",
  "papaya",
  "peach",
  "kiwi",
  "muskmelon",
];
console.log(fruits);
console.log(fruits[3]);
console.log(fruits.length);

var states = new Array(
  "Punjab",
  "Himachal Pradesh",
  "JK",
  "Mahahrastra",
  "Gujrat",
  "Assam",
  "Kerala",
  "Arunachal Pradesh",
  "Madhya Pradesh",
  "Tamil Nadu",
  "Meghalaya"
);
//states[0] = "Bihar";
//console.log(states[0]);
// states.pop();   remove data_item from right side
// states.push("UP"); add data from right side
console.log(states);
console.log(states.length);

var user = ["Jaidev Yadav", "BCA", 3];
// user.shift();    removes a data from left side.
// user.unshift();  brinng back data from left side.
console.log(user);
console.log(user.indexOf("A"));
console.log(Array.from("Jaidev Yadav"));
