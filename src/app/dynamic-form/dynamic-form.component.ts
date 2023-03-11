import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent {
public dynamicForm:FormGroup =new FormGroup(
  {
    type:new FormControl(),
  bus:new FormControl(),
  hostel:new FormControl(),
  cards: new FormArray([])
  }
  
)
get CardsFormArray(){
  return this.dynamicForm.get('cards') as FormArray;
}
add(){
  this.CardsFormArray.push(
    new FormGroup(
      {
        number: new FormControl(),
        expiry: new FormControl(),
        cvv: new FormControl()
      }
    )
  )
}
delete(i:number){
  this.CardsFormArray.removeAt(i);
}
submit(){
  console.log(this.dynamicForm);
}
}
