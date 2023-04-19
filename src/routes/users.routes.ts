import { Router } from 'express';
import { allAppointments } from '../controllers/users.controller'

const usersRouter = Router();

usersRouter.get('/', allAppointments);

export default usersRouter;