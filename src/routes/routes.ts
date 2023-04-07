import { Router } from 'express';
import employeesRouter from './employees.routes';
import usersRouter from './users.routes';
const routes = Router();

routes.use('/employees', employeesRouter);
routes.use('/users',usersRouter);

export default routes;