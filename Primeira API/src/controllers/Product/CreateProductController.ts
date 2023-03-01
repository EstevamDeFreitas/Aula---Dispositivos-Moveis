import { Request, Response } from "express";
import { Product, ProductService } from "../../services/ProductService";
import { Sale, SaleService } from "../../services/SaleService";
//import { CreateUserService } from "../services/CreateUserService";


class CreateProductController {

  async handle(request: Request, response: Response) {
    const product: Product = request.body;

    const productService = ProductService.getService();

    productService.add(product);


    return response.json(product);
  }
}

export { CreateProductController };