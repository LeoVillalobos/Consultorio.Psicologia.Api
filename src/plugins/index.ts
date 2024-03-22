
import { Express, json } from 'express';
import bodyParser from 'body-parser'
import { corsMiddleware } from '../middlewares/cors';


export const registerPlugins = (app: Express) => {

  app
    .use(json())
    .use(bodyParser.json())
    .use(corsMiddleware())
    .disable('x-powered-by')

}
