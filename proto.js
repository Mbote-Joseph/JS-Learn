// Copyright 2023 user
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
let User = function (name, age, email, courseCount) {
  this.name = name;
  this.age = age;
  this.email = email;
  this.courseCount = courseCount;
  this.courseListCount = function () {
    return `Course count is: ${this.courseCount}`;
  };
};

User.prototype.getName = function () {
  return `Your name is ${this.name}`;
};

User.prototype.getEmail = function () {
  return `Your email is ${this.email}`;
};

User.prototype.getAge = function () {
  return `Your age is ${this.age}`;
};

let Joseph = new User("Joseph Mbote", 23, "mbotejoseph001gmail.com", 4);
console.log(Joseph);
console.log(Joseph.courseListCount());
console.log(Joseph.getName());
console.log(Joseph.getEmail());
console.log(Joseph.getAge());
