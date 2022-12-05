import { Router } from 'express';
import UserController from '../controllers/user.controller';

const usersRouter = Router();

const userController = new UserController();

usersRouter.post('/', userController.login);

export default usersRouter;