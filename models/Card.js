const Mongoose = require("mongoose");

const CardSchema = new Mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = Mongoose.model("Card", CardSchema);
