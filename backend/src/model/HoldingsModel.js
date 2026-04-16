import { model } from "mongoose";
import { HoldingsSchema } from "../schemas/HoldingsSchema.js";

export const HoldingsModel = model("holdings", HoldingsSchema);

