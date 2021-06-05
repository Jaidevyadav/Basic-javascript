const states = [
  "Delhi",
  "Bihar",
  "UP",
  1997,
  "Rajasthan",
  "Kerala",
  "Maharastra",
];

//we can print a loop without telling any value in for loop.
var i = 0;
for (;;) {
  if (i > 4) break;
  console.log(i);
  i++; //if we had given condition for incrementor it will keep going.
}

states.forEach((s) => console.log(s));
