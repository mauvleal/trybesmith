import { Router } from 'express';
import OrdersController from '../controllers/order.controller';

const orderRouter = Router();

const orderController = new OrdersController();

orderRouter.get('/', orderController.controllerLogin);

export default orderRouter;