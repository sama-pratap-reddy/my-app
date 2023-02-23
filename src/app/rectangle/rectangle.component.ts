import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {
  public number1:number =0;
  public number2:number =0;
  public Result:number =0;
area(){
  this.Result=this.number1*this.number2
}
perimeter(){
  this.Result=this.number1*2+2*this.number2
}
}
