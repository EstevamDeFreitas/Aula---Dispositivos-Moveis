import { Request, Response } from "express";
import { ProductService } from "../../services/ProductService";
import { SaleService } from "../../services/SaleService";
import { UserService } from "../../services/UserService";
//import { CreateUserService } from "../services/CreateUserService";

class ListProductController {

  async handle(request: Request, response: Response) {

    const productService = ProductService.getService();

    return response.json(productService.getAll());
  }
}

export { ListProductController };