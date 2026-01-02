import { useEffect, useState } from "react";

function GitHubUserSearch() {
  const [username, setUsername] = useState("");
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchGitHubUser() {
      setLoading(true);
      setError(null);
      setUser(null);

      try {
        const res = await fetch(
          `https://api.github.com/users/${query}`,
          { signal }
        );

        if (!res.ok) {
          throw new Error("User not found");
        }

        const data = await res.json();
        setUser(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubUser();

    // ✅ abort stale request
    return () => controller.abort();
  }, [query]);

  function handleSearch() {
    if (username.trim()) {
      setQuery(username.trim());
    }
  }

  return (
    <div>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {user && (
        <div>
          <img src={user.avatar_url} width="100" />
          <h3>{user.name}</h3>
          <p>{user.bio}</p>
          <p>Followers: {user.followers}</p>
        </div>
      )}
    </div>
  );
}

export default GitHubUserSearch;
