const db = require("./BlogDB");

// -------- USERS --------
function createUser(id, name) {
  db.users.set(id, { id, name });
}

function getUser(id) {
  return db.users.get(id);
}

// -------- POSTS --------
function createPost(id, userId, title) {
  if (!db.users.has(userId)) {
    throw new Error("User does not exist");
  }
  db.posts.set(id, { id, userId, title });
}

function getPostsByUser(userId) {
  return [...db.posts.values()].filter(p => p.userId === userId);
}

// -------- COMMENTS --------
function createComment(id, postId, text) {
  if (!db.posts.has(postId)) {
    throw new Error("Post does not exist");
  }
  db.comments.set(id, { id, postId, text });
}

function getCommentsByPost(postId) {
  return [...db.comments.values()].filter(c => c.postId === postId);
}

// -------- CASCADING DELETES --------
function deletePost(postId) {
  // delete comments of post
  for (let [cid, comment] of db.comments) {
    if (comment.postId === postId) {
      db.comments.delete(cid);
    }
  }
  db.posts.delete(postId);
}

function deleteUser(userId) {
  // delete posts + comments
  for (let [pid, post] of db.posts) {
    if (post.userId === userId) {
      deletePost(pid);
    }
  }
  db.users.delete(userId);
}

module.exports = {
  createUser,
  getUser,
  createPost,
  getPostsByUser,
  createComment,
  getCommentsByPost,
  deleteUser,
  deletePost
};
