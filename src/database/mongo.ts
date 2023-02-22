import * as dotenv from "dotenv";
dotenv.config();
import { connect, Mongoose } from "mongoose";

const mongoUri = process.env.MONGO_URI || `${process.env.DATABASE_URL}`;

export const connectToMongoDb = async () => {
  await connect(mongoUri)
    .then((x) => {
      console.log(
        `Connected to Mongo! Database name: "${x.connections[0].name}"`
      );

      
    })
    .catch((err) => {
      console.error("Error connecting to mongo", err);
    });
  return connect;
};