const debug = require("debug")("robots:server:controllers");
const chalk = require("chalk");
const Robot = require("../../db/models/robot");

const getRobots = async (req, res) => {
  const robots = await Robot.find();
  res.status(200).json({ robots });
  debug("Request Recived on data base");
};
const deleteRobot = async (req, res) => {
  const { idRobot } = req.params;
  await Robot.findByIdAndDelete(idRobot);
  res.status(200).json({ msg: `deleted robot with id: ${idRobot}` });
  debug(chalk.greenBright("Received a get request to the data base"));
};

module.exports = { getRobots, deleteRobot };
