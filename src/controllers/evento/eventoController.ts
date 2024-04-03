// import { validateMovie, validatePartialMovie } from '../schemas/movies.js'
import { Request, Response } from 'express';
import { EventoQueryService } from '../../database/evento/index';
// import { handleResponse } from '../../model/response/index';

export class EventoController {

  constructor() {

  }

  getById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const response = await EventoQueryService.getById(id);

      if (!response)
        throw new Error("¡Evento no encontrado!", { cause: 404 });

      res.handleSuccess(response);

    } catch (error) {
      res.handleError(error.cause, error.message);
    }
  };

  create = async (_req: Request, _res: Response) => {

  }
}
