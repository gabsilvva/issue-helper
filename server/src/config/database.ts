import mongoose from "mongoose"

const connection = async (): Promise<void> => {
  try {
    const options: mongoose.ConnectOptions = {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    }

    const conn = await mongoose.connect(
      process.env.MONGODB_URI,
      options
    )

    console.log(`Host: ${conn.connection.host}`)
    console.log(`Database: ${conn.connection.name}`)

    mongoose.connection.on("error", (error: Error) => console.error(error.message))
  } catch (error) {
    console.error((error as Error).message)
    process.exit(1)
  }
}

export default connection;