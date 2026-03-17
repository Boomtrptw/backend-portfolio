const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://boomtrptw:2001sBoomtrptw@cluster0.kb43u9t.mongodb.net/"
    )

    console.log("MongoDB Atlas Connected")
  } catch (error) {
    console.error(error)
  }
}

module.exports = connectDB