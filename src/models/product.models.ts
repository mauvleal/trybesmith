import { Pool, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import Product from '../interfaces/product.interface';

export default class ProductModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  async addProduct(product: Product): Promise<Product> {
    const { name, amount } = product;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return { id: insertId, ...product };
  }
}