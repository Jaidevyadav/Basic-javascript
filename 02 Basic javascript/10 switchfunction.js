var getUserrole = function (name, role) {
  switch (role) {
    case "admin":
      return `${name} is the guy with all power`;
    case "maintainer":
      return `${name} maintain website and create or add content`;
    case "mod":
      return `${name} maintains people and manages project`;
    case "user":
      return `${name} is the consumer of all content created on platform`;
    default:
      return `${name} is trial user`;
  }
};
console.log(getUserrole("Jaidev", "admin"));
