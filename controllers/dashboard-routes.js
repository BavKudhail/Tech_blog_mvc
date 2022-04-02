const router = require("express").Router();
const { Post, User } = require("../models");
const withAuth = require("../utils/auth");

// /dashboard

router.get("/", withAuth, async (req, res) => {
  try {
    // find all post data from the currently logged in user
    const postData = await Post.findAll({
      where: {
        userId: req.session.userId,
      },
      attributes: ["id", "title", "date", "content"],
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    // serialise the data
    const posts = postData.map((post) => post.get({ plain: true }));
    // render the view out to the page
    res.render("dashboard", { posts, loggedIn: true });
  } catch (error) {
    res.redirect("login");
  }
});

// When the user clicks on the post itself
router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    // find the post via the id in the URL
    const postData = await Post.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id", "title", "content", "date"],
    });
    // serialise the data
    const post = postData.get({ plain: true });
    res.render("edit-post", { post });
  } catch (error) {
    res.redirect("login")
  }
});

router.get("/create", withAuth, async (req, res) => {
  try {
    res.render("create-post");
  } catch (error) {}
});

module.exports = router;
