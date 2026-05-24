import mongoose from "mongoose";

const dbconnect = async () => {
  const uri = process.env.MONGO_URL;
  if (!uri) {
    const err = new Error("MONGO_URL is not set in environment variables");
    console.error(err.message);
    throw err;
  }

  try {
    const conn = await mongoose.connect(uri);
    console.log("Connected to MongoDB host:", conn.connection.host);
    return conn;
  } catch (err) {
    console.error("MongoDB connection error:", err.message || err);
    throw err;
  }
};

export default dbconnect;
