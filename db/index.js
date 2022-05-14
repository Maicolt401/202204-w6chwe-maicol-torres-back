const chalk = require("chalk");
const debug = require("debug")("robts-api:db:root");
const mongoose = require("mongoose");

const connectDb = (conectString) =>
  new Promise((resolve, reject) => {
    mongoose.conect(conectString, (error) => {
      if (error) {
        debug(chalk.red("error in data base", error.message));
        reject();
        return;
      }
      debug(chalk.yellow("connect to data base"));
      resolve();
    });
  });

module.exports = connectDb;