import { classToPlain } from "class-transformer";

class ListCategoryService {
  async execute() {

    const categorysret = [{
        "id": "1",
        "nome": "Teste"
        
    },
    {
        "id": "2",
        "nome": "Teste 02"
        
    } ]

    return classToPlain(categorysret)
  }
}

export { ListCategoryService };