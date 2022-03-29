// node modules
const express = require("express");
const router = require("./controllers");

// port
const PORT = process.env.PORT || 3001;

// initialise express
const app = express();

// router
app.use(router);

// listen to server
app.listen(PORT, () => {
  console.log(`Now listening on http://localhost:${PORT}`);
});
