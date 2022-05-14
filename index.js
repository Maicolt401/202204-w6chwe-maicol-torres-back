require("dotenv").config();

const debug = require("debug")("robots:root");
const port = require("./cli");
const connectDb = require("./db");
const initialServer = require("./server/initialServer");

(async () => {
  try {
    await connectDb(process.env.DATABASE);
    await initialServer(port);
  } catch (error) {
    debug("Error to connect");
  }
})();
