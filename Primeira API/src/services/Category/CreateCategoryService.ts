interface ICategoryRequest {
    name : string;
 }

 class CreateCategoryService {
    async execute({ name }: ICategoryRequest) {
      
   
      var vCategory = {
        name:"Nome 1", id : 1
      }
  
      return vCategory;
    }
  }
  export { CreateCategoryService };