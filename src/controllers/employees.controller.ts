import { Request, Response } from 'express';
import { Employees } from '../models/employees.model';
import { Polos } from '../models/polos.model';
import employeesRepositores from '../repositories/employees.repositores';

export const GetInit = async (req: Request, res: Response) => {
    const response = await Employees.findAll({include: Polos})
    return res.json(response);
}

export const employeesLogin = async (req: Request, res: Response) => {
    const response = employeesRepositores.employeesLogin(req.body)
}