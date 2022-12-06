import { Request, Response } from 'express';
import ProductService from '../services/product.service';

class ProductController {
  constructor(private productService = new ProductService()) { }

  public addProductContr = async (req: Request, res: Response): Promise<Response> => {
    const product = req.body;

    const { type, message } = await this.productService.addProductServ(product);
    if (type === 'BAD_REQUEST') {
      return res.status(400).json({ message });
    }

    if (type === 'INVALID_VALUE') {
      return res.status(422).json({ message });
    }

    return res.status(201).json(message);
  };

  public getProductContr = async (_req: Request, res: Response): Promise<Response> => {
    const products = await this.productService.getProductServ();
    return res.status(200).json(products);
  };
}

export default ProductController;