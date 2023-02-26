class CategoryService{
    private categories : Array<Category>;
    private static currentInstance : CategoryService;

    private constructor(){
        this.categories = new Array<Category>();
    }

    public static getService(){
        if(!CategoryService.currentInstance){
            CategoryService.currentInstance = new CategoryService();
        }

        return CategoryService.currentInstance;
    }

    getById(id : number){
        return this.categories.find(x => x.id = id);
    }

    getAll(){
        return this.categories;
    }

    add(category : Category){
        if(this.categories.length == 0){
            category.id = 0
        }
        else{
            category.id = this.categories[this.categories.length - 1].id + 1;
        }
        this.categories.push(category);
    }

    update(category : Category){
        let index = this.categories.findIndex(x => x.id == category.id);

        if(index < 0){
            return;
        }

        this.categories[index].name = category.name;
    }

    remove(id : number){
        let index = this.categories.findIndex(x => x.id == id);

        this.categories.splice(index, 1);
    }
}

class Category{
    id : number = 0;
    name : string = "";
}

export {CategoryService, Category}