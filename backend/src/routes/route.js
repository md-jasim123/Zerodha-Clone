import { allHoldings,allPositions,newOrder } from "../controllers/api.js";
import express from "express"
const Common_Router = express.Router()

//       
//             
//         


Common_Router.get("/allHoldings", allHoldings)
Common_Router.post("/newOrder",newOrder)
Common_Router.get("/allPositions",allPositions)

export default Common_Router

 
