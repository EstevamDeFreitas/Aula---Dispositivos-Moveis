import { Request, Response } from "express";
import { CreateUserService } from "../../services/User/CreateUserService";
import { User, UserService } from "../../services/UserService";


class CreateUserController {

  async handle(request: Request, response: Response) {
    const user: User = request.body;

    const createUserService = new CreateUserService();

    let userResponse = await createUserService.execute(user);


    return response.json(userResponse);
  }
}

export { CreateUserController };