import { Router } from 'express';
import empresasRouter from './empresasRouter.js';
import locaisRouter from './locaisRouter.js';
import ticketsRouter from './ticketsRouter.js';
import userRouter from './userRouter.js';

const router = Router();
router.use(userRouter);
router.use(empresasRouter);
router.use(locaisRouter);
router.use(ticketsRouter);
export default router;
