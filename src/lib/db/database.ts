import * as mongoose from "mongoose";

export const connect = async () => {
    mongoose.connect(process.env.MONGO_URL!, {
        dbName: "jamie_omondi",
        connectTimeoutMS: 10000,
        retryWrites: true,
        retryReads: true,
        autoIndex: true,
        bufferCommands: true
    });
    const connection = mongoose.connection
    connection.once("open", () => {
        console.log("INFO: Connected to MongoDB!")
    })
    connection.on("error", (err) => {
        console.error("ERROR: Error connecting to MongoDB!", err.message)
    });
    connection.once("close", () => {
        console.log("INFO: MongoDB Connection Closed!")
    });
    connection.on("disconnected", () => {
        console.warn("INFO: MongoDB Connection Closed!")
    });
    connection.on("reconnected", () => {
        console.log("Connection to MongoDB Re-established!")
    });
}
