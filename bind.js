const Joseph = {
  firstName: "Joseph",
  lastName: "Mbote",
  role: "admin",
  courseCount: 7,
  getInfo: function () {
    console.log(`
        First name is: ${this.firstName}
        Last name is: ${this.lastName}
        His role is: ${this.role}
        He has taken ${this.courseCount} courses
        `);
  },
};

const Mbote = {
  firstName: "Mbote",
  lastName: "Joseph",
  role: "subadmin",
  courseCount: 5,
};

// Joseph.getInfo();
console.log(Joseph.getInfo());

// Mbote.getInfo = Joseph.getInfo;
let MboteInfo = Joseph.getInfo.bind(Mbote);
MboteInfo();
