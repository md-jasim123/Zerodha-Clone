import mongoose from "mongoose";

const dbconnect = ()=>{
try{
    return mongoose.connect(process.env.MONGO_URL)
    
}
catch(err){
console.log(err.message)
throw(err)

}


}

export default dbconnect