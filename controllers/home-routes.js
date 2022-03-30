const router = require("express").Router();
const { Post, Comment, User } = require("../models");

// home route

// Get all posts for the homepage
router.get("/", async (req, res) => {
  try {
    // get all posts and include the user for each post
    const postData = await Post.findAll({
      include: [User],
    });
    // serialize the data
    const posts = postData.map((post) => post.get({ plain: true }));
    // render posts to homepage
    res.render("homepage", { posts: posts, loggedin: req.session.loggedIn });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get a single post
router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findOne({
      where: {
        id: req.params.id,
      },
      include: [User, { model: Comment, include: [User] }],
    });
    // serialise the data
    const post = postData.get({ plain: true });
    // render post to front end
    res.render("view-post", { post: post });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
