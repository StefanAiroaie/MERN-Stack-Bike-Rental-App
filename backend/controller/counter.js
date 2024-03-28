import express from "express";
import { Bike } from "../models/bike.js";
import { Reservation } from "../models/reservation.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const amountShips = await Bike.countDocuments();
  const amountBookings = await Reservation.countDocuments();
  const availableShipsToday = amountShips - amountBookings;

  const amount = [amountShips, amountBookings, availableShipsToday];
  res.json(amount);
});

export default router;
