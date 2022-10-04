import { Router } from 'express';
import * as ticketsController from '../controllers/ticketsController.js';
import validateToken from '../middlerware/validateToken.js';

const ticketsRouter = Router();
ticketsRouter.post('/tickets', validateToken, ticketsController.create);
ticketsRouter.get('/tickets', validateToken, ticketsController.get);

export default ticketsRouter;
