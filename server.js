// node modules
const express = require("express");
const router = require("./controllers");

// port
const PORT = process.env.PORT || 3001;

// initialise express
const app = express();

// encode the data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router
app.use(router);

// listen to server
app.listen(PORT, () => {
  console.log(`Now listening on http://localhost:${PORT}`);
});
