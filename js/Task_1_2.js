//Task 1

function showAdminName(data) {
  for (let user in data) {
    if (data[user].isAdmin) {
      console.group(`'Task 1', ${data[user].name}`);
      // break;
    }
  }
}

fetch("./json/data.json")
  .then((response) => response.json())
  .then((data) => {
    showAdminName(data);
  })

  .catch((error) => console.error(error));

//Task 2
console.group("Task 2");

let nikola = { firstName: "Nikola", lastName: "Tesla" };
let bob = { firstName: "Bob" };
let mike = { lastName: "Smith" };
let michael = {};

let getFullName = function (user) {
  return `${user.firstName} ${user.lastName}`;
};

getFullName = new Proxy(getFullName, {
  apply(target, thisArg, args) {
    const user = args[0];

    if (!user.firstName && !user.lastName) {
      return "No name";
    } else if (!user.firstName) {
      return user.lastName;
    } else if (!user.lastName) {
      return user.firstName;
    } else {
      return target(user).toLocaleUpperCase();
    }
  },
});

console.log(getFullName(nikola)); //NIKOLA TESLA
console.log(getFullName(bob)); // "Bob"
console.log(getFullName(mike)); // "Smith"
console.log(getFullName(michael)); // "No name"

console.groupEnd();
