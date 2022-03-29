const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("You are now on API/USERS");
});

// export router
module.exports = router;
