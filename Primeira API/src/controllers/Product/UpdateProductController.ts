import { Request, Response } from "express";
import { Product, ProductService } from "../../services/ProductService";
import { Sale, SaleService } from "../../services/SaleService";
import { UserService, User } from "../../services/UserService";

class UpdateProductController{
    async handle(request : Request, response : Response){
        const product : Product = request.body;

        const productService = ProductService.getService();

        productService.update(product);

        return response.json(product);
    }
}

export {UpdateProductController}