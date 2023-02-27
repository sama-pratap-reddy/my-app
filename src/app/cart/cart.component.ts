import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  public products: any=[
    {name:'pen',price:'10',rating:2,isFreeDelivery:true},
    {name:'shirt',price:'100',rating:3,isFreeDelivery:false},
    {name:'mobile',price:'1000',rating:2,isFreeDelivery:false},
    {name:'tv',price:'20000',rating:5,isFreeDelivery:true},
    {name:'pencil',price:'5',rating:4,isFreeDelivery:true},
    {name:'shirt',price:'100',rating:3,isFreeDelivery:false},
    {name:'mobile',price:'1000',rating:2,isFreeDelivery:true},
    {name:'tv',price:'20000',rating:5,isFreeDelivery:false},
    {name:'shirt',price:'100',rating:3,isFreeDelivery:false},
    {name:'mobile',price:'1000',rating:2,isFreeDelivery:true},
    {name:'tv',price:'20000',rating:5,isFreeDelivery:false}
  ] ;
  delete(i:number)
  {
this.products.splice(i,1);
  }
 count()
 {
  alert("cart count is"+this.products.length);
 } 

}
