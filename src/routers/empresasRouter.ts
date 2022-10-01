import { Router } from 'express';
import * as empresasController from '../controllers/empresasController.js';
import validateToken from '../middlerware/validateToken.js';

const empresasRouter = Router();
empresasRouter.post(
  '/empresas/create',
  validateToken,
  empresasController.create,
);
empresasRouter.get('/empresas', validateToken, empresasController.get);

export default empresasRouter;
