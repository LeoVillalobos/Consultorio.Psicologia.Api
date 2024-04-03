import { Router } from 'express';
import { EventoController } from '../../controllers/evento/eventoController';

export const eventoRouter = () => {
  const eventoRouter = Router();

  const eventoController = new EventoController();

  eventoRouter.get('/:id', eventoController.getById);

  return eventoRouter
};
