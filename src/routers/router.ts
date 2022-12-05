import { Router } from 'express';
import productsRouter from './product.routes';
import userRouter from './users.routers';

const router = Router();

router.use('/products', productsRouter);
router.use('/users', userRouter);

export default router;