
const err_middleware = (err,req,res,next)=>{
res.status(err.statusCode ||500).json({
message:err.message || "internal server error",
success:false
})

}

export default err_middleware