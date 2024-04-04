import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { UserQueryService } from '../../database/auth/index';
import { IUserRequest } from '../../model/auth';


export class AuthController {
  constructor() {
    // this.movieModel = movieModel
  }

  login = async (req: Request, res: Response) => {
    try {

      const { username } = req.body;

      const user = await UserQueryService.getUserByUsername(username);

      if (user === null)
        throw new Error("¡User no encontrado!", { cause: 400 });

      const passwordMatch = await bcrypt.compare(req.body.password, user.contrasenia);

      if (!passwordMatch)
        throw new Error("¡Credenciales incorrectas.!", { cause: 401 });

      const accessToken = jwt.sign(user, generarClaveJWT(), { expiresIn: '20m' });

      res.handleSuccess({ accessToken });

    } catch (error) {
      res.handleError(error.cause, error.message);
    }
  };

  register = async (req: Request, res: Response) => {
    try {

      const userRequest: IUserRequest = req.body;

      const resUser = await UserQueryService.createUser(userRequest);

      res.handleSuccess(resUser);

    } catch (error) {
      res.handleError(error.cause, error.message);
    }
  }
}

/**
 * Función para generar una clave segura para los tokens JWT
 * @returns
 */
const generarClaveJWT = (): string => Math.random().toString(36).slice(2);
