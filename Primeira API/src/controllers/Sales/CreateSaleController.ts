import { Request, Response } from "express";
import { Sale, SaleService } from "../../services/SaleService";
//import { CreateUserService } from "../services/CreateUserService";


class CreateSaleController {

  async handle(request: Request, response: Response) {
    const sale: Sale = request.body;

    const saleService = SaleService.getService();

    saleService.add(sale);


    return response.json(sale);
  }
}

export { CreateSaleController };