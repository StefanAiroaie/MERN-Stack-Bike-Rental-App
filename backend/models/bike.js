import mongoose, { Schema } from "mongoose";

const bikeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  number_of_gears: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  max_speed: {
    type: String,
    required: true,
  },
  detail1: {
    type: String,
    required: true,
  },
  detail2: {
    type: String,
    required: true,
  },
  detail3: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

export const Bike = mongoose.model("Bike", bikeSchema, "bikes");
