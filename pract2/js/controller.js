window.addEventListener("DOMContentLoded",()=>productOperations.prepareProducts());
window.addEventListener("load",init);
function init(){
    printProducts();
}
const prepareImage=(photo)=>{
    var img = document.createElement("img");
    img.src = photo;
    return img;
}
    const prepareP=(price)=>{
        var p = document.createElement("p");
        p.innerText = price;
        return p;
    }
    const addToCart=(id)=>{
        var button = document.createElement("button");
        button.innerText = "Add To Cart";
        button.setAttribute("Data-id",id);
        button.addEventListener("click",addInCart);
        return button;
        
    }
    function addInCart(){
        var id = this.getAttribute("Data-id");
        console.log("add in cart",id);
        this.innerText = productOperations.toggle(id);
    }
    

function printProducts(){
    for (let product of productOperations.getProducts()){
        let myDiv = document.createElement("div");
//        var img = document.createElement("img");
//        img.src = product.photo;
       myDiv.appendChild(prepareImage(product.photo)) ;
//        var p = document.createElement("p");
//       p.innerText = "price "+product.price;
        myDiv.appendChild(prepareP(product.price));
        myDiv.appendChild(addToCart(product.id));
        document.body.appendChild(myDiv);
    }
}