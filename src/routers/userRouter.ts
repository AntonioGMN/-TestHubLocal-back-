import { Router } from 'express';
import * as userController from '../controllers/userController.js';
import validateSchema from '../middlerware/schemaValidationMiddleware.js';
import validateToken from '../middlerware/validateToken.js';
import loginSchema from '../schemas/loginSchema.js';
import userSchema from '../schemas/userSchema.js';

const userRouter = Router();
userRouter.get('/users', userController.get);
userRouter.post('/signUp', validateSchema(userSchema), userController.sighUp);
userRouter.post('/login', validateSchema(loginSchema), userController.login);
userRouter.delete('/logout', validateToken, userController.logout);

export default userRouter;
