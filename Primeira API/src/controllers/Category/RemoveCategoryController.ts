import { Request, Response } from "express";
import { DeleteCategoryService } from "../../services/Category/DeleteCategoryService";
import { CategoryService } from "../../services/CategoryService";
import { ProductService } from "../../services/ProductService";
import { SaleService } from "../../services/SaleService";
import { UserService, User } from "../../services/UserService";

class RemoveCategoryController{
    async handle(request : Request, response : Response){
        const categoryId : string = request.params.id;

        const deleteCategoryService = new DeleteCategoryService();

        const result = deleteCategoryService.execute({id : categoryId});

        return response.json(result);
    }
}

export {RemoveCategoryController}