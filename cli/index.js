require("dotenv").config();

const { program } = require("commander");

program.option("-p --port <port>", "port for the api");
program.parse();

const { port: pointPort } = program.opts();
const port = pointPort || process.env.SERVER || 4005;

module.exports = port;
