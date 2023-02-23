import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  age=20;
  public phone:number = 9999999999
  public name:string ="Abc";
  public isindian:boolean = true
  public mobile:number = 91;
  submit(){
    alert("submit clicked");
  }
  cancel(){
    alert("double clicked")
  }
  enter(){
    alert("mouse entered")
  }
  leave(){
    alert("mouse leave")
  }
  key(){
    alert("key pressed")
  }
}
