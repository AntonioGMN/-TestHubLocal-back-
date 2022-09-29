import { Router } from 'express';
import empresasRouter from './empresasRouter.js';
import userRouter from './userRouter.js';

const router = Router();
router.use(userRouter);
router.use(empresasRouter);
export default router;
