import ProductModel from '../models/product.models';
import Product from '../interfaces/product.interface';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel();
  }

  public async addProductServ(product: Product): Promise<Product> {
    return this.model.addProduct(product);
  }
}

export default ProductService;