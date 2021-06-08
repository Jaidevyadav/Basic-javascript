console.log(this);

var user = {
  firstName: "jai",
  lastName: "dev",
  class: "none",
  getCount: function () {
    console.log("Line 8", this);
    function sayHello() {
      console.log("Hello");
      console.log("Line 11", this);
    }
    sayHello();
  },
};

user.getCount();
