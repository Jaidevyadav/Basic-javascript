var user = {
  firstName: "jai",
  lastName: "dev",
  role: "none",
  isFacebookSignedIn: true,
  courseList: [], //empty array
  buyCourse: function (courseName) {
    this.courseList.push(courseName); //this function will add values to empty array
  },
  CourseCount: function () {
    return `${this.firstName} has bought ${this.courseList.length} courses`;
  },
};
// var courseList = true;

console.log(user);
user.buyCourse("react");

user.buyCourse("react");
console.log(user.buyCourse.length);
user.firstName = "Aman";

console.log(user.CourseCount());
