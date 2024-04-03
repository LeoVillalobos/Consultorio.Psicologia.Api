import { Request, Response, NextFunction } from 'express';

declare global {
  namespace Express {
    interface Response {
      handleSuccess<T>(data: T): void;
      handleError(statusCode: number, message: string): void;
    }
  }
}

const  buildSuccessResponse = <T>(res: Response, data: T): void => {
  res.json({
    success: true,
    data
  });
}

const  buildErrorResponse = (res: Response, statusCode: number, message: string): void => {
  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  });
}

export function handleResponse(_req: Request, res: Response, next: NextFunction): void {
  res.handleSuccess = <T>(data: T) => {
    buildSuccessResponse(res, data);
  };

  res.handleError = (statusCode: number = 500, message: string = 'Error interno del servidor') => {
    console.log("message", message);
    buildErrorResponse(res, statusCode, message);
  };

  next();
}
