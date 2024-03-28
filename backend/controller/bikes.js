import express from "express";
import { Bike } from "../models/bike.js";
import multer from "multer";

const router = express.Router();
const mult = multer();

router.get("/", async (req, res) => {
  try {
    const bikes = await Bike.find().lean();
    res.json(bikes);
  } catch (err) {
    console.error(err);
    res.sendStatus(404);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const bike = await Bike.findById(req.params.id).lean();
    res.json(bike);
  } catch (err) {
    console.error(err);
    res.sendStatus(404);
  }
});

router.post("/", mult.none(), async (req, res) => {
  console.log(req.body);
  try {
    const newBike = new Bike({
      name: req.body.name,
      baujahr: req.body.baujahr,
      serialNumber: req.body.serialNumber,
      imageUrl: req.body.imageUrl,
      material: req.body.material,
      shipType: req.body.shipType,
    });

    const saveResult = await newBike.save();
    res.status(201).json(saveResult);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteResult = await Bike.deleteOne({ _id: req.params.id });
    if (deleteResult.deletedCount === 0) {
      return res.status(404).json({ error: "Bike not found" });
    }
    res.json({ message: "Bike deleted successfully" });
  } catch (error) {
    console.error("Error deleting Bike:", error);
    res.status(500).json({ error: "Failed to delete Bike" });
  }
});

router.patch("/:id", mult.none(), async (req, res) => {
  try {
    const bikeId = req.params.id;
    const updates = req.body;
    const existingBike = await Ship.findById(bikeId);
    if (!existingBike) {
      return res.status(404).json({ error: "Bike not found" });
    }
    Object.assign(existingBike, updates);
    await existingBike.save();
    res.json(existingBike);
  } catch (error) {
    console.error("Error editing bike:", error);
    res.status(500).json({ error: "Failed to edit bike" });
  }
});

export default router;
