function Product(title,price,discount) {
    this.title=title;
    this.price=price;
    this.discount=discount;
    this.printtotalprice=function(){
        return "Discount is" + this.price*this.discount;
    }
}
function funa(){
    return "test";
}
function funb(message){
    return message;
}

var productA=new Product("PA", 200,10);
var productB=new Product("PB",300,20);

console.log(funa());
console.log(funb("Hello"));
console.log(productA.title)
console.log(productA.price)
console.log(productB.title)
console.log(productA.printtotalprice());


