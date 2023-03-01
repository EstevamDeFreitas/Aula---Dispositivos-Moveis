import { Request, Response } from "express";
import { CategoryService } from "../../services/CategoryService";
import { ProductService } from "../../services/ProductService";
import { SaleService } from "../../services/SaleService";
import { UserService } from "../../services/UserService";
//import { CreateUserService } from "../services/CreateUserService";

class ListCategoryController {

  async handle(request: Request, response: Response) {

    const categoryService = CategoryService.getService();

    return response.json(categoryService.getAll());
  }
}

export { ListCategoryController };