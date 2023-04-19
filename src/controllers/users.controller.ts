import { Request, Response } from 'express';
import { getAllAppointments } from '../repositories/users.repositores';


export const allAppointments = async (req: Request, res: Response) => {
    const response = await getAllAppointments()
    return res.status(200).json(response);
};


