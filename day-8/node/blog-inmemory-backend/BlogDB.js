class BlogDB {
  constructor() {
    this.users = new Map();     // userId -> user
    this.posts = new Map();     // postId -> post
    this.comments = new Map(); // commentId -> comment
  }
}

module.exports = new BlogDB();
