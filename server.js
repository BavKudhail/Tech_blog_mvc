// node modules
const express = require("express");

// port
const PORT = process.env.PORT || 5000;

// initialise express
const app = express();

// listen to server
app.listen(PORT, () => {
  console.log(`Now listening on http://localhost:${PORT}`);
});
