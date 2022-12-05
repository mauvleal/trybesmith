import { Router } from 'express';
import productsRouter from './product.routes';

const router = Router();

router.use('/products', productsRouter);

export default router;