
import { Request, Response, NextFunction } from 'express';
import jwt, { VerifyErrors, JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken';

const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');

  if (!token) return res.status(401).send('Acceso denegado.');

  const tokenWithoutBearer = token.startsWith('Bearer ') ? token.slice(7) : token;

  console.log("tokenWithoutBearer", tokenWithoutBearer);

  const a = jwt.verify(tokenWithoutBearer, 'mySecretKey123' || '', (err: VerifyErrors | null, user: User | undefined) => {
    if (err) {
      if (err instanceof TokenExpiredError) {
        return res.status(401).send('Token expirado.');
      } else if (err instanceof JsonWebTokenError) {
        return res.status(403).send('Token inválido.');
      } else {
        return res.status(500).send('Error en la autenticación.');
      }
    }

    if (user) {
      req.user = user;
      return next();
    } else {
      return res.status(403).send('Token inválido.'); // Manejo adicional si el usuario es indefinido
    }
  });

  return a;
};

interface User {
  // Definir la estructura del usuario según tus necesidades
  username: string;
  password: string;
}

interface AuthRequest extends Request {
  user?: User;
}

export {authenticateToken, User}
