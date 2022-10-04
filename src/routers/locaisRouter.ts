import { Router } from 'express';
import * as locaisController from '../controllers/locaisController.js';
import validateToken from '../middlerware/validateToken.js';

const locaisRouter = Router();
locaisRouter.post('/locais', validateToken, locaisController.create);
locaisRouter.get('/locais', validateToken, locaisController.get);

export default locaisRouter;
