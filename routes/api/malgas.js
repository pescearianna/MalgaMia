import {Router} from 'express';
import {randomUUID} from 'crypto';
import {MalgasModel} from '../../models/malgasModel.js'
import { MalgasController } from '../../controllers/malgasController.js';


export const malgasRouter = Router();

const malgasController = new MalgasController({malgasModel: MalgasModel })

malgasRouter.get('/', malgasController.getAll);

malgasRouter.get('/:id', malgasController.getById);

// malgheRouter.post('/', (req, res) => {
//  const validMalga = validateMalga(req.body);
//   if (validMalga.error) {
//     return res.status(400).json({ error: console.log(validMalga.error.format()) });
//   }
//   const newMalga = {
//     id: crypto.randomUUID(),
//     ...validMalga.data
//   };
//   malghe.push(newMalga);
//   res.status(201).json({ message: 'Malga created' });
// });