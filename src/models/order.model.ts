import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import Order from '../interfaces/order.interface';

export default class OrderModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  async getOrder(): Promise<Order[]> {
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

  public async modelOrdersPost(orders: Order): Promise<number> {
    const { userId } = orders;
    
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [userId],
    );
    return insertId;
  }

  public async modelOrdersPut(id: number, orderId: number) {
    const result = await this.connection.execute(
      'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
      [orderId, id],
    );
    return result;
  }
}