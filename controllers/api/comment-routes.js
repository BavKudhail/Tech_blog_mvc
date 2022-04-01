const router = require("express").Router();
const { Comment, User } = require("../../models");

// api/comment

// GET ALL COMMENTS
router.get("/", async (req, res) => {
  try {
    //   find all comments
    const commentData = await Comment.findAll({
      // include the user associated with the comment
      include: [User],
    });
    // serialize the data
    const comments = commentData.map((comment) => comment.get({ plain: true }));
    // display comments
    res.json(comments);
  } catch (error) {
    res.status(500).json(error);
  }
});

// CREATE A NEW COMMENT
router.post("/", async (req, res) => {
  try {
    // create a new comment
    const newComment = await Comment.create({
      ...req.body,
      // set the user Id
      userId: req.session.userId,
    });
    res.json(newComment);
    console.log(newComment);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
