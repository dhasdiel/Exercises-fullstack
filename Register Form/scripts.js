//-------------------------------------------------------------
// Register form validation:
// -----------------------

// Const variables
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const rePassword = document.getElementById("rePassword");

// When the user click submit send a command to 'checkInputs()'
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

// Check all the inputs in form
const checkInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const rePasswordValue = rePassword.value.trim();
  // Check username value
  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank.");
  } else {
    setSuccessFor(username);
  }
  // Check email value
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank.");
  } else if (!validateEmail(emailValue)) {
    setErrorFor(email, "Email is not valid.");
  } else {
    setSuccessFor(email);
  }
  // Check password value
  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank.");
  } else if (passwordValue.length < 8) {
    setErrorFor(password, "Password cannot be less than 8 digits.");
  } else if (passwordValue === "123456789" || passwordValue === "1234567890") {
    setErrorFor(password, "Password cannot be 12345.");
  } else if (passwordValue === usernameValue) {
    setErrorFor(
      password,
      "Password cannot be as username: '" + usernameValue + "'."
    );
  } else {
    setSuccessFor(password);
  }
  // Check repeat password value
  if (rePasswordValue === "") {
    setErrorFor(rePassword, "Repeat password cannot be blank.");
  } else if (rePasswordValue !== passwordValue) {
    setErrorFor(rePassword, "Repeat password must be as password.");
  } else {
    setSuccessFor(rePassword);
  }
};
// Change the class of 'form-control' to 'form-control error'
const setErrorFor = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error";
};
// Change the class of 'form-control' to 'form-control success'
const setSuccessFor = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

function validateEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

// Show the password to the user
function showPassword() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
//-------------------------------------------------------------
