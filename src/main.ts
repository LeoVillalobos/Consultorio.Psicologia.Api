import express from 'express' //    EsModules
// const express = require("express"' -> Comomnjs
import bodyParser from 'body-parser'
// import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
import diaryRouter from './routes/diaries'
import factoryMethodRouter from './routes/factoryMethod'
import factoryTicketsRouter from './routes/factoryTickets'
import stateRouter from './routes/state'
import stateAlarmRouter from './routes/stateAlarm'
// import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from './security';
import { corsMiddleware } from './middlewares/cors';

const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(corsMiddleware())
dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});
// app.use(cors())

app.disable('x-powered-by')

app.use('/api/diaries', diaryRouter)
app.use('/api/factoryMethod', factoryMethodRouter)
app.use('/api/factoryTickets', factoryTicketsRouter)
app.use('/api/state', stateRouter)
app.use('/api/stateAlarmRouter', stateAlarmRouter)

// const PORT = 3001

app.get('/ping', (_req, res) => {
  console.log('hola')
  res.send('pong')
})

app.listen(3001, () => {
  console.log('Server on port',3001)
})



let users: User[] = []; // Almacén temporal de usuarios

app.post('/register', async (req, res) => {
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
});

app.post('/login', async (req, res) => {
  const user = users.find(u => u.username === req.body.username);
  if (user == null) {
    return res.status(400).send('Usuario no encontrado.');
  }

  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      const accessToken = jwt.sign(user, 'mySecretKey123', { expiresIn: '15m' });
      return res.json({ accessToken });
    } else {
      return res.status(401).send('Credenciales incorrectas.');
    }
  } catch {
    return res.status(500).send('Error en la autenticación.');
  }
});
