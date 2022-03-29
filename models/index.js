const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// A user can have many posts
User.hasMany(Post, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

// A user can have many comments
User.hasMany(Comment, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

// A post belongs to a specific user
Post.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

// A post can have many comments
Post.hasMany(Comment, {
  foreignKey: "postId",
  onDelete: "CASCADE",
});

// A comment belongs to a post
Comment.belongsTo(Post, {
  foreignKey: "postId",
});

// A comment belongs to a user
Comment.belongsTo(User, {
  foreignKey: "userId",
});

module.exports = { User, Post, Comment };
