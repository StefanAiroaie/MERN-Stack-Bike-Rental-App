import mongoose from "mongoose";
import "dotenv/config";
import { Bike } from "./models/bike.js";
import bikes from '../dataBackup/bikes.json' with {type: "json"}

await mongoose.connect(process.env.MONGODB_URI);


await Bike.deleteMany();
await Bike.insertMany(bikes);

await mongoose.connection.close();
