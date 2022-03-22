const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const NevadaSchema = new mongoose.Schema({
  data1: {
    type: String,
    required: [true, "Please provide username"],
  },

  data2: {
    type: String,
    required: [true, "Please add a password"],
    minlength: 6,
    select: false,
  },
});





NevadaSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

NevadaSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hash token (private key) and save to database
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Set token expire date
  this.resetPasswordExpire = Date.now() + 60 * (60 * 1000); // Sixty Minutes

  return resetToken;
};

const NevadaData = mongoose.model("NevadaData", UserSchema);

module.exports = NevadaData;
