import { Request, Response } from "express";
import { UserService, User } from "../../services/UserService";

class UpdateUserController{
    async handle(request : Request, response : Response){
        const user : User = request.body;

        const userService = UserService.getService();

        userService.updateUser(user);

        return response.json(user);
    }
}

export {UpdateUserController}