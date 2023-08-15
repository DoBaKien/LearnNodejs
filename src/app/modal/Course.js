const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Course = new Schema(
  {
    name: { type: String },
    description: String,
    image: String,
    slug: { type: String, slug: "name", unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", Course);
