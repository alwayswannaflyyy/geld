const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://bezsama0817:Fake99280519@javhlann.h90yfyn.mongodb.net/?retryWrites=true&w=majority"
    );

    console.log("Succesfully Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  connectDatabase,
};
