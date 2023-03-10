import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/Category/CreateCategoryService";
import { Category, CategoryService } from "../../services/CategoryService";
import { Product, ProductService } from "../../services/ProductService";
import { Sale, SaleService } from "../../services/SaleService";
//import { CreateUserService } from "../services/CreateUserService";


class CreateCategoryController {

  async handle(request: Request, response: Response) {
    const category: Category = request.body;

    const createCategoryService = new CreateCategoryService();

    createCategoryService.execute(category);


    return response.json(category);
  }
}

export { CreateCategoryController };