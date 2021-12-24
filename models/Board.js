const Mongoose = require("mongoose");

const BoardSchema = new Mongoose.Schema({
  title: { type: String, required: true },
  columns: [{ type: Mongoose.Schema.Types.ObjectId, ref: "Column" }],
});

module.exports = Mongoose.model("Board", BoardSchema);
