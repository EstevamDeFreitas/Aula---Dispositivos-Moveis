//import { classToPlain } from "class-transformer";
import { json } from "express";
interface IUserDelete {
    id: string;
}
class DeleteUserService {
  async execute({id}:IUserDelete) {

      console.log(id);
      var messagmsgeDelete = {
        message:"Registro excluido com sucesso"
      }
  
      return messagmsgeDelete;
  }
}

export { DeleteUserService };