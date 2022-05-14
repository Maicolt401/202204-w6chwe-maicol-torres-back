const { Schema, model } = require("mongoose");

const robotSchema = new Schema({
  name: { type: String },
  yearCreation: { type: Number },
  image: { type: String },
  energy: { type: Number },
});

const robot = model("robot", robotSchema, "robots");

module.exports = robot;
