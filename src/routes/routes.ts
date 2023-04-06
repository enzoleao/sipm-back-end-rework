import { Router } from 'express';
import employeesRouter from './employees.routes';

const routes = Router();

routes.use(employeesRouter);

export default routes;