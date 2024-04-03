// import { validateMovie, validatePartialMovie } from '../schemas/movies.js'
import { User } from '../../security/index';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Request } from 'express'; //Response

let users: User[] = [{
  username: 'leo',
  password: '$2b$10$7dHpsV2.f1t2i/b1asINRuOW2tFH0Ug.aBM65zyfb/6.NwTUqnLPu'
}]; // Almacén temporal de usuarios


export class AuthController {
  constructor() {
    // this.movieModel = movieModel
  }

  login = async (req: Request, res: any) => {
    const user = users.find(u => u.username === req.body.username);
    if (user == null) {
      return res.error(400, 'Usuario no encontrado.');
    }

    try {
      if (await bcrypt.compare(req.body.password, user.password)) {
        const accessToken = jwt.sign(user, 'mySecretKey123', { expiresIn: '15m' });
        return res.send({ accessToken });
      } else {
        return res.error(401, 'Credenciales incorrectas.');
      }
    } catch {
      return res.error(500, 'Error en la autenticación.');
    }
  };

  register = async (req: Request, res: any) => {
    try {
      console.log("e", req.body.password);
      console.log("e", req.body.username);
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      // console.log('hashedPassword', req.body);
      const user: User = { username: req.body.username, password: hashedPassword };
      users.push(user);
      console.log('User', users);
      res.status(201).send('Se creo correctamente');
    } catch (e) {
      console.log("e", e);
      res.status(500).send('Error al registrar el usuario.');
    }
  }

}
