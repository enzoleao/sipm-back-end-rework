import { Router } from 'express';
import { GetInit } from '../controllers/users.controller'

const usersRouter = Router();

usersRouter.get('/users', GetInit);

export default usersRouter;