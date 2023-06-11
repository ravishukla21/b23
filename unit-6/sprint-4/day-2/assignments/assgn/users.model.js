const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    pass: String,
    age: Number,
  },
  {
    versionKey: false,
  }
);
const usermodel = mongoose.model("registration", userSchema);
module.exports = {
  usermodel,
};
