var users = {
  firstName: "Joseph",
  lastName: "Mbote",
  role: "admin",
  loginCount: 32,
  courseList: [],
  buyCourse: function (courseName) {
    this.courseList.push(courseName);
  },
  getCourseCount: function () {
    return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
  },

  info: function () {
    return `
        ${this.firstName} ${this.lastName} 
        Role: ${this.role}
        Number of Logins: ${this.loginCount}
        List of Courses : ${this.courseList}
        Number of Courses: ${this.courseList.length}`;
  },
};

users.buyCourse("React JS Course");
users.buyCourse("Angular Course");

console.log(
  `${users.firstName} ${users.lastName} has bought ${users.courseList}`
);

console.log(
  `${users.firstName} ${users.lastName} has bought ${users.courseList.length} courses`
);

console.log(users.info());
