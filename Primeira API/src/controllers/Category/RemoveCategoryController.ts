import { Request, Response } from "express";
import { CategoryService } from "../../services/CategoryService";
import { ProductService } from "../../services/ProductService";
import { SaleService } from "../../services/SaleService";
import { UserService, User } from "../../services/UserService";

class RemoveCategoryController{
    async handle(request : Request, response : Response){
        const categoryId : number = Number.parseInt(request.params.id);

        const categoryService = CategoryService.getService();

        return response.json(categoryService.remove(categoryId));
    }
}

export {RemoveCategoryController}