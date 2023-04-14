import { Request, Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken'
import { AppError } from "../erros/AppError";


export const tokenAuthentication = ( req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split('Bearer ')[1]
    try {
        verify(`${token}`, process.env.SECRET as string)
        next()
    }catch{
        throw new AppError("Invalid token")
    } 
}
export const rolesLevel1 = async ( req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split('Bearer ')[1]
    const decoded: any =  verify(`${token}`, process.env.SECRET as string)
    
    if (decoded.roles_level >= 1){
        next()
    }
    else {
        throw new AppError("Permissão Invalida")
    }
}
export const rolesLevel2 = ( req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split('Bearer ')[1]
    const decoded: any =  verify(`${token}`, process.env.SECRET as string)
    
    if (decoded.roles_level >= 2){
        next()
    }
    else {
        throw new AppError("Permissão Invalida")
    }
}
export const rolesLevel3 = ( req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split('Bearer ')[1]
    const decoded: any =  verify(`${token}`, process.env.SECRET as string)
    
    if (decoded.roles_level >= 3){
        next()
    }
    else {
        throw new AppError("Permissão Invalida")
    }
}
export default {
    tokenAuthentication,
    rolesLevel1,
    rolesLevel2,
    rolesLevel3
}