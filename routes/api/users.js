import {Router} from 'express';
import {randomUUID} from 'crypto';
import {UsersModel} from '../../models/usersModel.js'
import { UsersController } from '../../controllers/usersController.js';



export const usersRouter = Router();

const usersController = new UsersController({usersModel: UsersModel })

usersRouter.get('/', usersController.getAll);

usersRouter.get('/:id', usersController.getById);
// auth
usersRouter.post('/login', usersController.logIn);
usersRouter.post('/register', usersController.register);
usersRouter.post('/logout', usersController.logOut);
usersRouter.get('/potected', usersController.protected);