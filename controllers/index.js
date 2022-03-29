const express = require("express");
const router = express.Router();

// route variables
const apiRoutes = require("./api");

// use routes
router.use("/api", apiRoutes);

// export router
module.exports = router;
