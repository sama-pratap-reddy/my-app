import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
public ap:number=0;
public bp:number=0;
public pic:number=0;
catch(value:number){
  this.bp=value
  this.pic=value
}
}
