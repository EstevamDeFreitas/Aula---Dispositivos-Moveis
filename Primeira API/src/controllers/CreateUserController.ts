import { Request, Response } from "express";
import { User, UserService } from "../services/UserService";
//import { CreateUserService } from "../services/CreateUserService";


class CreateUserController {

  async handle(request: Request, response: Response) {
    const user: User = request.body;

    const userService = UserService.getService();

    userService.addUser(user);


    return response.json(user);
  }
}

export { CreateUserController };