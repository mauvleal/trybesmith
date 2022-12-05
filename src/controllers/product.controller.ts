import { Request, Response } from 'express';
import ProductService from '../services/product.service';

class ProductController {
  constructor(private productService = new ProductService()) { }

  public addProductContr = async (req: Request, res: Response) => {
    const product = req.body;

    const productCreated = await this.productService.addProductServ(product);
    res.status(201).json(productCreated);
  };
}

export default ProductController;