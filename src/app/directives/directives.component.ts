import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
public ages :number[] = [10,20,30,40];
public names: string[] = ["spr","svr","gg"];
public states: string[] = ["state","ts","ap","ap"];
public users: any =[
  {name:'abc', phone:1234567889},
  {name:'xyz',phone:33333333333},
  { name:'tttt' ,phone:44444444}
]
public products: any=[
  {name:'pen',price:'10',rating:2},
  {name:'shirt',price:'100',rating:3},
  {name:'mobile',price:'1000',rating:2},
  {name:'tv',price:'20000',rating:5},
  
]
}
