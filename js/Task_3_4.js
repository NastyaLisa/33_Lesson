console.group("Task 3");

const users = [
  { name: "Nikola", age: 18, id: 1 },
  { name: "Bob", age: 25, id: 2 },
  { name: "Mike", age: 32, id: 3 },
];

localStorage.setItem("users", JSON.stringify(users));

function sayHelloToUser(id) {
  const storedUsers = JSON.parse(localStorage.getItem("users"));

  const user = storedUsers.find((user) => user.id === id);

  if (user) {
    console.log(`Hello, ${user.name}!`);
  } else {
    console.log("User not found");
  }
}

sayHelloToUser(2);
sayHelloToUser(3);
console.groupEnd();

//Task 4
const input = document.querySelector("input");

input.addEventListener("input", () => {
  localStorage.setItem("textInput", input.value);
});

window.addEventListener("load", () => {
  const savedText = localStorage.getItem("textInput");
  if (savedText) {
    input.value = savedText;
  }
});
