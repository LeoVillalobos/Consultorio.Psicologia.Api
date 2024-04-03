// import { validateMovie, validatePartialMovie } from '../schemas/movies.js'
import { Request, Response } from 'express';
import { PersonaQueryService } from '../../database/persona/index';
export class PersonaController {

  constructor() {

  }

  // getAll = async (req: Request, _res: Response) => {
  //   const { genre } = req.query
  // const movies = await this.movieModel.getAll({ genre })
  // res.json(movies)
  // }

  getById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params
      const response = await PersonaQueryService.getById(id);

      if (!response)
        throw new Error("personal no encontrado!", { cause: 404 });

      res.handleSuccess(response);

    } catch (error) {
      res.handleError(error.cause, error.message);
    }
  }

  create = async (_req: Request, _res: Response) => {
    // const result = validateMovie(req.body)

    // if (!result.success) {
    // // 422 Unprocessable Entity
    //   return res.status(400).json({ error: JSON.parse(result.error.message) })
    // }

    // const newMovie = await this.movieModel.create({ input: result.data })

    // res.status(201).json(newMovie)
  }

  // delete = async (_req: Request, _res: Response) => {
  // const { id } = req.params

  // const result = await this.movieModel.delete({ id })

  // if (result === false) {
  //   return res.status(404).json({ message: 'Movie not found' })
  // }

  // return res.json({ message: 'Movie deleted' })
  // }

  // update = async (_req: Request, _res: Response) => {
  // const result = validatePartialMovie(req.body)

  // if (!result.success) {
  //   return res.status(400).json({ error: JSON.parse(result.error.message) })
  // }

  // const { id } = req.params

  // const updatedMovie = await this.movieModel.update({ id, input: result.data })

  // return res.json(updatedMovie)
  // }
}
