for (let i = 4; i < 10; i++) {
  console.log(i);
}

const states = [
  "Delhi",
  "Bihar",
  "UP",
  1997,
  "Rajasthan",
  "Kerala",
  "Maharastra",
];
for (let i = 0; i < states.length; i++) {
  //if (typeof states[i] !== "string") break;  //to print no only and break array.
  if (typeof states[i] !== "string") continue; //to print array without no
  console.log(states[i]);
}

let i = 0;

while (i < states.length) {
  console.log(states[i]);
  i++;
}

do {
  console.log(states[i]);
  i++;
} while (i < states.length);
