import { json } from "express";
interface ICategoryDelete {
    id: string;
}
class DeleteCategoryService {
  async execute({id}:ICategoryDelete) {

      console.log(id);
      var messagmsgeDelete = {
        message:"Registro excluido com sucesso"
      }
  
      return messagmsgeDelete;
  }
}

export { DeleteCategoryService };