const productOperations  = {
    products:[],
    inCart:[],
    getCount(){
        return this.inCart.length;
    },
    serach(id){
        return this.products.find(product=>product.id==id);
    },
    toggle(id){
    var product = this.search(id)
    product.toggle();
    return product.isAdded?"Already in Cart":"Add in Cart";
},
    getProducts(){
    return this.products;
},
    prepareProducts(){
   var shirt = new Product(1,"levi-Shirt","https://www.loofes-clothing.com/images/levis-juniors-basic-batwing-long-sleeve-t-shirt-black-p22324-89333_image.jpg",800,"Black Shirt") ;
    var jeans = new Product(2,"pepe-jeans","http://assets.myntassets.com/assets/images/8333331/2019/3/28/1b108410-ce3e-4576-b4b4-425edfc131141553775390907-Pepe-Jeans-Men-Blue-Slim-Fit-Low-Rise-Low-Distress-Stretchab-1.jpg",1500,"blue denim jeans") ;
    var cap = new Product(3,"zoom-cap","http://cdn.shopify.com/s/files/1/1227/4478/products/mockup-31a9f127_1024x1024.png?v=1496447278",500,"red cap with strips");
    var shoes = new Product(4,"action-shoes","https://n1.sdlcdn.com/imgs/a/h/b/SDL053020288_1392284598_image1-c95b0.jpg",2500,"black Formal shoes");
  this.products.push(shirt);
    this.products.push(jeans);
    this.products.push(cap);
    this.products.push(shoes);
}
}