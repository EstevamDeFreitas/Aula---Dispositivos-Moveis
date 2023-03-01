import { Request, Response } from "express";
import { ProductService } from "../../services/ProductService";
import { SaleService } from "../../services/SaleService";
import { UserService, User } from "../../services/UserService";

class RemoveProductController{
    async handle(request : Request, response : Response){
        const productId : number = Number.parseInt(request.params.id);

        const productService = ProductService.getService();

        return response.json(productService.remove(productId));
    }
}

export {RemoveProductController}