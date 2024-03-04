import express from 'express'
import * as stateService from "../services/State/stateService";

const router = express.Router()

router.get('/:type', (_req, res) => {
  const state = stateService.startState()
  console.log("state", state)

  return (state != null)
    ? res.send({methos : "hola"})
    : res.sendStatus(404)
})

export default router
