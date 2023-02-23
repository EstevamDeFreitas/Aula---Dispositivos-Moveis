import { Request, Response } from "express";
import { UserService, User } from "../services/UserService";

class RemoveUserController{
    async handle(request : Request, response : Response){
        const userEmail : string = request.params.email;

        const userService = UserService.getService();

        return response.json(userService.removeUser(userEmail));
    }
}

export {RemoveUserController}