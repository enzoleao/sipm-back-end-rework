import {Request, Response } from 'express';
import { Usuarios } from '../models/usuarios.model';
import { Polos } from '../models/polos.model';

const GetInit = async (req: Request, res: Response) => {
    const response = await Usuarios.findAll({include: Polos})
    return res.json(response);
};

export default {
    GetInit
};