const debug = require("debug")("robots:server:controllers");
const Robot = require("../../db/models/robot");

const getRobots = async (req, res) => {
  const robots = await Robot.find();
  res.status(200).json({ robots });
  debug("Request Recived on data base");
};

module.exports = getRobots;
