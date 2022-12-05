import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const productsRouter = Router();

const productController = new ProductController();

productsRouter.post('/', productController.addProductContr);

productsRouter.get('/', productController.getProductContr);

export default productsRouter;