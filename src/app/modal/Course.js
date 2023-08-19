const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const Schema = mongoose.Schema;
const mongoose_delete = require('mongoose-delete');

const Course = new Schema(
  {
    name: { type: String },
    description: String,
    image: { type: String, default: '' },
    slug: { type: String, slug: "name" },
    deleted: { type: Boolean, default: false }
  },
  { timestamps: true }
);

mongoose.plugin(slug);
Course.plugin(mongoose_delete, { deletedAt: true, overrideMethods: 'all' });

module.exports = mongoose.model("Course", Course);
