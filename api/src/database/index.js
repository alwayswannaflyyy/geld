const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Boloroo_:Bolorchuluun2005@cluster0.wz2puay.mongodb.net/?retryWrites=true&w=majority"
    );

    console.log("Succesfully Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  connectDatabase,
};
