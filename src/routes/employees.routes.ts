import { Router } from 'express';
import employeesController from '../controllers/employees.controller'

const employeesRouter = Router();

employeesRouter.get('/teste', employeesController.GetInit);

export default employeesRouter;