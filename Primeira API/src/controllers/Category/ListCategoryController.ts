import { Request, Response } from "express";
import { ListCategoryService } from "../../services/Category/ListCategoryService";
import { CategoryService } from "../../services/CategoryService";
import { ProductService } from "../../services/ProductService";
import { SaleService } from "../../services/SaleService";
import { UserService } from "../../services/UserService";
//import { CreateUserService } from "../services/CreateUserService";

class ListCategoryController {

  async handle(request: Request, response: Response) {

    const listCategoryService = new ListCategoryService();

    const categories = await listCategoryService.execute();

    return response.json(categories);
  }
}

export { ListCategoryController };