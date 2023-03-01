import { Request, Response } from "express";
import { Sale, SaleService } from "../../services/SaleService";
import { UserService, User } from "../../services/UserService";

class UpdateSaleController{
    async handle(request : Request, response : Response){
        const sale : Sale = request.body;

        const saleService = SaleService.getService();

        saleService.update(sale);

        return response.json(sale);
    }
}

export {UpdateSaleController}