function loginUser() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch(ENDPOINTS.login, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  })
  .then(res => res.json())
  .then(data => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", username);
    window.location.href = "index.html";
  });
}

function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}
