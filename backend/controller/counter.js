import express from "express";
import { Bike } from "../models/bike.js";
import { Reservation } from "../models/reservation.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const amountBikes = await Bike.countDocuments();
  const amountBookings = await Reservation.countDocuments();
  const availableBikesToday = amountBikes - amountBookings;

  const amount = [amountBikes, amountBookings, availableBikesToday];
  res.json(amount);
});

export default router;
