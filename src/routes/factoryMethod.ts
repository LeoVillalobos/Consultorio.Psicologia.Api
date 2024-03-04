import express from 'express'
import * as factoryMethodService from "../services/FactoryMethod/factoryMethodService"

const router = express.Router()


router.get('/:type', (req, res) => {
  const factoryMethod = factoryMethodService.appCreator(+req.params.type)
  console.log("factoryMethod", factoryMethod)

  return (factoryMethod != null)
    ? res.send({methos : factoryMethod})
    : res.sendStatus(404)
})

export default router
