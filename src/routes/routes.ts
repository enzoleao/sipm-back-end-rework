import { Router } from 'express';
import employeesRouter from './employees.routes';
import usersRouter from './users.routes';
const routes = Router();

routes.use(employeesRouter);
routes.use(usersRouter);

export default routes;