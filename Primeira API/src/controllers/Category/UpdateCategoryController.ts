import { Request, Response } from "express";
import { UpdateCategoryService } from "../../services/Category/UpdateCategoryService";
import { Category, CategoryService } from "../../services/CategoryService";
import { Product, ProductService } from "../../services/ProductService";
import { Sale, SaleService } from "../../services/SaleService";
import { UserService, User } from "../../services/UserService";

class UpdateCategoryController{
    async handle(request : Request, response : Response){
        const category : Category = request.body;

        const updateCategoryService = new UpdateCategoryService();

        const result = updateCategoryService.execute(category);

        return response.json(category);
    }
}

export {UpdateCategoryController}