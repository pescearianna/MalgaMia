import {Router} from 'express';
import {randomUUID} from 'crypto';
import {OrdersModel} from '../../models/ordersModel.js'
import {OrdersController} from '../../controllers/ordersController.js';



export const ordersRouter = Router();

const ordersController = new OrdersController({ordersModel: OrdersModel })

ordersRouter.get('/', ordersController.getAll);

ordersRouter.get('/:id', ordersController.getById);