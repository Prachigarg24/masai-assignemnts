const service = require("./services");

// Create user
service.createUser(1, "Prachi");

// Create post
service.createPost(101, 1, "My First Blog");

// Create comments
service.createComment(1001, 101, "Nice post!");
service.createComment(1002, 101, "Very helpful");

// Queries
console.log("Posts:", service.getPostsByUser(1));
console.log("Comments:", service.getCommentsByPost(101));

// Cascading delete
service.deleteUser(1);

console.log("Users:", service.getUser(1));      // undefined
console.log("Posts after delete:", service.getPostsByUser(1)); // []
