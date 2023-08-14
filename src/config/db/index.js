const mongoose = require("mongoose");
function connect() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/Node_f8")
    .then(() => console.log("Connected!"));
}

module.exports = { connect };
