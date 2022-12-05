import { Request, Response } from 'express';
import OrderService from '../services/order.service';

class OrderController {
  constructor(private orderService = new OrderService()) { }

  public getOrderContr = async (req: Request, res: Response) => {
    const orders = await this.orderService.getOrdersServ();
    res.status(200).json(orders);
  };
}

export default OrderController;