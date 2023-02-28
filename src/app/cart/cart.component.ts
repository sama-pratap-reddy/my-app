import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  public products: any=[
    {name:'pen',price:10,rating:2,isFreeDelivery:true},
    {name:'shirt',price:100,rating:3,isFreeDelivery:false},
    {name:'mobile',price:1000,rating:2,isFreeDelivery:false},
    {name:'tv',price:20000,rating:5,isFreeDelivery:true},
    {name:'pencil',price:5,rating:4,isFreeDelivery:true},
    {name:'shirt',price:100,rating:3,isFreeDelivery:false},
    {name:'mobile',price:1000,rating:2,isFreeDelivery:true},
    {name:'tv',price:20000,rating:5,isFreeDelivery:false},
    {name:'shirt',price:100,rating:3,isFreeDelivery:false},
    {name:'mobile',price:1000,rating:2,isFreeDelivery:true},
    {name:'tv',price:20000,rating:5,isFreeDelivery:false},
    
  ] ;
  delete(i:number)
  {
this.products.splice(i,1);
  }
 count()
 {
  alert("cart count is"+this.products.length);
 } 
 free()
 {
  this.products = this.products.filter((product:any) => product.isFreeDelivery == true);
 }
 pricelh()
 {
  this.products=this.products.sort((a:any,b:any)=>a.price-b.price);
 }
 pricehl()
 {
  this.products=this.products.sort((a:any,b:any)=>b.price-a.price);
 }
discount()
{
  this.products=this.products.map((product:any)=>{
    product.price = product.price/2;
    return product;
  })
}
charges(){
  this.products=this.products.map((product:any)=>{
    if(product.isFreeDelivery==false){
      product.price=product.price+20;
    }
    return product;
  })
}
total(){
  alert(this.products.reduce((sum:any,product:any)=>sum+product.price,0));
}
ratinglh()
 {
  this.products=this.products.sort((a:any,b:any)=>a.rating-b.rating);
 }
 ratinghl()
 {
  this.products=this.products.sort((a:any,b:any)=>b.rating-a.rating);
 }
 public term:string="";
 search(){
  this.products=this.products.filter((product:any)=>product.name.indexOf(this.term)!= -1)
 }
 public product:any={};
 create(){
  this.products.unshift(this.product)
 }
}
