import { Request, Response } from "express";
import { UserService } from "../../services/UserService";
//import { CreateUserService } from "../services/CreateUserService";

class ListUserController {

  async handle(request: Request, response: Response) {

    //const createUserService = new CreateUserService();

    const userService = UserService.getService();

    // const user = await createUserService.execute({
    //   name,
    //   email,
    //   admin,
    //   password,
    // });
 
    // const user = {
    //     name : "teste",
    //     email : "teste@teste.com",
    //     admin : false,
    //     password : "THE PASSWORD IS CRIPTOGRAFADO TIO"
    // }
    

    return response.json(userService.getAllUsers());
  }
}

export { ListUserController };