import { Router } from 'express';
import OrdersController from '../controllers/order.controller';
import validation from '../middlewares/auth.middleware';

const orderRouter = Router();

const orderController = new OrdersController();

orderRouter.get('/', orderController.controllerOrdersGetAll);

orderRouter.post('/', validation, orderController.controllerOrdersPost);

export default orderRouter;