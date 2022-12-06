import { Router } from 'express';
import OrdersController from '../controllers/order.controller';
import validateToken from '../middlewares/validateToken';

const orderRouter = Router();

const orderController = new OrdersController();

orderRouter.get('/', orderController.controllerOrdersGetAll);

orderRouter.post('/', validateToken, orderController.controllerOrdersPost);

export default orderRouter;