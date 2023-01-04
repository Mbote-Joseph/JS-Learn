class User {
  constructor(name, age, email, courseCount) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.courseCount = courseCount;
  }
  login() {
    console.log(`${this.name} has logged in`);
    return this;
  }
  logout() {
    console.log(`${this.name} has logged out`);
    return this;
  }
  getCourseCount() {
    console.log(`Course count is: ${this.courseCount}`);
    return this;
  }
}

class Moderator extends User {
  constructor(name, age, email, courseCount, role) {
    super(name, age, email, courseCount);
    this.role = role;
  }
  deleteUser(user) {
    users = users.filter((u) => {
      return u.email != user.email;
    });
  }
}

class Admin extends Moderator {
  addCourse(user, course) {
    user.courseList.push(course);
    console.log(user);
  }
}

module.exports = User;

let user1 = new User("Joseph Mbote", 23, "mbote@gmail.com", 6, "user");

user1.login();
