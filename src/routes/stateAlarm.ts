import express from 'express'
import * as satateAlarm from "../services/StateAlarm/stateAlertService";

const router = express.Router()

router.get('/:type', (_req, res) => {
  const state = satateAlarm.startState();
  console.log("state", state)

  return (state != null)
    ? res.send({methos : state})
    : res.sendStatus(404)
})

export default router
