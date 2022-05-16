require("dotenv").config();
const chalk = require("chalk");

const debug = require("debug")("robots:root");
const port = require("./cli");
const connectDb = require("./db/index");
const initialServer = require("./server/initialServer");

(async () => {
  try {
    await connectDb(process.env.MONGO_DATABASE);
    await initialServer(port || process.env.PORT || 4000);
    debug(chalk.yellow("connect"));
  } catch (error) {
    debug(chalk.red("Error to connect"));
  }
})();
