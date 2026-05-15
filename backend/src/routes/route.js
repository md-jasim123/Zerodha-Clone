import { allHoldings,allPositions,newOrder,allOrders } from "../controllers/api.js";
import express from "express"
const Common_Router = express.Router()

//       
//             
//         


Common_Router.get("/allHoldings", allHoldings)
Common_Router.post("/newOrder",newOrder)
Common_Router.get("/allPositions",allPositions)
Common_Router.get("/allOrders",allOrders)

export default Common_Router

 
