const mongoose = require("mongoose");

const ConnectDB = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("already connected.");
    return;
  }
  mongoose.set('strictQuery', true);
  await mongoose
    .connect(
      "mongodb+srv://amir:amir@cluster0.3ursu.mongodb.net/e-commerce?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then((res: any) => console.log("connected to mongodb."))
    .catch((err: any) => console.log(err));
};


export default ConnectDB;
