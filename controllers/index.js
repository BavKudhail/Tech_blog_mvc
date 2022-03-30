const express = require("express");
const router = express.Router();

// route variables
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");

// use routes
router.use("/", homeRoutes);
router.use("/api", apiRoutes);

// export router
module.exports = router;
