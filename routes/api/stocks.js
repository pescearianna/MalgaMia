import {Router} from 'express';
import {randomUUID} from 'crypto';
import {StocksModel} from '../../models/stocksModel.js'
import { StocksController } from '../../controllers/stocksController.js';



export const stocksRouter = Router();

const stocksController = new StocksController({stocksModel: StocksModel })

stocksRouter.get('/', stocksController.getAll);

stocksRouter.get('/:id', stocksController.getById);