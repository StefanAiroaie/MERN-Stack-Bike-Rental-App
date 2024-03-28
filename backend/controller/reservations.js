import express from "express";
import { Reservation } from "../models/reservation.js";
import { Bike } from "../models/bike.js";
import multer from "multer";

const mult = multer();

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const reservations = await Reservation.find().populate("bike").lean();
    res.json(reservations);
  } catch (error) {
    console.log("Error fetching reservations:", error);
    res.status(500).json({ error: "Failed to fetch reservations" });
  }
});

router.post("/", mult.none(), async (req, res) => {
  try {
    const reservedShip = await Bike.findById(req.body.bike);
    if (!reservedShip) {
      return res.status(404).json({ error: "Bike not found" });
    }
    const newReservation = new Reservation({
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      ship: reservedShip._id,
    });
    await newReservation.save();
    res.json(newReservation);
  } catch (error) {
    console.log("Error saving reservation", error);
    res.status(500).json({ error: "Failed to save reservation" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteResult = await Reservation.deleteOne({ _id: req.params.id });
    if (deleteResult.deletedCount === 0) {
      return res.status(404).json({ error: "Reservation not found" });
    }
    res.json({ message: "Reservation deleted successfully" });
  } catch (error) {
    console.error("Error deleting reservation:", error);
    res.status(500).json({ error: "Failed to delete reservation" });
  }
});

router.patch("/:id", mult.none(), async (req, res) => {
  try {
    const reservationId = req.params.id;
    const updates = req.body;
    const existingReservation = await Reservation.findById(reservationId);
    if (!existingReservation) {
      return res.status(404).json({ error: "Reservation not found" });
    }
    Object.assign(existingReservation, updates);
    await existingReservation.save();
    res.json(existingReservation);
  } catch (error) {
    console.error("Error editing reservation:", error);
    res.status(500).json({ error: "Failed to edit reservation" });
  }
});

export default router;
