import { Router } from 'express';
import productsRouter from './product.routes';
import userRouter from './users.routers';
import orderRouter from './orders.routes';
import loginRouter from './login.router';

const router = Router();

router.use('/products', productsRouter);
router.use('/users', userRouter);
router.use('/orders', orderRouter);
router.use('/login', loginRouter);

export default router;