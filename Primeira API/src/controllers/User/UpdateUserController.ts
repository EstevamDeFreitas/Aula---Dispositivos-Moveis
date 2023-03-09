import { Request, Response } from "express";
import { UpdateUserService } from "../../services/User/UpdateUserService";
import { UserService, User } from "../../services/UserService";

class UpdateUserController{
    async handle(request : Request, response : Response){
        const user : User = request.body;

        const updateUserService = new UpdateUserService();

        updateUserService.execute(user);

        return response.json(user);
    }
}

export {UpdateUserController}