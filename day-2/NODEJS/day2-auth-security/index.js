const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());

// Fake user
const USER = {
  username: "admin",
  password: "1234"
};

// Login route
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === USER.username && password === USER.password) {
    res.cookie("auth", "loggedin", {
      httpOnly: true
    });

    return res.status(200).json({ message: "Login successful" });
  }

  res.status(401).json({ message: "Invalid credentials" });
});

// Authentication Middleware
function authMiddleware(req, res, next) {
  const authCookie = req.cookies.auth;

  if (authCookie === "loggedin") {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}

// Protected route
app.get("/dashboard", authMiddleware, (req, res) => {
  res.status(200).json({ message: "Welcome to dashboard" });
});

// Logout
app.post("/logout", (req, res) => {
  res.clearCookie("auth");
  res.status(200).json({ message: "Logged out" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
