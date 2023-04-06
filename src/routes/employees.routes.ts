import { Router } from 'express';
import { GetInit } from '../controllers/employees.controller'

const employeesRouter = Router();

employeesRouter.get('/teste', GetInit);

export default employeesRouter;