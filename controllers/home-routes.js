const router = require("express").Router();
const { Post, Comment, User } = require("../models");
const withAuth = require("../utils/auth");

// home route ( / )

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
    res.render("homepage", { posts, loggedin: req.session.loggedIn });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get a single post - withAuth middleware to prevent access
router.get("/post/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });
    // serialise the data
    const post = postData.get({ plain: true });
    // render post to front end
    res.render("view-post", { post, loggedIn: req.session.loggedIn });
    console.log(post.user);
  } catch (error) {
    res.status(500).json(error);
  }
});

// login route
router.get("/login", (req, res) => {
  // if user is logged in, redirect to dashboard
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  } else {
    // if isLogged = false | render the following below
    res.render("login");
  }
});

// sign up route
router.get("/signup", (req, res) => {
  // if user is logged in, redirect to dashboard
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  } else {
    res.render("signup");
  }
});

module.exports = router;
