const cors = require("cors");
const express = require("express");
const routes = require("./routes/userRoutes");
const PORT = 3000;
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
