import { Router } from 'express';
import { employeesLogin, getAllEmployes } from '../controllers/employees.controller'
import { tokenAuthentication } from '../middleware/token.middleware';

const employeesRouter = Router();

employeesRouter.post('/login', employeesLogin);
employeesRouter.post('/createEmployee', employeesLogin);
employeesRouter.get('/',tokenAuthentication, getAllEmployes);

export default employeesRouter;