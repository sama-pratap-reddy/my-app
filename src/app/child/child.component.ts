import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() public ac:number=0;
      public bc:number=0;
  
  @Output() public bEvent:EventEmitter<number>=new EventEmitter();
send(){
this.bEvent.emit(this.bc);
this.bEvent.emit()
}
constructor(){}
}
