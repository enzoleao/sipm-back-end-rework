import { Router } from 'express';
import { GetInit } from '../controllers/users.controller'

const usersRouter = Router();

usersRouter.get('/', GetInit);
usersRouter.post('/createUser', GetInit);

export default usersRouter;