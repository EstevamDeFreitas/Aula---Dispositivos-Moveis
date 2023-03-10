interface ICategoryRequest {
    id : number;
    name : string;
  }
  
  class UpdateCategoryService {
    async execute({ id, name }: ICategoryRequest) {
 
  
       var vCategory = {
       id:1, name:"Nome 1"
      }
  
      return vCategory;
    }
  }
  
  export { UpdateCategoryService };