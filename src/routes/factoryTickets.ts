import express from 'express'
import * as titeckfactoryService from "../services/FactoryMethodTicket/ticketService";

const router = express.Router()

router.get('/:type', (req, res) => {
  const factoryMethod = titeckfactoryService.ticketCreator(+req.params.type)
  console.log("factoryMethod", factoryMethod)

  return (factoryMethod != null)
    ? res.send({methos : factoryMethod})
    : res.sendStatus(404)
})

export default router
