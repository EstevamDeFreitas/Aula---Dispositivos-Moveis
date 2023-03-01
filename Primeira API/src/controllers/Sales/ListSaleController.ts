import { Request, Response } from "express";
import { SaleService } from "../../services/SaleService";
import { UserService } from "../../services/UserService";
//import { CreateUserService } from "../services/CreateUserService";

class ListSaleController {

  async handle(request: Request, response: Response) {

    const saleService = SaleService.getService();

    return response.json(saleService.getAll());
  }
}

export { ListSaleController };