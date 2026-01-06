async function fetchUserPostCommentData() {
  try {
    // 1️⃣ Fetch user
    const userRes = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const user = await userRes.json();

    // 2️⃣ Fetch posts of user
    const postsRes = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
    );
    const posts = await postsRes.json();

    const firstPost = posts[0];

    // 3️⃣ Fetch comments of first post
    const commentsRes = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${firstPost.id}`
    );
    const comments = await commentsRes.json();

    // 4️⃣ Final structured output
    return {
      userName: user.name,
      firstPostTitle: firstPost.title,
      commentCount: comments.length,
      topComment: comments[0]?.body
    };

  } catch (error) {
    console.error("Something went wrong:", error);
  }
}

// Usage
fetchUserPostCommentData().then(data => console.log(data));
