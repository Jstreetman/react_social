const cors = require("cors");
const express = require("express");
const routes = require("./routes/userRoutes");
const PORT = 3000;
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const config = require("./config/db");

mongoose.Promise = global.Promise;

mongoose.connect(config.db);
let db = mongoose.connection;

mongoose.connect(config.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to the database");
  }
});

db.on("error", (err) => {
  console.log(`Database error: ${err}`);
});

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

//Initialzing cors

if (process.env.CORS) {
  app.use(cors());
}

//initialzing routes for app
app.use("api/users", routes);

//catch-all route for non-api routes to serve frontend

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);
  res.status(400).json({ err: err });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
