import { Router } from 'express';
import productsRouter from './product.routes';
import userRouter from './users.routers';
import orderRouter from './orders.routers';

const router = Router();

router.use('/products', productsRouter);
router.use('/users', userRouter);
router.use('/orders', orderRouter);

export default router;