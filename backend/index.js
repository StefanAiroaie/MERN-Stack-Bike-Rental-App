import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import morgan from "morgan";

import bikeRouter from "./controller/bikes.js";
import reservationRouter from "./controller/reservations.js";
import amountShipsrouter from "./controller/counter.js";

await mongoose.connect(process.env.MONGODB_URI);

const app = express();
const PORT = 3000;

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200,
};

app.use(express());
app.use(morgan("tiny"));
app.use(cors(corsOptions));
app.use("/bikes", bikeRouter);
app.use("/reservations", reservationRouter);
app.use("/counter", amountShipsrouter);

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
