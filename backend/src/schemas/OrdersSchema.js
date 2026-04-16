import { Schema } from "mongoose";

export const OrdersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
});
