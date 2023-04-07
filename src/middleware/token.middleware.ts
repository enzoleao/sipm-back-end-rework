import { Request, Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken'


export const tokenAuthentication = ( req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split('Bearer ')[1]

    if (!token){
        res.status(401).json({message: 'token not provided'})
    }
    try {
        verify(`${token}`, process.env.SECRET as string)
        next()
    }catch{
        res.status(401).json({message:'Token invalid'})
     }
    
    
}
export default {
    tokenAuthentication
}