import { Request, Response } from "express";
import { SaleService } from "../../services/SaleService";
import { UserService, User } from "../../services/UserService";

class RemoveSaleController{
    async handle(request : Request, response : Response){
        const saleId : number = Number.parseInt(request.params.id);

        const saleService = SaleService.getService();

        return response.json(saleService.remove(saleId));
    }
}

export {RemoveSaleController}