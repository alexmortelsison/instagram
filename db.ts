import mongoose from "mongoose";

const connectToDatabase = async () => {
  const mongoUri = process.env.MONGO_URI || "your-fallback-uri";

  try {
    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1);
  }
};

export default connectToDatabase;
