import { Request, Response } from 'express';
import { Employees } from '../models/employees.model';
import { Polos } from '../models/polos.model';
import employeesRepositores from '../repositories/employees.repositores';

export const getAllEmployes = async (req: Request, res: Response) => {
    const response = await Employees.findAll({include: Polos})
    return res.status(200).json(response);
}

export const employeesLogin = async (req: Request, res: Response) => {
    const response = await employeesRepositores.employeesLogin(req.body)

    return res.status(response.status).json(response)
}