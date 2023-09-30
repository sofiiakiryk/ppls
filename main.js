const users = [
  {
    name: "John",
    eyeColor: "blue",
    gender: "male",
    isActive: true,
    email: "john@example.com",
    age: 25,
  },
  {
    name: "Alice",
    eyeColor: "brown",
    gender: "female",
    isActive: false,
    email: "alice@example.com",
    age: 30,
  },
  {
    name: "Bob",
    eyeColor: "green",
    gender: "male",
    isActive: false,
    email: "bob@example.com",
    age: 22,
  },
];

const namesArray = users.map((user) => user.name);

function getUsersByEyeColor(users, eyeColor) {
  return users.filter((user) => user.eyeColor === eyeColor);
}

const usersWithBlueEyes = getUsersByEyeColor(users, "blue");
function getUsersByGender(users, gender) {
  return users
    .filter((user) => user.gender === gender)
    .map((user) => user.name);
}

const maleUsers = getUsersByGender(users, "male");
const inactiveUsers = users.filter((user) => !user.isActive);
function getUserByEmail(users, email) {
  return users.find((user) => user.email === email);
}

const userByEmail = getUserByEmail(users, "example@email.com");
