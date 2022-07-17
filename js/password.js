"use strict";

let createAccountBtn = document.querySelector("#submit");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");

const checkPassword = (password, confirmPassword) => {
  if (password.value !== confirmPassword.value) {
    console.log("Passwords must be the same.");
    return false;
  } else {
    return true;
  }
};

function hello() {
  console.log("Hello");
}

createAccountBtn.addEventListener("click", () => checkPassword(password, confirmPassword));
