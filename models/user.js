const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

//Let's create a table for users
//User Scema
// - User
//   - isAdmin
//   - Join Date
//   - Email
//   - Password

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.methods = {
  authenticate: (textPassword) => {
    const isPassValid = bcrypt.compareSync(textPassword, this.password);
    return isPassValid ? true : false;
  },
};

module.exports = mongoose.model("User", userSchema);
module.exports={User}