import { Request, Response } from 'express';
import { Employees } from '../models/employees.model';
import { Polos } from '../models/polos.model';

export const GetInit = async (req: Request, res: Response) => {
    const response = await Employees.findAll({include: Polos})
    return res.json(response);
};

