import OrderModel from '../models/order.model';
import Order from '../interfaces/order.interface';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel();
  }

  public async getOrdersServ(): Promise<Order[]> {
    const order = await this.model.getOrder();
    return order;
  }
}

export default OrderService;