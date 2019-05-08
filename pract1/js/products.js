class Product{
    constructor(id,name,photo="",price,desc){
        this.id = id;
        this.name = name;
        this.photo = photo;
        this.price = price|| 0;
        this.desc = desc;
        
    }
}