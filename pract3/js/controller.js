window.addEventListener("DOMContentLoaded",()=>productOperations.prepareProducts());
window.addEventListener("load",init);
const cartTotal = ()=>document.querySelector("#total").innerText = productOperations.getCount();
function init(){
    cartTotal();
    printProducts();
}
    const prepareImage=(photo)=>{
        var img = document.createElement("img");
        img.src  = photo;
        return img;
    }
    const prepareP=(price)=>{
        var p = document.createElement("p");
        p.innerText = price;
        return p;
    }
    const addToCart = (id)=>{
        var button = document.createElement("button");
        button.innerText = "Add To Cart";
        button.setAttribute("data-id",id);
        button.addEventListener("click",addInCart);
        return button;
    }
    function addInCart(){
        var id = this.getAttribute("data-id");
        console.log("Add in Cart call", id);
        
        this.innerText = productOperations.toggle(id);
        cartTotal();
    }
    function printProducts(){
        for(let product of productOperations.getProducts()){
            let myDiv = document.createElement("div");
            myDiv.appendChild(prepareImage(product.photo));
            myDiv.appendChild(prepareP(product.price));
            myDiv.appendChild(addToCart(product.id));
            document.body.appendChild(myDiv);
        }
    }

