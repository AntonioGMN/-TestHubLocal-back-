import { Router } from 'express';
import * as locaisController from '../controllers/locaisController.js';
import validateToken from '../middlerware/validateToken.js';

const locaisRouter = Router();
locaisRouter.post('/locais', validateToken, locaisController.create);
locaisRouter.get('/locais', validateToken, locaisController.get);
locaisRouter.post(
  '/locais/responsavel',
  validateToken,
  locaisController.createResponsavel,
);
locaisRouter.get(
  '/locais/responsaveis/:localId',
  validateToken,
  locaisController.getResponsaveis,
);

locaisRouter.put(
  '/locais/update/:localId',
  validateToken,
  locaisController.update,
);

locaisRouter.put(
  '/locais/responsaveis/update/:responsavelId',
  validateToken,
  locaisController.updateResponsavel,
);

export default locaisRouter;
