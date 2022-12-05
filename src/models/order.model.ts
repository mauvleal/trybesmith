import { Pool, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import Order from '../interfaces/order.interface';

export default class OrderModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  async getOrder(): Promise<Order[]> {
    console.log('olha eu no model, se eu aparecer aqui... teu problema é SQL, demente!');
    const [rows] = await this
      .connection
      .execute<Order[] & RowDataPacket[]>(
      `SELECT Orders.id, Orders.userId, JSON_ARRAYAGG(Products.id) as productsIds
      FROM Trybesmith.Orders as Orders
      INNER JOIN Trybesmith.Products as Products
      ON Orders.id = Products.orderId
      GROUP BY Orders.id`,
    );
    return rows;
  }
}