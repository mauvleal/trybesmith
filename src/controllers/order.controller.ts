import { Request, Response } from 'express';
import OrdersService from '../services/order.service';

class OrdersController {
  constructor(private ordersService = new OrdersService()) { }

  public controllerOrdersGetAll = async (_req: Request, res: Response): Promise<Response> => {
    const ordersGetAll = await this.ordersService.serviceOrdersGetAll();
    return res.status(200).json(ordersGetAll);
  };

  public controllerOrdersPost = async (req: Request, res: Response): Promise<Response> => {
    const orders = req.body;
    
    const { type, message } = await this
      .ordersService.serviceOrdersPost({ userId: orders.user.id, productsIds: orders.productsIds });

    if (type === 'BAD_REQUEST') {
      return res.status(400).json({ message });
    }

    if (type === 'INVALID_VALUE') {
      return res.status(422).json({ message });
    }

    return res.status(201).json(message);
  };
}

export default OrdersController;