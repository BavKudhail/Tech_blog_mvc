const router = require("express").Router();
const { User } = require("../../models");

// api/user

// @TODO - THIS REQUEST IS FOR DEV PURPOSES ONLY
router.get("/", async (req, res) => {
  try {
    //   get all users
    const userData = await User.findAll();
    // serialize the data
    const users = userData.map((user) => user.get({ plain: true }));
    // render the data
    res.json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// SIGN UP
router.post("/", async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    res.json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

// LOGIN

// LOGOUT

router.get("/", (req, res) => {
  res.send("You are now on API/USERS");
});

// export router
module.exports = router;
