const sites = [
  "youtube",
  "google",
  "Facebook",
  "yahoo",
  "visual studio",
  "amzon",
  "flipcart",
];

for (const n of sites) {
  console.log(n);
}
const gun = {
  small: "handgun",
  medium: "pocket gun",
  large: "AK 47",
};

//here we use n to print key, gun[n] to print values
for (const n in gun) {
  console.log(`lets fuck with ${gun[n]} which is ${n}`);
}

const scale = {
  small: "3 toads",
  medium: "4 centipedes",
  average: "6 ants",
  big: "7 cockroach",
  bigger: "8 mouses",
};
for (const n in scale) {
  console.log(n);
}
//simply using n will print keys

for (const n in scale) {
  console.log(scale[n]);
}
//it will print values
