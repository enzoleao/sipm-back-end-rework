import { Request, Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken'


export const tokenAuthentication = ( req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split('Bearer ')[1]
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