const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Course = new Schema(
  {
    name: { type: String },
    description: String,
    image: { type: String, default: '' },
    slug: { type: String, slug: "name" },
    deletedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", Course);
