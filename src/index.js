const express = require("express");

const app = express();

const config = require("./config");
const routes = require("./routes/api");

app.use(express.json());

app.use("/api", routes);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
