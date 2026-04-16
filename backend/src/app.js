import "./config/env.js"
import express from "express";
import err_middleware from "./middleware/Error/error.middleware.js";
import cors from "cors";
import Common_Router from "./routes/route.js";

const app = express();




app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//routes
app.use("/zerodha",Common_Router)

app.use(err_middleware)
export default app
