import { Request, Response } from "express";
import { DeleteUserService } from "../../services/User/DeleteUserService";
import { UserService, User } from "../../services/UserService";

class RemoveUserController{
    async handle(request : Request, response : Response){
        const userid : string = request.params.id;

        const removeUserService = new DeleteUserService();

        removeUserService.execute({id : userid});

        return response.json(userid);
    }
}

export {RemoveUserController}