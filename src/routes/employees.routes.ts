import { Router } from 'express';
import { employeesLogin } from '../controllers/employees.controller'

const employeesRouter = Router();

employeesRouter.post('/login', employeesLogin);

export default employeesRouter;