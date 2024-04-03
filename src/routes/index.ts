import { Router } from 'express';
import { authRouter } from './auth';
import { personaRouter } from './persona';
import { eventoRouter } from './evento';

const apiRouter: Router = Router();

apiRouter.use('/auth', authRouter());
apiRouter.use('/persona', personaRouter());
apiRouter.use('/evento', eventoRouter());


export default apiRouter;
