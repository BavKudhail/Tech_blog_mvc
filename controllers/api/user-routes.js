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
    // create a new user
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    // save that user session
    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;
      res.json(newUser);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    // find a user when the username is  = to username
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    // if the username does not exist
    if (!user) {
      res.status(400).json({ message: "Oops. No account found!" });
      return;
    }
    // check the password stored matches the password typed
    const password = user.checkPassword(req.body.password);
    // if the password does not exist
    if (!password) {
      res.status(400).json({ message: "Oops. No account found!" });
      return;
    }

    // save session
    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;
      // send message
      res.json({ user, message: "You are now logged in!" });
    });
  } catch (error) {
    res.status(400).json({ message: "Oops. No account found!" });
  }
});

// LOGOUT
router.post("/logout", (req, res) => {
  // if the user is currently logged in
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
    // if the user is not logged in
  } else {
    res.status(404).end();
  }
});

// export router
module.exports = router;
