import { HoldingsModel } from "../model/HoldingsModel.js"
import { PositionsModel } from "../model/PositionsModel.js"
import { OrdersModel } from "../model/OrdersModel.js"
import asyncHandler from "../middleware/Error/asyncHandler.js"
import ApiError from "../middleware/Error/ApiError.js"





export const allHoldings =  asyncHandler (
  async (req, res,next) => {
  let allHoldings = await HoldingsModel.find({});
if(!allHoldings) return next(new ApiError(404,"holdings data not found"))



  res.status(200).json({
    allHoldings,
    message:"holdings data fetched successfully",
    success:true
  });
}

);




 export const allPositions = asyncHandler(
  async (req, res,next) => {
  let allPositions = await PositionsModel.find({});

  if(allPositions.length == 0) return next(new ApiError(404,"position data not found"))
 
     res.status(200).json({
    allPositions,
    message:"Position data fetched successfully",
    success:true
  });



}

 )






export const newOrder = asyncHandler(
   async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
}
)