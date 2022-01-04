const Mongoose = require("mongoose");
const slugify = require("slugify");

const BoardSchema = new Mongoose.Schema({
  title: { type: String, required: true },
  columns: [{ type: Mongoose.Schema.Types.ObjectId, ref: "Column" }],
  slug: {
    type: String,
    unique: true,
  },
});

BoardSchema.pre("validate", function (next) {
  //arrow func yapmadık cünkü this özelligi yok onda.
  this.slug = slugify(this.title, {
    lower: true, // stringi kücük harfe cevirir
    strict: true, //özel karakterleri keser
  });
  next();
});

module.exports = Mongoose.model("Board", BoardSchema);
