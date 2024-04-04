
import { Express, json } from 'express';
import bodyParser from 'body-parser'
import { corsMiddleware } from '../middlewares/cors';
import { handleResponse } from '../middlewares/handleResponse';


export const registerPlugins = (app: Express) => {
  app
    .use(json())
    .use(bodyParser.json())
    .use(corsMiddleware())
    .use(handleResponse)
    .disable('x-powered-by');
}
