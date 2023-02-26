class SaleService{
    private sales : Array<Sale>;
    private static currentInstance : SaleService;

    private constructor(){
        this.sales = new Array<Sale>();
    }

    public static getService(){
        if(!SaleService.currentInstance){
            SaleService.currentInstance = new SaleService();
        }

        return SaleService.currentInstance;
    }

    getById(id : number){
        return this.sales.find(x => x.id = id);
    }

    getAll(){
        return this.sales;
    }

    add(sale : Sale){
        if(this.sales.length == 0){
            sale.id = 0
        }
        else{
            sale.id = this.sales[this.sales.length - 1].id + 1;
        }
        this.sales.push(sale);
    }

    update(sale : Sale){
        let index = this.sales.findIndex(x => x.id == sale.id);

        if(index < 0){
            return;
        }

        this.sales[index].desc = sale.desc;
        this.sales[index].obs = sale.obs;
        this.sales[index].productId = sale.productId;
        this.sales[index].total = sale.total;
        this.sales[index].userId = sale.userId;
    }

    remove(id : number){
        let index = this.sales.findIndex(x => x.id == id);

        this.sales.splice(index, 1);
    }
}

class Sale{
    id : number = 0;
    productId : number = 0;
    userId : number = 0;
    total : number = 0;
    desc : string = "";
    obs: string = "";
}