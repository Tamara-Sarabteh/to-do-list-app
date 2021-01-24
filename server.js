const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE_LOCAL;

mongoose
  .connect(DB, {
    // userNewUrlParser: true,
    // userCreateIndex: true,
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful "));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on ${port}..`);
});
