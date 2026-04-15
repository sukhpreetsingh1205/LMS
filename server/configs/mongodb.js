import mongoose from "mongoose";

const connectdb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    console.log(`Mongodb is connected : ${conn.connection.host}`)
  } catch (error) {
    console.error(`connection failed : ${error?.message || error}`)
    throw error
  }
}

export { connectdb }