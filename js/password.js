"use strict";

const createAccountBtn = document.querySelector("#submit-btn");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");
const form = document.querySelector("#registration-form");
const passwordError = document.querySelector("#password-error");

const init = () => {
  form.addEventListener("submit", handleSubmit);
};

window.addEventListener("load", init);

const checkPassword = (password, confirmPassword) => {
  if (password.value === confirmPassword.value) {
    return true;
  } else {
    password.style.border = "2px solid red";
    confirmPassword.style.border = "2px solid red";
    return false;
  }
};

const handleSubmit = (event) => {
  if (checkPassword(password, confirmPassword) === false) {
    console.log("Registration failed");
    passwordError.textContent = "Passwords must match";
    event.preventDefault();
    return false;
  } else {
    console.log("Registration successful");
    document.getElementById("registration-form").submit();
    document.getElementById("registration-form").reset();
    password.style.border = "1px solid #e5e7eb";
    confirmPassword.style.border = "1px solid #e5e7eb";
    passwordError.textContent = "";
    return true;
  }
};

createAccountBtn.addEventListener("click", handleSubmit);
