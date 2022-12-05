import { Request, Response } from 'express';
import ProductService from '../services/product.service';

class ProductController {
  constructor(private productService = new ProductService()) { }

  public addProductContr = async (req: Request, res: Response) => {
    const product = req.body;

    const productCreated = await this.productService.addProductServ(product);
    res.status(201).json(productCreated);
  };

  public getProductContr = async (_req: Request, res: Response) => {
    const products = await this.productService.getProductServ();
    res.status(200).json(products);
  };
}

export default ProductController;