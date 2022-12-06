import Orders from '../interfaces/order.interface';
// import connection from '../models/connection';
import OrdersModel from '../models/order.model';
import { verifyProductsIds } from './validations/validations.inputs';

class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel();
  }

  public async serviceOrdersGetAll(): Promise<Orders[]> {
    const ordersService = this.model.getOrder();
    return ordersService;
  }

  public async serviceOrdersPost(orders: Orders) {
    const error = await verifyProductsIds(orders.productsIds);
    
    if (error.type) {
      return error;
    }
    
    const orderId = await this.model.modelOrdersPost(orders);
    const updatedProducts = orders.productsIds.map(async (productsId) => (
      this.model.modelOrdersPut(productsId, orderId)
    ));
    await Promise.all(updatedProducts);
    
    return { type: null, message: orders };
  }
}

export default OrdersService;