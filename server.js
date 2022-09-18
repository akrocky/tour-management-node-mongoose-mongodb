const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
const DBConnect = require("./utils/dbConnect");

const app = require("./app");

// database connection
DBConnect();
const port=process.env.PORT||8080;

app.listen(port, () => {
  console.log(`app listening on port ${port}`.bold.red)
})