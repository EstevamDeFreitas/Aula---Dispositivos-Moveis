class ProductService{
    private products : Array<Product>;
    private static currentInstance : ProductService;

    private constructor(){
        this.products = new Array<Product>();
    }

    public static getService(){
        if(!ProductService.currentInstance){
            ProductService.currentInstance = new ProductService();
        }

        return ProductService.currentInstance;
    }

    getById(id : number){
        return this.products.find(x => x.id == id);
    }

    getAll(){
        return this.products;
    }

    add(product : Product){
        if(this.products.length == 0){
            product.id = 0
        }
        else{
            product.id = this.products[this.products.length - 1].id + 1;
        }

        this.products.push(product);
    }

    update(product : Product){
        let index = this.products.findIndex(x => x.id == product.id);

        if(index < 0){
            return;
        }

        this.products[index].description = product.description;
        this.products[index].name = product.name;
        this.products[index].price = product.price;
        this.products[index].url = product.url;
    }

    remove(id : number){
        let index = this.products.findIndex(x => x.id == id);

        this.products.splice(index, 1);
    }
}


class Product{
    id : number = 0;
    name : string = "";
    description : string = "";
    price : number = 0;
    url : string = "";
}

export{Product, ProductService}