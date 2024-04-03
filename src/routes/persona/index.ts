import { Router } from 'express';
import { PersonaController } from '../../controllers/persona';

export const personaRouter = () => {
  const personaRouter = Router();

  const personaController = new PersonaController();

  personaRouter.get('/:id', personaController.getById);

  return personaRouter
};
