async function fetchUsersWithPostCount() {
  try {
    const [usersRes, postsRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts")
    ]);

    const users = await usersRes.json();
    const posts = await postsRes.json();

    const postCountMap = {};

    posts.forEach(post => {
      postCountMap[post.userId] = (postCountMap[post.userId] || 0) + 1;
    });

    const result = users.map(user => ({
      userId: user.id,
      name: user.name,
      postCount: postCountMap[user.id] || 0
    }));

    console.log(result);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchUsersWithPostCount();
