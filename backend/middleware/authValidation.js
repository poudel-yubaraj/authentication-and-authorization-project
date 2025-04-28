
const joi = require('joi');
const signupValidation = async(req, res, next)=>{
    try{
        const schema = joi.object({
            username: joi.string().required().min(3).messages({
                'string.min': 'username must be at least 5 characters',
            }),
            password: joi.string().min(5).max(255).required(),
            // password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
            email: joi.string().email().required(),
        });
        const {error}= schema.validate(req.body);
        console.log(error);
        if(error){
            const message = error.details[0].message; // <-- clean error message
            return res.status(409).json({ message });
        }
       return next();
    }catch(err){
    console.error("SignUp error", err);
    res.status(500).json({message: "Internal server error"});
    }
    
}

const loginValidation = async(req, res, next)=>{
    try{
        const schema = joi.object({
            username:joi.string().min(3).required(),
            password:joi.string().min(5).required(),
        });
        const { error } = schema.validate(req.body);
        if(error){
            const message = error.details[0].message;
            res.status(422).json({message:error})
        }
        next();
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Internal server error"});
    }
}

module.exports = { signupValidation, loginValidation }

   
    