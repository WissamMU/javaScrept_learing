const mongoose = require("mongoose");
const ModelSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    maxlenght: 20,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});
const Model = mongoose.model("User", ModelSchema);
module.exports = Model;