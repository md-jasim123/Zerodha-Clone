import mongoose from "mongoose";
import dotenv from "dotenv";
import { HoldingsModel } from "../src/model/HoldingsModel.js";
import { PositionsModel } from "../src/model/PositionsModel.js";
import { OrdersModel } from "../src/model/OrdersModel.js";

dotenv.config({ path: new URL("../.env", import.meta.url).pathname });

const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/zerodha_clone";

const holdings = [
  { name: "TCS", qty: 10, avg: 3200.5, price: 3350.25, net: "+4.68%", day: "+1.2%" },
  { name: "INFY", qty: 20, avg: 1500.0, price: 1525.75, net: "+1.72%", day: "-0.4%" },
  { name: "HDFC", qty: 5, avg: 2800.0, price: 2905.0, net: "+3.75%", day: "+0.7%" }
];

const positions = [
  { product: "MIS", name: "TCS", qty: 10, avg: 3200.5, price: 3350.25, net: "+1500", day: "+1.2%", isLoss: false },
  { product: "NRML", name: "INFY", qty: 20, avg: 1500.0, price: 1525.75, net: "+515", day: "-0.4%", isLoss: false },
  { product: "CNC", name: "HDFC", qty: 5, avg: 2800.0, price: 2905.0, net: "+525", day: "+0.7%", isLoss: false }
];

const orders = [
  { name: "TCS", qty: 2, price: 3340.0, mode: "BUY" },
  { name: "INFY", qty: 1, price: 1530.0, mode: "SELL" }
];

async function seed() {
  try {
    console.log("Connecting to MongoDB:", MONGO_URL);
    await mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

    console.log("Clearing existing collections...");
    await HoldingsModel.deleteMany({});
    await PositionsModel.deleteMany({});
    await OrdersModel.deleteMany({});

    console.log("Inserting dummy holdings...");
    await HoldingsModel.insertMany(holdings);

    console.log("Inserting dummy positions...");
    await PositionsModel.insertMany(positions);

    console.log("Inserting dummy orders...");
    await OrdersModel.insertMany(orders);

    console.log("Seeding complete. Closing connection.");
    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error("Seeding error:", err);
    try { await mongoose.disconnect(); } catch (e) {}
    process.exit(1);
  }
}

seed();
