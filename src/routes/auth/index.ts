import { Router } from 'express';
import { AuthController } from '../../controllers/auth';

export const authRouter = () => {
  const authRouter = Router();

  const authController = new AuthController();

  authRouter.post('/login', authController.login);
  authRouter.post('/register', authController.register);

  return authRouter
};
