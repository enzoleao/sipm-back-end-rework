import { Router } from 'express';
import { employeesLogin, getAllEmployes, employeesRegister } from '../controllers/employees.controller'
import { tokenAuthentication, rolesLevel1 } from '../middleware/token.middleware';

const employeesRouter = Router();

employeesRouter.get('/',tokenAuthentication, rolesLevel1, getAllEmployes);

employeesRouter.post('/login', employeesLogin);
employeesRouter.post('/employeesRegister', employeesRegister);

export default employeesRouter;