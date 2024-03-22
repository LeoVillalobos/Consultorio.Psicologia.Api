import express from 'express'; //    EsModules
import dotenv from 'dotenv';

import { registerPlugins } from './plugins';
import apiRouter from './routes';

const createApp = () => {

  dotenv.config({
    path: `.env.${process.env.NODE_ENV}`,
  });

  const app = express();

  registerPlugins(app);

  app.use('/api', apiRouter)

  app.listen(3001, () => {
    console.log('Server on port', 3001)
  })
}


createApp();
