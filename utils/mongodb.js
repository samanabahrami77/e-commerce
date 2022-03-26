const mongoose = require("mongoose");

const ConnectDB = () => {
  if (mongoose.connections[0].readyState) {
    return console.log("already connected.");
  }
  mongoose
    .connect(process.env.MOBGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((res) => console.log("connected to mongodb."))
    .catch((err) => console.log(err));
};

export default ConnectDB;
