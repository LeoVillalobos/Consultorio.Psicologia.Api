import { Router } from 'express'
import { ClienteController } from '../../controllers/clientes';

export const createClienteRouter = () => {
  const clienteRouter = Router()

  const clienteController = new ClienteController()

  clienteRouter.get('/', clienteController.getAll)
  clienteRouter.post('/', clienteController.create)

  clienteRouter.get('/:id', clienteController.getById)
  clienteRouter.delete('/:id', clienteController.delete)
  clienteRouter.patch('/:id', clienteController.update)

  return clienteRouter
}
