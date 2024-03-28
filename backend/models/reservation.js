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
  ship: {
    type: mongoose.Types.ObjectId,
    ref: "Ship",
  },
});

export const Reservation = mongoose.model(
  "Reservation",
  reservationSchema,
  "reservations"
);
