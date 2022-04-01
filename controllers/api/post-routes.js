const router = require("express").Router();
const { Post } = require("../../models");

// api/post

// @TODO THIS IS A REQUEST FOR DEV PURPOSES ONLY
router.get("/", async (req, res) => {
  try {
    //   get all posts
    const postData = await Post.findAll();
    // serialize the data
    const posts = postData.map((post) => post.get({ plain: true }));
    // render the data
    res.json(posts);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// CREATE A POST
router.post("/", async (req, res) => {
  try {
    console.log("post request sent");
    //   create a new post
    const newPost = await Post.create({
      ...req.body,
      userId: req.session.userId,
    });
    // send new post to client side
    res.json(newPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// if req.session.id == user.id - show edit button

// UPDATE A POST
router.put("/:id", async (req, res) => {
  try {
    //   update post where id = req.params.id
    await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).end();
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE A POST
router.delete("/:id", async (req, res) => {
  try {
    await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).end();
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
