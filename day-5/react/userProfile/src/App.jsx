import React from "react";
import UserProfile from "./UserProfile";
import GitHubUserSearch from "./GitHubUserSearch";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Day 5: Data Fetching Basics</h1>

      <hr />

      <h2>User Profile Loader</h2>
      <UserProfile />

      <hr />

      <h2>GitHub User Search</h2>
      <GitHubUserSearch />
    </div>
  );
}

export default App;
