import { useState } from "react";

// Mock Data: 100 posts
const allPosts = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  author: `Author ${(i % 10) + 1}`,
  content: `This is post number ${i + 1}`,
  likes: Math.floor(Math.random() * 500),
  timestamp: new Date(Date.now() - i * 3600000).toISOString()
}));

export default function InfiniteFeed() {
  const BATCH_SIZE = 20;

  const [posts, setPosts] = useState(allPosts.slice(0, BATCH_SIZE)); // initially 20
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);

    // simulate async loading
    setTimeout(() => {
      const currentLength = posts.length;
      const nextPosts = allPosts.slice(currentLength, currentLength + BATCH_SIZE);

      setPosts([...posts, ...nextPosts]);
      setLoading(false);
    }, 800);
  };

  const allLoaded = posts.length >= allPosts.length;

  return (
    <div style={{ padding: "1rem" }}>
      <h3>Infinite Scroll Feed</h3>

      {posts.map(post => (
        <div key={post.id} style={{ border: "1px solid #ccc", marginBottom: "0.5rem", padding: "0.5rem" }}>
          <p><strong>{post.author}</strong> <span style={{ color: "#666" }}>{new Date(post.timestamp).toLocaleString()}</span></p>
          <p>{post.content}</p>
          <p>Likes: {post.likes}</p>
        </div>
      ))}

      <div style={{ marginTop: "1rem" }}>
        {loading && <p>Loading...</p>}

        {!loading && !allLoaded && (
          <button onClick={handleLoadMore}>Load More</button>
        )}

        {allLoaded && <p>No more posts</p>}
      </div>
    </div>
  );
}
