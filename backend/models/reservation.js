import mongoose, { Schema } from "mongoose";

const reservationSchema = new Schema({
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  bike: {
    type: mongoose.Types.ObjectId,
    ref: "Bike",
  },
});

export const Reservation = mongoose.model(
  "Reservation",
  reservationSchema,
  "reservations"
);
