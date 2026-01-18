const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPwd = document.getElementById("confirm");
const age = document.getElementById("age");
const btn = document.querySelector("button");

function setStatus(input, message, valid) {
  const small = input.nextElementSibling;
  input.className = valid ? "valid" : "invalid";
  small.textContent = valid ? "" : message;
}

function validate() {
  let isValid = true;

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    setStatus(email, "Invalid email", false);
    isValid = false;
  } else setStatus(email, "", true);

  // Password
  const pwdRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
  if (!pwdRegex.test(password.value)) {
    setStatus(password, "Weak password", false);
    isValid = false;
  } else setStatus(password, "", true);

  // Confirm
  if (confirmPwd.value !== password.value || !confirmPwd.value) {
    setStatus(confirmPwd, "Passwords do not match", false);
    isValid = false;
  } else setStatus(confirmPwd, "", true);

  // Age
  if (age.value < 18 || age.value > 100) {
    setStatus(age, "Age must be 18–100", false);
    isValid = false;
  } else setStatus(age, "", true);

  btn.disabled = !isValid;
}

[email, password, confirmPwd, age].forEach(i =>
  i.addEventListener("input", validate)
);
