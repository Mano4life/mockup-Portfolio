let contactBtn = document.getElementsByClassName("btnContact");
let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");

function Click() {
  if (name.value === "") {
    name.classList.add("error");
  }
  if (email.value === "") {
    email.classList.add("error");
  }
  if (message.value == "") {
    message.classList.add("error");
  }
  removeError();
}

function removeError() {
  if (name.value) {
    name.classList.remove("error");
  }
  if (email.value) {
    email.classList.remove("error");
  }
  if (message.value) {
    message.classList.remove("error");
  }
}
