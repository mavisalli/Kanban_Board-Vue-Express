const Mongoose = require("mongoose");

const ColumnSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cards: [
    {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "Card",
    },
  ],
});

module.exports = Mongoose.model("Column", ColumnSchema);
