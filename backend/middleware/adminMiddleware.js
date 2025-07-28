const isAdmin = (req, res,next)=>{
    console.log("hello from admin");
    console.log(req.user.role);
 if(req.user.role !=='user'){
    res.status(200).json({
        message:"welcome to the admin page"
    });
    
 }
 next();
}
module.exports = isAdmin;