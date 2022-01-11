// Const variables
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const rePassword = document.getElementById("rePassword");

// When the user click submit send a command to 'checkInputs()'
// e is an object who has data about the submit
// This is the main code
form.addEventListener("submit", (e) => {
  // console.log(e);
  e.preventDefault();
  checkInputs();
});

// Check all the inputs in form
const checkInputs = () => {
  // Getting the values from the objects and triming if neeeded.
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
  /*TODO: didn't checked all posiable cases */
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank.");
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
    setErrorFor(rePassword, "Repeat password must be the same.");
  } else {
    setSuccessFor(rePassword);
  }
};

// Error raiser and handler
const setErrorFor = (input, message) => {
  const formControl = input.parentElement; // Getting the parent element "form-control"
  console.log(formControl);
  const small = formControl.querySelector("small");
  console.log(small);
  small.innerText = message;
  formControl.className = "form-control error"; // Changing class name for css
};

// Success raiser and handler
const setSuccessFor = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success"; // Changing class name for css
};
