import jwt from 'jsonwebtoken';

export const generatedToken=(userId,role)=>{
    return jwt.sign({id:userId,role},process.env.JWT_SECRET,{expiresIn:'7d'});
}