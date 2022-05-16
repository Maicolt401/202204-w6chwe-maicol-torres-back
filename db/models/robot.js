const { Schema, model } = require("mongoose");

const robotSchema = new Schema({
  name: { type: String },
  yearCreation: { type: Number },
  image: { type: String },
  energy: { type: Number },
});

const Robot = model("Robot", robotSchema, "robots");

module.exports = Robot;
