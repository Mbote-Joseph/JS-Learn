var getUserRole = function (name, role) {
  switch (role) {
    case "admin":
      return `${name} is admin with all access`;
      break;
    case "subadmin":
      return `${name} is subadmin with access to create and delete courses`;
      break;
    case "testprep":
      return `${name} is testprep with access to create and delete tests`;
      break;
    case "user":
      return `${name} is user to consume content`;
      break;
    default:
      return `${name} is a trial user`;
  }
};

console.log(getUserRole("Mbote", "admin"));
