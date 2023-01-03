var users = {
  firstName: "Joseph",
  lastName: "Mbote",
  role: "admin",
  loginCount: 32,
  facebookSignedIn: true,
};

users.loginCount = 50;

console.log(
  `${users.firstName} ${users.lastName} has logged in ${users.loginCount} times`
);

console.log(users);
