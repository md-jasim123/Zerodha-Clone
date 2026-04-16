import { model } from "mongoose";
import { PositionsSchema } from "../schemas/PositionsSchema.js";

export const PositionsModel = model("position", PositionsSchema);
