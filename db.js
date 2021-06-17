const mongoose = require("mongoose");
require("dotenv").config();

const connect = () => {
  return mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connect;
