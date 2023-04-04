import {Request, Response } from 'express';
import { Usuarios } from '../models/usuarios.model';
import { Polos } from '../models/polos.model';
const GetInit = async (req: Request, res: Response) => {
    const response = await Polos.findAll({include: Usuarios})

    return res.json(response);


};

export default {
    GetInit
};