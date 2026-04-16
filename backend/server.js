import "./src/config/env.js"
import app from "./src/app.js"
import dbconnect from "./src/config/dbconnect.js";



dbconnect()
.then(()=>{
app.listen(process.env.PORT || 5600, () => {
  console.log("database connected successfully")
  console.log(" server started!");
})
})
.catch(()=>{
  console.log(" server not started")
  process.exit(1)
  

})
