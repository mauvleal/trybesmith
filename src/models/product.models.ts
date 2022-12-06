import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
// import connection from './connection';
import Product from '../interfaces/product.interface';

class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getProduct(): Promise<Product[]> {
    const [rows] = await this
      .connection.execute<Product[] & RowDataPacket[]>('SELECT * FROM Trybesmith.Products');
    return rows;
  }

  async addProduct(product: Product): Promise<Product> {
    const { name, amount } = product;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }
}

export default ProductModel;