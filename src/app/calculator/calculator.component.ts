import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  public number1:number =0;
  public number2:number =0;
  public Result:number =0;
sum(){
  this.Result=this.number1+this.number2
}
sub(){
  this.Result=this.number1-this.number2
}
mul(){
  this.Result=this.number1*this.number2
}
div(){
  this.Result=this.number1/this.number2
}
}
