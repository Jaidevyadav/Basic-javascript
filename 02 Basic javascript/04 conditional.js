firstName = true;
Email = false;
passWord = true;

if (firstName) {
  console.log("The Name is Verified");
  if (Email) {
    console.log("The Email is Verified");
    if (passWord) {
      console.log("The Password is verified");
    }
  }
}

//second method of using if statement. here we put all conditions in begining. && and will work if both condition
//is true, || or condition will work if any one is true.

// if (firstName && Email && passWord) {
//   console.log("You can make purchase");
// } else {
//   console.log("User not Authorised");
//}
