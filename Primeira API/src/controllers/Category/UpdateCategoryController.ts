import { Request, Response } from "express";
import { Category, CategoryService } from "../../services/CategoryService";
import { Product, ProductService } from "../../services/ProductService";
import { Sale, SaleService } from "../../services/SaleService";
import { UserService, User } from "../../services/UserService";

class UpdateCategoryController{
    async handle(request : Request, response : Response){
        const category : Category = request.body;

        const categoryService = CategoryService.getService();

        categoryService.update(category);

        return response.json(category);
    }
}

export {UpdateCategoryController}