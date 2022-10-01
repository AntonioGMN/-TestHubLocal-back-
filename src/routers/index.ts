import { Router } from 'express';
import empresasRouter from './empresasRouter.js';
import locaisRouter from './locaisRouter.js';
import userRouter from './userRouter.js';

const router = Router();
router.use(userRouter);
router.use(empresasRouter);
router.use(locaisRouter);
export default router;
