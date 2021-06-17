const { User } = require("../../models/user");

const userAuth = async (req, res) => {
  const { email, password } = req.body;

  const isPresent = await User.findOne({ email });
  //isPresent contains the whole document .. there is no need for another db call
  if (!isPresent) {
    return res.send("user doesn't exist!");
  }
  if (!isPresent.authenticate(password)) {
    return res.send("incorrect password");
  } else {
    console.log("user is logged in");
  }
  try {
    console.log("session or token authentication required");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { userAuth };
