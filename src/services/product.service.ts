import Product from '../interfaces/product.interface';
import connection from '../models/connection';
import ProductModel from '../models/product.models';
import { verifyProduct } from './validations/validations.inputs';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async addProductServ(product: Product) {
    const error = await verifyProduct(product);

    if (error.type) {
      return error;
    }

    const productService = await this.model.addProduct(product);
    
    return { type: null, message: productService };
  }

  public async getProductServ(): Promise<Product[]> {
    const products = await this.model.getProduct();
    return products;
  }
}

export default ProductService;